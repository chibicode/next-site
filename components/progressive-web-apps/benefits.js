import Container from '../container';
import Icon from '../icon-circle';

const LighthouseResult = () => (
  <div className="container">
    <div className="circle">100</div>
    <span>Progressive Web App</span>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        background: #ffffff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        padding: 0.75rem 1rem;
      }
      span {
        flex-shrink: 0;
        font-size: 0.9375rem;
        line-height: 1.875rem;
      }
      .circle {
        border-radius: 50%;
        padding: 0.5rem;
        border: 2px solid #27c93f;
        text-align: center;
        color: #27c93f;
        margin-right: 1rem;
      }
    `}</style>
  </div>
);

const Instructions = () => (
  <div className="container">
    <ol>
      <li>
        <span>yarn add next-offline</span>
      </li>
      <li>
        <span>touch public/manifest.json</span>
      </li>
      <li>
        <a href="https://github.com/hanford/next-offline#usage">wrap config</a>
        &nbsp;with next-offline
      </li>
      <li>
        <LighthouseResult />
      </li>
    </ol>
    <style jsx>{`
      ol {
        display: flex;
        flex-direction: column;
        list-style: none;
        counter-reset: list-counter;
        margin: 0;
        padding: 0;
      }
      li {
        display: flex;
        counter-increment: list-counter;
      }
      li:not(:last-child) {
        margin-bottom: 1.5rem;
      }
      li::before {
        content: counter(list-counter);
        background-color: #007aff;
        color: #fff;
        border-radius: 50%;
        width: 1.75rem;
        height: 1.75rem;
        text-align: center;
        margin-right: 1.5rem;
      }
      span {
        background-color: #383838;
        color: #fff;
        border-radius: 3px;
        font-size: 0.8125rem;
        line-height: 1.5625rem;
        padding: 0 1rem;
      }
      a {
        color: inherit;
        text-decoration: underline;
      }
      a:hover {
        opacity: 0.7;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 3.5rem;
        background-color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
        border-radius: 6px;
      }
    `}</style>
  </div>
);

export default () => (
  <Container gray wide divider>
    <div className="container" id="benefits">
      <div className="flex">
        <div className="col">
          <Icon>
            <amp-img src="/static/svg/rocket.svg" alt="rocket" width={26.01} height={25.99} />
          </Icon>
          <h3 className="f3 fw6">Automated Hard Parts</h3>
          <p>
            Adapting the technologies involved in progressive web apps to your specific application
            can often be a challenge. By using Next.js, the heavy lifting is done for you.
            Requirements like cache management and service worker registration are all handled
            automatically.
          </p>
        </div>

        <hr />

        <div className="col">
          <Icon>
            <amp-img src="/static/svg/wrench.svg" alt="extensible" width={27} height={26} />
          </Icon>
          <h3 className="f3 fw6">Open to Extension</h3>
          <p>
            Next.js also allows for easy tweaking of the default configuration. By exposing the
            WorkBox configuration, you can modify whatever you need. By enabling you to hook into
            any part of the progressive web app tech stack, using Next.js guarantees your
            application will scale with you.
          </p>
        </div>
      </div>

      <hr />

      <div className="flex">
        <div className="col">
          <Icon>
            <amp-img src="/static/svg/checkmark-dark.svg" alt="checkmark" width={28} height={28} />
          </Icon>
          <h3 className="f3 fw6">Easy to Enable</h3>
          <p>
            With Next.js, converting your application into a progressive web app has never been
            easier. Simply add the next-offline package, create an app manifest file and your
            application will be ready to go. This is all you need to score 100 on the
            industry-standard Lighthouse PWA audit with Next.js.
          </p>
        </div>

        <div className="col">
          <Instructions />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        h3 {
          margin: 1rem 0 0 0;
        }
        hr {
          border-top: 0;
          border-right: 0;
          border-style: solid;
          opacity: 0.1;
          align-self: stretch;
          margin: 0;
        }
        p {
          margin: 1rem 0 0 0;
        }
        .container {
          width: 100%;
          margin: 0 auto;
          max-width: 64rem;
        }
        .flex {
          display: flex;
        }
        .col {
          display: flex;
          flex-direction: column;
          flex-basis: 50%;
        }
        .col:first-child {
          padding: 4rem 4rem 4rem 1rem;
        }
        .col:last-child {
          padding: 4rem 1rem 4rem 4rem;
        }
        @media screen and (max-width: 960px) {
          .col {
            flex-basis: unset;
          }
          .col:first-child {
            padding: 4rem 4rem 4rem 2rem;
          }
          .col:last-child {
            padding: 4rem 2rem 4rem 4rem;
          }
          .flex:last-child > .col {
            padding: 4rem 2rem 4rem 2rem;
          }
          .flex:last-child > .col:last-child {
            display: none;
          }
        }
        @media screen and (max-width: 640px) {
          .flex:first-child {
            flex-direction: column;
          }
          .flex > .col {
            padding: 4rem 2rem;
          }
        }
      `}
    </style>
  </Container>
);
