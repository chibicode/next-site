import Head from 'next/head';
import { useAmp } from 'next/amp';

import Page from '../../components/page';
import Footer from '../../components/footer';
import SocialMeta from '../../components/social-meta';

import Hero from '../../components/css-in-js/hero';
import Features from '../../components/css-in-js/features';
import Learn from '../../components/css-in-js/learn';
import Links from '../../components/css-in-js/links';
import Libraries from '../../components/css-in-js/libraries';
import Docs from '../../components/css-in-js/docs';
import Customers from '../../components/css-in-js/customers';

export default () => {
  const isAmp = useAmp();
  return (
    <Page>
      <Head>
        <title>Features - CSS-in-JS | Next.js</title>
        {isAmp && (
          <script
            async
            custom-element="amp-carousel"
            src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
          />
        )}
      </Head>
      <SocialMeta
        title="Features - CSS-in-JS | Next.js"
        description="Next.js lets you modularize your styles without the hassle"
        image="/static/twitter-cards/css-in-js.png"
        url="https://nexts.org/features/css-in-js"
        keywords="CSS-in-JS, CSS, JS, Next, JavaScript, Web Framework"
      />
      <Hero />
      <Features />
      <Learn />
      <Links />
      <Libraries />
      <Docs />
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
};

export const config = {
  amp: true
};
