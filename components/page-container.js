import Head from 'next/head';
import Router from 'next/router';
import { trackPageview } from '../lib/analytics';
import { ORG_NAME } from '../lib/constants';
import GlobalStyles from './global-styles';

Router.events.on('routeChangeComplete', url => {
  trackPageview(url);
});

export default function PageContainer({ title, description, children, shouldIndex = true }) {
  return (
    <div>
      <Head>
        <title>{title || `Next.js by ${ORG_NAME} - The React Framework`}</title>
        {description !== false && (
          <meta
            name="description"
            content={description || `Next.js by ${ORG_NAME} is the React framework for production`}
          />
        )}
        {!shouldIndex && <meta name="robots" content="noindex" />}
      </Head>
      {children}
      <GlobalStyles />
    </div>
  );
}
