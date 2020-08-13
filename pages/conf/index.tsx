import { SkipNavContent } from '@reach/skip-nav';
import Page from '../../components/page';
import { ORG_NAME } from '../../lib/constants';
import SocialMeta from '../../components/social-meta';
import NextLogo from '../../components/logo';
import styles from './conf.module.css';
import Logo from '../../components/icons/platform-logotype';
import cn from 'classnames';

type IconProps = { height: number };

function GlobeIcon({ height }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ImageIcon({ height }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function ActivityIcon({ height }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export default function Conf() {
  return (
    <Page title="Next.js Conf" hideHeader>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Next.js by ${ORG_NAME} - The React Framework`}
        url="https://nextjs.org"
        description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build static and dynamic websites and web applications.`}
      />
      <SkipNavContent />
      <div className={styles.page}>
        <main className={styles.main}>
          <div>
            <div className={styles.top}>
              <div className={styles['next-logo']}>
                <NextLogo fill="#fff" />
              </div>
              <div className={styles['top-separator']} />
              <div className={styles['text-and-icons']}>
                <div className={styles['text-conf']}>Conf</div>
                <div className={styles['top-icons']}>
                  <GlobeIcon height={19} />
                  <ImageIcon height={19} />
                  <ActivityIcon height={19} />
                </div>
              </div>
              <div className={styles['top-separator']} />
              <div className={styles.description}>
                The first Next.js global user conference.
                <br />
                An interactive online experence by the community,
                <br />
                free for everyone.
              </div>
            </div>
            <h1 className={styles.hero}>
              October 27, 2020
              <br />
              Everywhere, for Everyone
            </h1>
            <form className={styles.form}>
              <div className={styles['form-row']}>
                <label htmlFor="email-input-field" className={styles['input-label']}>
                  <input
                    className={styles.input}
                    type="email"
                    id="email-input-field"
                    defaultValue=""
                    disabled={false}
                    placeholder="Please enter your email…"
                  />
                </label>
                <input type="submit" className={styles.submit} value="Register" />
              </div>
            </form>
            <div className={styles.contact}>
              Want to speak or sponsor?{' '}
              <a href="mailto:conf@nextjs.org" className={styles['contact-email']}>
                conf@nextjs.org
              </a>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <div>
            Powered by{' '}
            <a
              href="https://vercel.com"
              className={cn(styles['footer-link'], styles['footer-logo'])}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo color="currentColor" />
            </a>
          </div>
          <div className={styles['footer-legal']}>
            <div>Copyright © 2020 Vercel, Inc. All rights reserved.</div>
            <div className={styles['footer-separator']} />
            <div>
              <a
                href="https://vercel.com/legal/privacy-policy"
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Page>
  );
}
