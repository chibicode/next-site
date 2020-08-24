/* eslint-disable no-await-in-loop */
import algoliasearch from 'algoliasearch';
import unified from 'unified';
import markdown from 'remark-parse';
import remarkToRehype from 'remark-rehype';
import raw from 'rehype-raw';
import toString from 'mdast-util-to-string';
import GithubSlugger from 'github-slugger';
import md5 from 'md5';
import { removeFromLast } from '../lib/docs/utils';
import { getCurrentTag, fetchDocsManifest } from '../lib/docs/page';
import { getRawFileFromRepo } from '../lib/github/raw';
import 'next/dist/next-server/server/node-polyfill-fetch';

process.on('unhandledRejection', (error, promise) => {
  // eslint-disable-next-line no-console
  console.error('Promise Rejected:', promise);
  throw error;
});

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const CONTAINERS = ['ul', 'ol', 'details'];
const CONTENT = ['p', 'blockquote', 'li'];

const processor = unified()
  .use(markdown)
  .use(remarkToRehype, { allowDangerousHTML: true })
  // Add custom HTML found in the markdown file to the AST
  .use(raw)
  .use(toTree);

function toTree() {
  // A compiler is required, and we only need the AST
  this.Compiler = tree => tree;
}

function flattenRoutes(carry, { path, routes }) {
  if (path) {
    carry.push(path);
  } else if (routes) {
    routes.forEach(route => {
      flattenRoutes(carry, route);
    });
  }
  return carry;
}

function getText(node) {
  // Replace non-breaking spaces (char code 160) with normal spaces to avoid style issues
  return toString(node).replace(/\xA0/g, ' ');
}

async function addRecords(filePath, tag) {
  const md = await getRawFileFromRepo(filePath, tag);
  const tree = await processor.process(md);
  const { contents } = tree;
  const slugger = new GithubSlugger();
  const records = [];

  let record = {};
  let pos = 0;

  const handleHeading = node => {
    const value = getText(node);

    switch (node.tagName) {
      case 'h1':
        record = { title: value };
        break;
      case 'h2':
        record.section = value;
        record.anchor = slugger.slug(value);
        delete record.subSection;
        break;
      case 'h3':
        record.subSection = value;
        record.anchor = slugger.slug(value);
        break;
      case 'h4':
      case 'h5':
      case 'h6':
        // Unhandled headings are added in its own record as the content
        record.anchor = slugger.slug(value);
        addRecord(node);
        break;
      default:
        throw new Error(`Unhandled node: ${node.tagName}`);
    }
  };
  const addRecord = node => {
    const content = getText(node);
    const path = removeFromLast(filePath, '.');
    const objectID = `${path}-${md5(content)}`;
    let position = pos;

    if (record.summary?.toLowerCase() === 'examples') {
      // Deprioritize the examples we have for most features so they only appear
      // for exact matches or when there are no alternatives
      position += 100;
    }
    if (node.tagName === 'blockquote') {
      // Deprioritize notes we usually put in blockquotes, those usually don't provide
      // a description of the feature but may come before it
      position += 5;
    }

    records.push({ ...record, content, path, objectID, position });
    pos += 1;
  };
  const handleNode = (node, parent) => {
    if (node.type === 'element') {
      if (node.tagName === 'summary' && parent.tagName === 'details') {
        record.summary = getText(node);
        return;
      }

      if (CONTENT.includes(node.tagName)) {
        addRecord(node);
        return;
      }

      if (HEADINGS.includes(node.tagName)) {
        handleHeading(node);
        return;
      }

      if (CONTAINERS.includes(node.tagName)) {
        if (node.children) {
          node.children.forEach(n => handleNode(n, node));

          if (node.tagName === 'details') {
            // Remove the summary so it doesn't get used in unrelated records
            delete record.summary;
          }
        }
      }
    }
  };

  contents.children.forEach(handleNode);

  return records;
}

async function indexDocs() {
  const client = algoliasearch('NNTAHQI9C5', process.env.ALGOLIA_API_KEY);
  // Init the docs index, this will throw if the index doesn't exist
  const index = await client.initIndex('nextjs_docs');
  const tag = await getCurrentTag();
  const manifest = await fetchDocsManifest(tag);
  const files = manifest.routes.reduce(flattenRoutes, []);
  const recordsByFile = await Promise.all(files.map(filePath => addRecords(filePath, tag)));
  // Group all records into a single array
  const objects = recordsByFile.reduce((records, record) => {
    records.push(...record);
    return records;
  }, []);

  // Init a temporal index which will receive the objects
  const tmpIndex = await client.initIndex('nextjs_docs_tmp');

  // Copy the settings from the main index to the temporal index
  await client.copySettings(index.indexName, tmpIndex.indexName);

  while (objects.length) {
    const { taskIDs } = await tmpIndex.saveObjects(objects.splice(0, 1000));

    while (taskIDs.length) {
      await tmpIndex.waitTask(taskIDs.shift());
    }
  }

  // Move the temporal index to the docs index, this will rename the temporal index
  // so we don't have to remove it
  await client.moveIndex(tmpIndex.indexName, index.indexName);
}

indexDocs();
