import { useRouter } from 'next/router';
import { getCategoryPath } from '../../lib/docs/utils';
import { getSlug } from '../../lib/examples/utils';
import { Post, Category, Heading } from '../sidebar';

function SidebarRoutes({ isMobile, routes: currentRoutes, level = 1 }) {
  const router = useRouter();
  const slug = router.pathname === '/examples' ? '/examples' : getSlug(router.query);

  return (
    <>
      {currentRoutes.map(({ path, title, routes, heading, introduction, open }) => {
        if (introduction) {
          return (
            <Post
              key="introduction"
              isMobile={isMobile}
              level={level}
              route={{
                href: '/examples',
                pathname: '/examples',
                selected: router.pathname === '/examples',
                title: 'Introduction',
                path: '/examples'
              }}
            />
          );
        }

        if (routes) {
          const pathname = getCategoryPath(routes);
          const selected = slug.startsWith(pathname);
          const opened = selected || isMobile ? false : open;

          if (heading) {
            return (
              <Heading key={title} title={title}>
                {pathname}
                <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
              </Heading>
            );
          }

          return (
            <Category
              key={pathname}
              level={level}
              title={title}
              selected={selected}
              opened={opened}
            >
              <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
            </Category>
          );
        }

        const href = '/examples/[...slug]';
        const selected = slug.startsWith(path);
        const route = { href, title, pathname: path, selected };

        return <Post key={title} isMobile={isMobile} level={level} route={route} />;
      })}
    </>
  );
}

export default SidebarRoutes;
