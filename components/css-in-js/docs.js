import Container from '../container';
import Button from '../button';
import Hammer from './svg/hammer';

export default () => (
  <Container wide padding gray>
    <div className="flex">
      <Hammer />
      <h2 className="f0 fw6">Great Developer Tooling</h2>
      <div className="content">
        <p>
          Developing with <code>styled-jsx</code> is easier than ever with syntax highlighting for
          major editors like WebStorm and VSCode. With a simple plugin system, it's easy to use your
          favorite preprocessors such as Sass, PostCSS, and Stylus.
        </p>
      </div>
      <div>
        <Button invert href="/docs/basic-features/built-in-css-support" amp>
          View Documentation
        </Button>
      </div>
    </div>

    <style jsx>
      {`
        p {
          text-align: center;
          margin: 0;
        }

        code {
          color: rgb(212, 0, 255);
        }

        h2 {
          margin: 2rem 0 1.5rem 0;
          line-height: 1.3;
        }

        .flex {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .content {
          margin: 0 0 2.5rem 0;
          max-width: 38rem;
        }

        @media screen and (max-width: 960px) {
          h2 {
            margin-top: 1.5rem;
          }
          .content {
            max-width: 27rem;
          }
        }

        @media screen and (max-width: 640px) {
          .content {
            margin: 0 1rem 2.5rem 1rem;
          }
        }
      `}
    </style>
  </Container>
);
