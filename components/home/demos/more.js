import classNames from 'classnames';
import withPure from '../../hoc/pure';

const EXAMPLES = [
  {
    name: 'Custom Server with Express',
    description: 'Setting up a custom Express server to handle requests.',
    href: 'https://github.com/zeit/next.js/tree/master/examples/custom-server-express'
  },
  {
    name: 'Prefetching',
    description: 'How to use the built-in page prefetching functionality.',
    href: 'https://github.com/zeit/next.js/tree/master/examples/with-prefetching'
  },
  {
    name: 'Styled Components',
    description: 'How to use Styled Components for styling.',
    href: 'https://github.com/zeit/next.js/tree/master/examples/with-styled-components'
  },
  {
    name: 'Data Fetching',
    description: (
      <span>
        Using <code>getInitialProps</code> to fetch data on the server or on the client.
      </span>
    ),
    href: 'https://github.com/zeit/next.js/tree/master/examples/data-fetch'
  },
  {
    name: 'Parameterized Routing',
    description: (
      <span>
        How to set up custom routes, such as <code>/blog/:id</code> for posts.
      </span>
    ),
    href: 'https://github.com/zeit/next.js/tree/master/examples/parameterized-routing'
  },
  {
    name: 'TypeScript',
    description: 'How to set up the TypeScript type system for your components.',
    href: 'https://github.com/zeit/next.js/tree/master/examples/with-typescript'
  },
  {
    name: 'Electron',
    description: 'How you can use Next.js inside an Electron application.',
    href: 'https://github.com/zeit/next.js/tree/master/examples/with-electron'
  },
  {
    name: 'Redux',
    description: 'How to use the well-known Redux for global state management.',
    href: 'https://github.com/zeit/next.js/tree/master/examples/with-redux'
  },
  {
    name: 'SSR Caching',
    description: 'How to cache the resulting HTML of a page to avoid re-rendering.',
    href: 'https://github.com/zeit/next.js/tree/master/examples/ssr-caching'
  },
  {
    name: 'Less, PostCSS, CSS Modules',
    description: 'How to use Next.js with next-less plugin.',
    href: 'https://github.com/zeit/next.js/tree/canary/examples/with-next-less'
  },
  {
    name: 'Apollo GraphQL',
    description: 'How to use the Apollo framework for GraphQL data fetching.',
    href: 'https://github.com/zeit/next.js/tree/canary/examples/with-apollo'
  }
];

const ExampleCard = withPure(({ name, href, description }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    <span className="example-container">
      <span className="example-name fw6 f5">{name}</span>
      <span className="example-desc f6">{description}</span>
      <span className="example-link fw6 f6">See this example →</span>
      <style jsx>{`
        .example-container {
          display: block;
          height: 100%;
          margin: 0 0.5rem;
          padding: 0.5rem 0.8rem;
          border-radius: 7px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid;
          border-color: #484848;
          transition: border-color 0.1s ease;
        }
        .example-name {
          display: block;
          margin-bottom: 0.5rem;
          color: #f3f3f3;
        }
        .example-desc {
          display: block;
          margin-bottom: 0.2rem;
          color: #ccc;
        }
        .example-container:hover {
          border-color: #2195ff;
        }
        .example-link {
          color: #2195ff;
          opacity: 0;
          transition: opacity 0.1s ease;
        }
        .icon {
          vertical-align: text-top;
        }
        .example-container:hover .example-link {
          opacity: 1;
        }
        // CSS only media query for mobile
        @media screen and (max-width: 640px) {
          .example-link {
            opacity: 1;
          }
        }
      `}</style>
    </span>
  </a>
));

export default {
  type: [],
  tabs: [],
  body: (
    <div className="example-row">
      {EXAMPLES.map((example, index) => (
        <div
          className={classNames('example-col', {
            'hide-mobile': index >= 5,
            'hide-tablet': index >= 8
          })}
          key={index}
        >
          <ExampleCard {...example} />
        </div>
      ))}
      <div className="example-col">
        <a
          href="https://github.com/zeit/next.js/tree/canary/examples"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="more">
            <span className="f5 fw6" style={{ color: '#f3f3f3', marginBottom: '.2rem' }}>
              github.com/zeit/next.js
            </span>
            <span className="f5">150+ examples</span>
          </span>
        </a>
      </div>
      <style jsx>{`
        .example-row {
          display: flex;
          margin: 0 1rem;
          width: 100%;
          flex-wrap: wrap;
        }
        .example-col {
          flex: 1 0 25%;
          min-width: 200px;
          margin-bottom: 1rem;
          align-content: stretch;
          text-align: left;
        }
        .more {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          align-items: center;
          margin: 0 0.5rem;
          padding: 0.5rem 0.8rem;
        }
      `}</style>
    </div>
  )
};
