import { memo } from 'react';
import { GITHUB_URL, REPO_NAME, REPO_BRANCH } from '../../lib/github-constants';
import Feedback from '../docs/feedback';
import DocsLayout from '../docs/docs-layout';

function areEqual(prevProps, props) {
  return prevProps.path === props.path;
}

function ExamplesSlugPage({ title, path, html }) {
  const editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/${REPO_BRANCH}${path}/README.md`;
  const viewUrl = `${GITHUB_URL}/${REPO_NAME}/tree/${REPO_BRANCH}${path}/`;

  return (
    <DocsLayout>
      {/* eslint-disable-next-line */}
      <h1>{title}</h1>
      <p>
        You can{' '}
        <a href={viewUrl} className="absolute" target="_blank" rel="noopener noreferrer">
          view this example on GitHub
        </a>
        .
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <Feedback />
      <footer>
        <a href={editUrl} target="_blank" rel="noopener noreferrer">
          Edit this page on GitHub
        </a>
      </footer>
    </DocsLayout>
  );
}

export default memo(ExamplesSlugPage, areEqual);
