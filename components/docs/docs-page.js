import { memo } from 'react';
import { GITHUB_URL, REPO_NAME, REPO_BRANCH } from '../../lib/github-constants';
import Notification from './notification';
import Feedback from './feedback';
import DocsLayout from './docs-layout';

function areEqual(prevProps, props) {
  return prevProps.path === props.path;
}

function DocsPage({ path, html }) {
  const editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/${REPO_BRANCH}${path}`;

  return (
    <DocsLayout>
      <Notification>
        <strong>Note:</strong> You are viewing the new Next.js documentation. The old docs are still
        available <a href="/docs/old">here</a>.
      </Notification>
      {/* eslint-disable-next-line */}
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

export default memo(DocsPage, areEqual);
