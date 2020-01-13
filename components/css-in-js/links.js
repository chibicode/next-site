import Button from '../button';
import Checkmark from '../icons/checkmark';

export default () => (
  <div className="container">
    <div className="content">
      <div className="col">
        <h3 className="f3 fw6">Maintainable at Scale</h3>
        <p>
          Traditionally, working with CSS as a team can pose significant challenges. Fortunately,
          with the scoping of CSS-in-JS, teams can organize their styles in isolation without
          affecting one another. Stop worrying about mandated conventions and remove the need for
          application-wide selector hierarchies and naming schemes altogether.
        </p>
        <div>
          <Button href="/showcase">View Showcase</Button>
        </div>
      </div>

      <hr />

      <div className="col">
        <h3 className="f3 fw6">Intuitive and Automated</h3>
        <p>
          CSS-in-JS solutions harness the full power of CSS using the syntax you already know. While
          you have complete control to do whatever you please, libraries can manage the annoying
          parts like vendor prefixing so you don't have to.
        </p>
        <Button href="/learn/basics/styling-components">Learn Next.js</Button>
      </div>
    </div>

    <hr />

    <div className="divider" />

    <div className="content">
      <div className="col">
        <h3 className="f3 fw6">Componentize Everything</h3>
        <p>
          With CSS-in-JS, your styles only affect the component they're applied to. This means you
          can customize your component's CSS without worrying about how it will impact the rest of
          your application. Seamlessly add and remove components without constantly ballooning
          stylesheet size and complexity.
        </p>
        <Button href="/docs/basic-features/built-in-css-support" amp>
          View Full Documentation
        </Button>
      </div>

      <hr />

      <div className="list-container">
        <h4>Includes Support For</h4>
        <ul>
          <li>
            <Checkmark inverse />
            <span>Dynamic Styles</span>
          </li>
          <li>
            <Checkmark inverse />
            <span>Server Side Style Rendering</span>
          </li>
          <li>
            <Checkmark inverse />
            <span>Stylesheet Imports</span>
          </li>
          <li>
            <Checkmark inverse />
            <span>Global Styles</span>
          </li>
        </ul>
      </div>
    </div>

    <hr />
    <style jsx>
      {`
        h4 {
          text-transform: uppercase;
          font-size: 0.790125rem;
          font-weight: 600;
          letter-spacing: 0.1rem;
          line-height: 1.5625rem;
          margin: 0.5rem 0 2rem 0;
          color: #999999;
        }

        ul {
          padding: 0;
          margin: -0.5rem 0 0 0;
          list-style-type: none;
        }

        li {
          display: flex;
          align-items: center;
        }

        li:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        li > span {
          font-weight: 600;
          margin-left: 0.75rem;
        }

        hr {
          display: none;
          border-top: 0;
          border-right: 0;
          border-style: solid;
          opacity: 0.1;
          width: 100%;
        }

        .container {
          display: flex;
          justify-content: center;
          margin: 4rem 0 9rem;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 58rem;
        }

        .col {
          max-width: 23rem;
        }

        .col:first-child {
          height: 17rem;
          margin: 0 0 6rem 0;
        }

        .divider {
          width: 1px;
          min-height: 100%;
          background: rgba(0, 0, 0, 0.1);
          margin: 0 5.5rem;
        }

        @media screen and (max-width: 960px) {
          hr {
            display: block;
          }
          h4:not(:first-child),
          :global(h3) {
            text-align: center;
          }
          .container {
            flex-direction: column-reverse;
            margin-bottom: 0;
          }
          .content {
            flex-direction: column-reverse;
          }
          .col {
            height: auto;
            max-width: 30rem;
            margin: 4rem auto;
            padding: 0 1rem;
          }
          .list-container {
            margin: 4rem auto;
          }
          .divider {
            display: none;
          }
        }
      `}
    </style>
  </div>
);
