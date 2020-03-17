import { SkipNavContent } from '@reach/skip-nav';
import { useAmp } from 'next/amp';
import Page from '../../components/page';
import Footer from '../../components/footer';
import SocialMeta from '../../components/social-meta';

import Hero from '../../components/static-exporting/hero';
import Build from '../../components/static-exporting/build';
import UseCases from '../../components/static-exporting/use-cases';
import Links from '../../components/static-exporting/links';
import Learn from '../../components/static-exporting/learn';
import Features from '../../components/static-exporting/features';
import Docs from '../../components/static-exporting/docs';
import Customers from '../../components/static-exporting/customers';

const title = 'Features - Static Exporting | Next.js';
export default () => {
  const isAmp = useAmp();
  return (
    <Page title={title}>
      <SocialMeta
        title={title}
        description="Leverage the speed and simplicity of static sites with the full power of Next.js"
        image="/static/twitter-cards/static-exporting.png"
        url="https://nexts.org/features/static-exporting"
        keywords="Static site generation, Static exporting, Static exports, Next, JavaScript, Web Framework"
      />
      <SkipNavContent />
      <Hero />
      <Build />
      <UseCases />
      <Links />
      <Learn />
      <Features />
      <Docs />
      <Customers isAmp={isAmp} />
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
