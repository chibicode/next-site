import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import matter from 'gray-matter';
import hashMap from '../../lib/docs/hash-map.json';
import { getSlug, removeFromLast } from '../../lib/docs/utils';
import { getPaths, findRouteByPath, fetchDocsManifest } from '../../lib/docs/page';
import { getRawFileFromRepo } from '../../lib/github';
import markdownToHtml from '../../lib/docs/markdown-to-html';
import PageContent from '../../components/page-content';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Container from '../../components/container';
import DocsPage from '../../components/docs/docs-page';
import SocialMeta from '../../components/social-meta';
import { Sidebar, SidebarMobile, Post, Category, Heading } from '../../components/sidebar';
import Page from '../../components/page';
import rehypeDocs from '../../lib/docs/rehype-docs';

function getCategoryPath(routes) {
  const route = routes.find(r => r.path);
  return route && removeFromLast(route.path, '/');
}

function SidebarRoutes({ isMobile, routes: currentRoutes, level = 1 }) {
  const { query } = useRouter();
  const slug = getSlug(query);

  return currentRoutes.map(({ path, title, routes, heading, open }) => {
    if (routes) {
      const pathname = getCategoryPath(routes);
      const selected = slug.startsWith(pathname);
      const opened = selected || isMobile ? false : open;

      if (heading) {
        return (
          <Heading key={pathname} title={title}>
            <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
          </Heading>
        );
      }

      return (
        <Category key={pathname} level={level} title={title} selected={selected} opened={opened}>
          <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
        </Category>
      );
    }

    const href = '/docs/[...slug]';
    const pathname = removeFromLast(path, '.');
    const selected = slug.startsWith(pathname);
    const route = { href, path, title, pathname, selected };

    return <Post key={title} isMobile={isMobile} level={level} route={route} />;
  });
}

const Docs = ({ routes, route, data, html }) => {
  if (!route) {
    return <Error statusCode={404} />;
  }

  const router = useRouter();
  const { asPath } = router;
  const title = `${data.title || route.title} - Documentation | Next.js`;

  useEffect(() => {
    if (asPath.startsWith('/docs#')) {
      const hash = asPath.split('#')[1];

      // excluded hashes don't need to be redirected to the olds docs because they are covered
      // by the first page of the new docs (/docs/getting-started)
      if (!hashMap.excluded.includes(hash)) {
        const to = hashMap.redirects[hash];
        // Redirect the user to the section in the new docs that corresponds to the hash,
        // or to the old docs if a redirect for that hash is not set
        router.push(`/docs${to || `/old#${hash}`}`);
      }
    }
  }, [asPath]);

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
            <DocsPage path={route.path} html={html} />
          </div>
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
        </Container>
        <SocialMeta
          title={title}
          url={`https://nextjs.org${asPath}`}
          image="/static/twitter-cards/documentation.png"
          description={data.description}
        />
      </PageContent>
    </Page>
  );
};

export async function unstable_getStaticPaths() {
  const manifest = await fetchDocsManifest();
  return getPaths(manifest.routes);
}

export async function unstable_getStaticProps({ params }) {
  const slug = getSlug(params);
  const manifest = await fetchDocsManifest();
  const route = findRouteByPath(slug, manifest.routes);

  if (!route) return {};

  const md = await getRawFileFromRepo(route.path);
  const { content, data } = matter(md);
  const html = await markdownToHtml(route.path, content, rehypeDocs);

  return { props: { routes: manifest.routes, data, route, html } };
}

export default Docs;
