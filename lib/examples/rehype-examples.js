import remove from 'unist-util-remove';
import rehypeDocs from '../docs/rehype-docs';

export default function rehypeExamples({ filePath, repoUrl }) {
  return function transformer(tree) {
    rehypeDocs({ filePath, repoUrl })(tree);
    remove(tree, node => node.tagName === 'h1');
  };
}
