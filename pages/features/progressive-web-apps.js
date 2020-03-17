import Page from '../../components/page';
import Footer from '../../components/footer';
import SocialMeta from '../../components/social-meta';

import Hero from '../../components/progressive-web-apps/hero';
import OfflineSupport from '../../components/progressive-web-apps/offline-support';
import Learn from '../../components/progressive-web-apps/learn';
import Features from '../../components/progressive-web-apps/features';
import Benefits from '../../components/progressive-web-apps/benefits';
import Customers from '../../components/progressive-web-apps/customers';

const title = 'Features - Progressive Web Apps | Next.js';

export default () => (
  <Page title={title}>
    <SocialMeta
      title={title}
      description="With Next.js, building fully featured PWA's are only a few clicks away."
      image="/static/twitter-cards/pwa.png"
      url="https://nexts.org/features/progressive-web-apps"
      keywords="Progressive Web Apps, PWA, JS, Next, JavaScript, Web Framework"
    />
    <Hero />
    <OfflineSupport />
    <Learn />
    <Features />
    <Benefits />
    <Customers />
    <Footer />
    <style jsx>
      {`
        :global(html) {
          scroll-behavior: smooth;
        }
        :global(body) {
          scroll-behavior: unset;
        }
      `}
    </style>
  </Page>
);

export const config = {
  amp: true
};
