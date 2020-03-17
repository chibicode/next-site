/* eslint-disable no-continue  */
/**
 * Returns the siblings a specific route (that is the previous and next routes).
 */
export default function getRouteContext({ path }, routes, ctx = {}) {
  const { parent } = ctx;

  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];

    if (route.routes) {
      ctx.parent = route;
      ctx = getRouteContext({ path }, route.routes, ctx);

      // If the active route and the next route was found in nested routes, return it
      if (ctx.nextRoute) return ctx;
    }

    if (!route.path) continue;

    if (ctx.found) {
      ctx.nextRoute =
        parent && i === 0 ? { ...route, title: `${parent.title}: ${route.title}` } : route;

      return ctx;
    }

    if (route.path === path) {
      ctx.found = true;
      // Continue the loop until we know the next route
      continue;
    }

    ctx.prevRoute =
      parent && !parent.heading && !routes[i + 1]?.path
        ? { ...route, title: `${parent.title}: ${route.title}` }
        : route;
  }

  // The loop ended and the previous route was found, or nothing
  return ctx;
}
