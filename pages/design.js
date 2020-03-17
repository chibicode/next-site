import Link from 'next/link';

import Page from '../components/page';
import Footer from '../components/footer';
import Container from '../components/container';
import SectionHeader from '../components/section-header';
import Button from '../components/button';
import Popover from '../components/popover';
import Tabs from '../components/tabs';
import TabButton from '../components/home/tab-button';

const ComponentTitle = ({ children }) => (
  <h3 className="fw8 f4">
    {children}
    <style jsx>{`
      h3 {
        margin: 3rem 0 2rem;
      }
    `}</style>
  </h3>
);

const ComponentModal = ({ title, children }) => (
  <div>
    <style jsx>
      {`
        h4 {
          margin: 2rem 0 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: #666;
        }
      `}
    </style>
    <h4 className="f6">{title}</h4>
    {children}
  </div>
);

const PopoverText = () => (
  <div style={{ whiteSpace: 'nowrap' }}>
    The tooltip will auto position
    <br />
    when there is no room to display.
  </div>
);

export default () => (
  <Page title="Design | Next.js">
    <Container padding>
      <SectionHeader id="design" title="Design" description="Components for nextjs.org" />
      <ComponentTitle>Typography</ComponentTitle>
      <ComponentModal title="Modular Scale">
        <h1 className="f0">XXXL - Heading 0</h1>
        <h1 className="f1">XXL - Heading 1</h1>
        <h2 className="f2">XL - Heading 2</h2>
        <h3 className="f3">LG - Heading 3</h3>
        <h3 className="f4">MD - Heading 4</h3>
        <h3 className="f5">SM - Heading 5</h3>
        <h3 className="f6">XS - Heading 6</h3>
        <p className="f-reset">BASE - This is a paragraph.</p>
      </ComponentModal>
      <ComponentTitle>Button & Link</ComponentTitle>
      <ComponentModal title="Normal Button">
        <Button href="#">Learn Next.js</Button>
      </ComponentModal>
      <ComponentModal title="Inverted Button">
        <Button href="#" invert>
          Learn Next.js
        </Button>
      </ComponentModal>
      <ComponentModal title="External Link">
        <Link href="https://zeit.co?utm_source=next-site&utm_medium=link&utm_campaign=next-website">
          <a>https://zeit.co</a>
        </Link>
      </ComponentModal>
      <ComponentTitle>Popover</ComponentTitle>
      <ComponentModal title="Default">
        <Popover content={<PopoverText />}>
          <div>
            <span role="img" aria-label="hand emoji">
              👋
            </span>{' '}
            Hover me!
          </div>
        </Popover>
      </ComponentModal>
      <ComponentModal title="Positioning">
        <Popover content={<PopoverText />}>
          <div>Top (auto)</div>
        </Popover>
        {' / '}
        <Popover bottom content={<PopoverText />}>
          <div>Bottom</div>
        </Popover>
        {' / '}
        <Popover left content={<PopoverText />}>
          <div>Left</div>
        </Popover>
        {' / '}
        <Popover right content={<PopoverText />}>
          <div>Right</div>
        </Popover>
        {' / '}
        <Popover bottom left content={<PopoverText />}>
          <div>Bottom-left</div>
        </Popover>
        {' / '}
        <Popover bottom right content={<PopoverText />}>
          <div>Bottom-right</div>
        </Popover>
      </ComponentModal>
      <ComponentTitle>Tab</ComponentTitle>
      <ComponentModal title="Default">
        <Tabs data={['React', 'Vue', 'Angular']}>
          {(onSelect, tab) => (
            <div style={{ display: 'inline-block ' }}>
              {['React', 'Vue', 'Angular'].map(t => (
                <TabButton selected={t === tab} onClick={() => onSelect(t)} key={t}>
                  {t}
                </TabButton>
              ))}
              <br />
              <p className="f5" style={{ textAlign: 'center' }}>
                {tab}
              </p>
            </div>
          )}
        </Tabs>
      </ComponentModal>
      <ComponentModal title="Invert">
        <div style={{ padding: '1rem', background: '#333', color: '#fff' }}>
          <Tabs data={['React', 'Vue', 'Angular']}>
            {(onSelect, tab) => (
              <div style={{ display: 'inline-block ' }}>
                {['React', 'Vue', 'Angular'].map(t => (
                  <TabButton invert selected={t === tab} onClick={() => onSelect(t)} key={t}>
                    {t}
                  </TabButton>
                ))}
                <br />
                <p className="f5" style={{ textAlign: 'center' }}>
                  {tab}
                </p>
              </div>
            )}
          </Tabs>
        </div>
      </ComponentModal>
      <ComponentModal title="Small">
        <Tabs data={['React', 'Vue', 'Angular']}>
          {(onSelect, tab) => (
            <div style={{ display: 'inline-block ' }}>
              {['React', 'Vue', 'Angular'].map(t => (
                <TabButton small selected={t === tab} onClick={() => onSelect(t)} key={t}>
                  {t}
                </TabButton>
              ))}
              <br />
              <p className="f5" style={{ textAlign: 'center' }}>
                {tab}
              </p>
            </div>
          )}
        </Tabs>
      </ComponentModal>
      <ComponentModal title="Light">
        <Tabs data={['React', 'Vue', 'Angular']}>
          {(onSelect, tab) => (
            <div style={{ display: 'inline-block ' }}>
              <p className="f5" style={{ textAlign: 'center' }}>
                {tab}
              </p>
              {['React', 'Vue', 'Angular'].map(t => (
                <TabButton light small selected={t === tab} onClick={() => onSelect(t)} key={t}>
                  {t}
                </TabButton>
              ))}
            </div>
          )}
        </Tabs>
      </ComponentModal>
    </Container>
    <Footer />
  </Page>
);
