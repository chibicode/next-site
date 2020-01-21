import { SkipNavContent } from '@reach/skip-nav';
import { useAmp } from 'next/amp';

import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Notification from '../components/notification';

import Intro from '../components/home/intro';
import Demo from '../components/home/demo';
import Features from '../components/home/features';
import Customers from '../components/home/customers';
import Newsletter from '../components/home/newsletter';
import Learn from '../components/home/learn';
import SocialMeta from '../components/social-meta';

export default () => {
  const isAmp = useAmp();

  return (
    <>
      <Header shadow>
        <Navbar hideLogo={{ desktop: !isAmp, mobile: !isAmp }} />
      </Header>
      <Page title="Next.js - The React Framework">
        <SocialMeta
          image="/static/twitter-cards/home.jpg"
          title="Next.js - The React Framework"
          url="https://nextjs.org"
          description="Production grade React applications that scale. The world’s leading companies use Next.js to build static and dynamic websites and web applications."
        />
        <SkipNavContent />
        <Notification href="/blog/next-9-2" title="Next 9.2 is out!" titleMobile="Next 9.2 is out!">
          <b>Next 9.2 is out!</b> — CSS Support, Improved Code-Splitting, Catch-All Routing, and
          more!
          <span className="highlight">Learn More →</span>
        </Notification>
        <Intro isAmp={isAmp} />
        <Demo />
        <Features />
        <Customers />
        <Learn />
        <Newsletter />
        <Footer />
      </Page>
    </>
  );
};

export const config = {
  amp: 'hybrid'
};
