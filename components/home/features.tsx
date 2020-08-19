import { useState, useEffect } from 'react';
import cn from 'classnames';
import Container from '@components/container';
import SectionHeader from '@components/section-header';
import { InlineCode } from '@components/text/code';
import { InternalLink } from '@components/text/link';
import Link from 'next/link';
import CompanySlider from './company-slider';
import styles from './features.module.css';

const features = [
  {
    title: 'Zero Config',
    body: 'Automatic compilation and bundling. Optimized for production from the start.',
    url: '/docs/getting-started'
  },
  {
    title: 'Hybrid: SSG and SSR',
    body: 'Pre-render pages at build time (SSG) or request time (SSR) in a single project.',
    url: '/docs/basic-features/data-fetching'
  },
  {
    title: 'Incremental Static Generation',
    body: 'Add and update statically pre-rendered pages incrementally after build time.',
    url: '/docs/basic-features/data-fetching#incremental-static-regeneration'
  },
  {
    title: 'TypeScript Support',
    body: 'Automatic TypeScript configuration and compilation.',
    url: '/docs/basic-features/typescript'
  },
  {
    title: 'Fast Refresh',
    body: 'Fast, reliable live-editing experience, as proven at Facebook scale.',
    url: '/docs/basic-features/fast-refresh'
  },
  {
    title: 'File-system Routing',
    body: (
      <>
        Every component in the <InlineCode>pages</InlineCode> directory becomes a route.
      </>
    ),
    url: '/docs/routing/introduction'
  },
  {
    title: 'API Routes',
    body: 'Optionally create API endpoints to provide backend functionality.',
    url: '/docs/api-routes/introduction'
  },
  {
    title: 'Built-in CSS Support',
    body: 'Create component-level styles with CSS modules. Built-in Sass support.',
    url: '/docs/basic-features/built-in-css-support'
  },
  {
    title: 'Code-splitting and Bundling',
    body: 'Optimized bundle splitting algorithm created by the Google Chrome team.',
    url: '/docs'
  }
];

function MoreText() {
  return (
    <>
      Support for{' '}
      <InternalLink href="/docs/[[...slug]]" as="/docs/basic-features/environment-variables">
        environment variables
      </InternalLink>
      ,{' '}
      <InternalLink href="/docs/[[...slug]]" as="/docs/advanced-features/preview-mode">
        preview mode
      </InternalLink>
      ,{' '}
      <InternalLink href="/docs/[[...slug]]" as="/docs/api-reference/next/head">
        custom <InlineCode inheritColor>head</InlineCode> tags
      </InternalLink>
      ,{' '}
      <InternalLink
        as="/docs/basic-features/supported-browsers-features#polyfills"
        href="/docs/[[...slug]]"
      >
        automatic polyfills
      </InternalLink>
      , and more.
    </>
  );
}

function More() {
  return (
    <div className={styles.card}>
      <h3 className={cn('f4 fw6', styles['card-heading'])}>And More.</h3>
      <p className={styles['card-body']}>
        <MoreText />
      </p>
    </div>
  );
}

export default function Features() {
  const [cardClickable, setCardClickable] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) {
      setCardClickable(true);
    }
  }, []);
  return (
    <Container wide role="region" aria-labelledby="features">
      <Container center padding>
        <SectionHeader
          id="features"
          title="Why Next.js"
          description="The world’s leading companies use and love Next.js"
          margin="1rem 0 3rem 0"
        />
        <div className={styles['features-grid']}>
          {features.map(({ title, body, url }) => {
            const card = (
              <div
                key={title}
                className={cn(styles.card, {
                  [styles.clickable]: cardClickable
                })}
              >
                <h3 className={cn('f4 fw6', styles['card-heading'])}>{title}</h3>
                <p className={styles['card-body']}>{body}</p>
                <div className={styles['card-link']}>
                  <InternalLink as={url} href="/docs/[[...slug]]">
                    Documentation →
                  </InternalLink>
                </div>
              </div>
            );
            return cardClickable ? (
              <Link key={title} as={url} href="/docs/[[...slug]]">
                {card}
              </Link>
            ) : (
              card
            );
          })}
          <div className={styles['card-hide-on-desktop']}>
            <More />
          </div>
        </div>
        <p className={cn(styles['card-more-desktop'])}>
          <strong>And more:</strong> <MoreText />
        </p>
      </Container>
      <CompanySlider />
    </Container>
  );
}
