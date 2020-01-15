export function getSlug({ slug }) {
  return `/examples/${slug.join('/')}`;
}
