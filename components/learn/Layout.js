import { SkipNavContent } from '@reach/skip-nav';
import { RecordsProvider } from '../../lib/learn/records';
import { useIsMobile } from '../media-query';
import NProgress from '../nprogress';
import Page from '../page';
import Footer from '../footer';
import PageContent from '../page-content';
import Container from '../container';
import SocialMeta from '../social-meta';
import FooterFeedback from '../footer-feedback';
import Navigation from './Navigation';
import Lesson from './Lesson';
import Markdown from './Markdown';
import FeedbackContext from '../feedback-context';

const Layout = ({ meta, children }) => {
  const isMobile = useIsMobile();

  return (
    <FeedbackContext.Provider value={{ label: 'next-learn' }}>
      <Page title={`Learn - ${meta.title} | Next.js`} sticky={!isMobile}>
        <PageContent>
          <Container wide={isMobile}>
            <div className="content">
              <RecordsProvider>
                <div className="navigation">
                  <Navigation meta={meta} />
                </div>
                <div className="lesson">
                  <Lesson meta={meta}>
                    <Markdown>{children}</Markdown>
                  </Lesson>
                  <hr />
                  <FooterFeedback />
                </div>
              </RecordsProvider>
            </div>
            <style jsx>{`
              .content {
                display: flex;
                margin-top: 1rem;
                margin-bottom: 5rem;
              }

              hr {
                border: 0;
                border-top: 1px solid #eaeaea;
                margin: 3rem 0 1.25rem 0;
              }

              .navigation {
                padding: ${isMobile ? '0' : '1rem 3rem 0 0'};
              }

              .lesson {
                flex: 1;
                width: 100%;
                min-width: 0;
                max-width: 600px;
              }
              // CSS only media query for mobile + SSR
              @media screen and (max-width: 640px) {
                .content {
                  display: flex;
                  flex-direction: column;
                  padding: 0 1rem;
                  margin-bottom: 5rem;
                }
                .navigation {
                  margin: 0 -1rem;
                }
              }
            `}</style>
          </Container>
        </PageContent>
        <SocialMeta
          image="/static/twitter-cards/learn.png"
          title="Learn | Next.js"
          url="https://nextjs.org/learn"
          description="Production grade React applications that scale. The world’s leading companies use Next.js to build server-rendered applications, static websites, and more."
        />
        <SkipNavContent />
        <Footer />
        <NProgress />
      </Page>
    </FeedbackContext.Provider>
  );
};

export default Layout;
