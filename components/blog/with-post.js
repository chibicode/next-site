import Head from 'next/head';
import { MDXProvider } from '@mdx-js/tag';
import formatDate from 'date-fns/format';
import { useAmp } from 'next/amp';

import Header from '../header';
import Footer from '../footer';
import Navbar from '../navbar';
import Page from '../page';
import Container from '../container';
import Button from '../button';
import { components } from './post-components';
import SocialMeta from '../social-meta';

const Author = meta => {
  const isAmp = useAmp();
  return (
    <div className="author">
      {isAmp ? (
        <amp-img width={1} height={1} layout="responsive" src={meta.avatar} alt={meta.name} />
      ) : (
        <img src={meta.avatar} alt={meta.name} />
      )}
      <span className="name f5">
        <span className="real-name">{meta.name}</span>
        <a
          href={`https://twitter.com/${meta.twitter}`}
          className="twitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          @{meta.twitter}
        </a>
        <span className="twitter-mobile">
          <a href={`https://twitter.com/${meta.twitter}`} rel="noopener noreferrer" target="_blank">
            @{meta.twitter}
          </a>
        </span>
      </span>
      <style jsx>{`
        .author {
          display: inline-flex;
          align-items: center;
          padding: 0 1rem;
          margin-bottom: 0.5rem;
          white-space: nowrap;
        }
        img,
        amp-img {
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          border-radius: 50%;
          background: #efefef;
        }
        .name {
          line-height: 1.1rem;
          text-align: left;
        }
        .real-name {
          display: block;
        }
        .twitter {
          font-size: 12px;
        }
        .twitter-mobile {
          display: none;
          margin-left: 0.25rem;
        }
        // CSS only media query for mobile
        @media screen and (max-width: 640px) {
          img,
          amp-img {
            width: 1.5rem;
            height: 1.5rem;
          }
          .real-name {
            display: inline;
          }
          .twitter {
            display: none;
          }
          .twitter-mobile {
            display: initial;
          }
        }
      `}</style>
    </div>
  );
};

const HeaderImage = meta => {
  if (meta.headerImage) {
    return (
      <div>
        <style jsx>{`
          div {
            background-image: url(${meta.headerImage});
            background-size: cover;
            background-position: center 30%;
            width: 100%;
            padding: 11% 0;
            min-height: 220px;
          }
        `}</style>
      </div>
    );
  }
  return null;
};

export default meta => ({ children }) => {
  const date = meta.date ? new Date(meta.date) : new Date();

  return (
    <MDXProvider components={components}>
      <Page title={`Blog - ${meta.title} | Next.js`}>
        <SocialMeta image={`/static${meta.link}/twitter-card.png`} {...meta} />
        <Header height={{ desktop: 64, mobile: 64 + 32 }} shadow defaultActive>
          <Navbar />
        </Header>
        <HeaderImage {...meta} />
        <Head>
          <script
            async
            key="amp-timeago"
            custom-element="amp-timeago"
            src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
          />
        </Head>
        <Container padding>
          <h1 className="title fw6 f0">{meta.title}</h1>
          {meta.type && <span className="post-type mute fw7">{meta.type}</span>}
          <div className="date mute f6">
            <time dateTime={meta.date}>
              {formatDate(date, 'dddd, MMMM Do YYYY')} (
              <amp-timeago width="0" height="15" datetime={meta.date} layout="responsive">
                .
              </amp-timeago>
              )
            </time>
          </div>
          <div className="authors">
            {meta.authors.map(data => (
              <Author key={data.name} {...data} />
            ))}
          </div>
          <Container small wide overflow>
            <main>{children}</main>
            <div className="back-button">
              <Button href="/blog" invert amp>
                ← Back to Blog
              </Button>
            </div>
          </Container>
        </Container>
        <Footer />
        <style jsx>{`
          .title {
            text-align: center;
          }
          .date {
            margin-top: 2rem;
            text-align: center;
          }
          amp-timeago {
            display: inline;
          }
          .authors {
            margin: 1.5rem 0 4rem;
            text-align: center;
          }
          .back-button {
            margin-top: 8rem;
          }
          .icon {
            line-height: 0;
            vertical-align: middle;
          }
          .post-type {
            display: block;
            text-align: center;
            text-transform: uppercase;
            font-size: 12px;
            color: #0070f3;
          }
          // CSS only media query for mobile
          @media screen and (max-width: 640px) {
            .authors {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: -1rem;
              margin-right: -1rem;
            }
            .title {
              text-align: center;
            }
            .date {
              margin-top: 1rem;
              text-align: center;
            }
          }
        `}</style>
      </Page>
    </MDXProvider>
  );
};
