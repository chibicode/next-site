import Link from 'next/link';

import Container from './container';
import withPure from './hoc/pure';

import { links } from '../site-manifest';

import ZEITLogo from './icons/zeit-white-full-logo';

export default withPure(() => (
  <Container wide dark>
    <Container>
      <footer>
        <style jsx>
          {`
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-row-gap: 2rem;
            }
            footer {
              padding: 2rem 0 4rem;
              min-height: 400px;
            }
            a,
            p,
            .copyright {
              color: #8c8c8c;
            }
            h4 a {
              color: inherit;
            }
            a:hover {
              color: #efefef;
            }
            .copyright {
              margin-top: 3rem;
            }
            .copyright div {
              margin-top: 0.5rem;
            }
            h4 {
              margin-bottom: 0.75rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 0.25rem;
            }
            @media screen and (max-width: 700px) {
              .grid {
                grid-template-columns: 1fr 1fr;
              }

              h4,
              p {
                margin: 0;
              }

              a {
                display: block;
                padding-top: 15px;
                padding-bottom: 15px;
              }
            }
          `}
        </style>
        <div className="grid f5">
          <div>
            <h4 className="fw5">General resources</h4>
            <p>
              <a href="/docs">Docs</a>
            </p>
            <p>
              <Link href="/learn/basics/getting-started" prefetch={false}>
                <a>Learn</a>
              </Link>
            </p>
            <p>
              <Link href="/showcase" prefetch={false}>
                <a>Showcase</a>
              </Link>
            </p>
            <p>
              <Link href="/blog" prefetch={false}>
                <a>Blog</a>
              </Link>
            </p>
          </div>
          <div>
            <h4 className="fw5">Features</h4>
            <p>
              <a href="/features/server-side-rendering">SSR</a>
            </p>
            <p>
              <a href="/features/static-exporting">Static Exporting</a>
            </p>
            <p>
              <a href="/features/css-in-js">CSS-in-JS</a>
            </p>
            <p>
              <a href="/features/progressive-web-apps">PWA</a>
            </p>
          </div>
          <div>
            <h4 className="fw5">More</h4>
            <p>
              <a href="https://github.com/zeit/next.js" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://github.com/zeit/next.js/releases"
                rel="noopener noreferrer"
                target="_blank"
              >
                Releases
              </a>
            </p>
            <p>
              <a href={links.spectrum} rel="noopener noreferrer" target="_blank">
                Spectrum
              </a>
            </p>
            <p>
              <Link href="/telemetry" prefetch={false}>
                <a>Telemetry</a>
              </Link>
            </p>
          </div>
          <div>
            <h4 className="fw5">About ZEIT</h4>
            <p>
              <a href="https://zeit.co/oss" rel="noopener noreferrer" target="_blank">
                Open Source Software
              </a>
            </p>
            <p>
              <a href="https://github.com/zeit" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
            </p>
            <p>
              <a href="https://twitter.com/zeithq" rel="noopener noreferrer" target="_blank">
                Twitter
              </a>
            </p>
          </div>
        </div>
        <div className="copyright f6">
          <a href="https://zeit.co" rel="noopener noreferrer" target="_blank" aria-label="ZEIT">
            <ZEITLogo />
          </a>
          <div> Copyright © {`${new Date().getFullYear()}`} ZEIT, Inc. All rights reserved.</div>
        </div>
      </footer>
    </Container>
  </Container>
));
