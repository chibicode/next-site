import { memo } from 'react';
import { GITHUB_URL, REPO_NAME, REPO_BRANCH } from '../../lib/github-constants';
import Feedback from '../docs/feedback';
import DocsLayout from '../docs/docs-layout';
import Notification from '../docs/notification';

function areEqual(prevProps, props) {
  return prevProps.path === props.path;
}

function ExamplesSlugPage({ title, path, html }) {
  const viewUrl = `${GITHUB_URL}/${REPO_NAME}/tree/${REPO_BRANCH}${path}/`;

  const notification = (
    <Notification>
      <strong>
        You can view{' '}
        <a href={viewUrl} className="absolute" target="_blank" rel="noopener noreferrer">
          the source code for this example on GitHub
        </a>
        .
      </strong>
    </Notification>
  );

  return (
    <DocsLayout>
      <h1>{title}</h1>
      {notification}
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      {notification}
      <Feedback />
      <style jsx>{`
        h1 {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </DocsLayout>
  );
}

export default memo(ExamplesSlugPage, areEqual);
