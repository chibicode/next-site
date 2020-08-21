import { SkipNavContent } from '@reach/skip-nav';

import { SITE_URL, ORG_NAME } from '../lib/constants';
import Page from '../components/page';
import Footer from '../components/footer';
import Notification from '../components/notification';

import Intro from '../components/home/intro';
import Features from '../components/home/features';
import Customers from '../components/home/customers';
import Newsletter from '../components/home/newsletter';
import Learn from '../components/home/learn';
import SocialMeta from '../components/social-meta';

export default function Index() {
  return (
    <Page title={`Next.js by ${ORG_NAME} - The React Framework`}>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Next.js by ${ORG_NAME} - The React Framework`}
        url={SITE_URL}
        description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build static and dynamic websites and web applications.`}
      />
      <SkipNavContent />
      <Notification href="/conf" title="Next.js Conf" titleMobile="Next.js Conf">
        <b>Next.js Conf</b> — An interactive online experience by the community, free for everyone.{' '}
        <span className="highlight">Register →</span>
      </Notification>
      <Intro />
      <Features />
      <Customers />
      <Learn />
      <Newsletter />
      <Footer />
    </Page>
  );
}
