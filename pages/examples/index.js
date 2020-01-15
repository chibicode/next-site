import { useRouter } from 'next/router';
import Page from '../../components/page';
import PageContent from '../../components/page-content';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Container from '../../components/container';
import SocialMeta from '../../components/social-meta';
import { Sidebar, SidebarMobile } from '../../components/sidebar';
import manifest from '../../lib/examples/manifest';
import SidebarRoutes from '../../components/examples/sidebar-routes';

const Index = ({ routes }) => {
  const title = `Examples | Next.js`;
  const description = 'TBD';
  const router = useRouter();
  const { asPath } = router;

  return (
    <Page title={title} description={false}>
      <PageContent>
        <Header height={{ desktop: 64, mobile: 114 }} shadow defaultActive>
          <Navbar />
          <SidebarMobile>
            <SidebarRoutes isMobile routes={routes} />
          </SidebarMobile>
        </Header>
        <Container>
          <div className="content">
            <Sidebar fixed>
              <SidebarRoutes routes={routes} />
            </Sidebar>
          </div>
        </Container>
        <SocialMeta
          title={title}
          url={`https://nextjs.org${asPath}`}
          image="/static/twitter-cards/examples.png"
          description={description}
        />
      </PageContent>
      <style jsx>{`
        .content {
          display: flex;
          margin-top: 2rem;
          margin-bottom: 5rem;
        }
        /* Remove the top margin of the first heading in the sidebar */
        :global(.heading:first-child > h4) {
          margin-top: 0;
        }
      `}</style>
    </Page>
  );
};

export async function unstable_getStaticProps() {
  return {
    props: {
      routes: manifest.routes
    }
  };
}

export default Index;
