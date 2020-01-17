import { useRouter } from 'next/router';
import matter from 'gray-matter';
import Page from '../../components/page';
import PageContent from '../../components/page-content';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Container from '../../components/container';
import SocialMeta from '../../components/social-meta';
import { Sidebar, SidebarMobile } from '../../components/sidebar';
import exampleRoutes from '../../lib/examples/example-routes';
import SidebarRoutes from '../../components/examples/sidebar-routes';
import { findRouteByPath } from '../../lib/docs/page';
import { getSlug } from '../../lib/examples/utils';
import { getRawFileFromRepo } from '../../lib/github';
import markdownToHtml from '../../lib/docs/markdown-to-html';
import ExamplesSlugPage from '../../components/examples/examples-slug-page';
import rehypeExamples from '../../lib/examples/rehype-examples';

const Examples = ({ route, data, routes, html }) => {
  const title = `${data.title || route.title} - Examples | Next.js`;
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
            <ExamplesSlugPage title={data.title || route.title} path={route.path} html={html} />
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

export async function unstable_getStaticProps({ params }) {
  const slug = getSlug(params);
  const route = findRouteByPath(slug, exampleRoutes);

  if (!route) return {};

  const md = await getRawFileFromRepo(`${route.path}/README.md`);
  const { content, data } = matter(md);
  const html = await markdownToHtml(route.path, content, rehypeExamples);

  return { props: { routes: exampleRoutes, data, route, html } };
}

export default Examples;
