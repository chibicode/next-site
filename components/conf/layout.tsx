import cn from 'classnames';
import Head from 'next/head';
import VercelLogo from '@components/icons/platform-logotype';
import { useEffect } from 'react';
import styles from './layout.module.css';
import styleUtils from './utils.module.css';
import ConfLogo from './conf-logo';

type Props = {
  inner: boolean;
  children: React.ReactNode;
  confLogoLink?: string;
};

function HostedByVercel({ linkEnabled }: { linkEnabled: boolean }) {
  const child = (
    <>
      Hosted by <VercelLogo color="currentColor" />
    </>
  );
  return (
    <div className={styles['secondary-text']}>
      {linkEnabled ? (
        <a
          href="https://vercel.com?utm_source=next-site&utm_medium=logo&utm_campaign=next-conf"
          className={cn(styles['footer-link'], styles['footer-logo'])}
          target="_blank"
          rel="noopener noreferrer"
        >
          {child}
        </a>
      ) : (
        <span className={cn(styles['footer-logo'])}>{child}</span>
      )}
    </div>
  );
}

export default function Layout({ children, inner, confLogoLink }: Props) {
  useEffect(() => {
    document.documentElement.style.background = '#000';
    document.body.style.background = '#000';
    return () => {
      document.documentElement.style.background = '#fff';
      document.body.style.background = '#fff';
    };
  }, []);
  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <header
          className={cn(styles.header, {
            [styleUtils.appear]: !inner,
            [styleUtils['appear-first']]: !inner
          })}
        >
          <div className={styles['header-logos']}>
            <ConfLogo link={confLogoLink} />
            <div className={styles['header-logos-secondary']}>
              <div className={styles['header-separator']} />
              <div className={styles.description}>
                An interactive online experience by the community, free for everyone.
              </div>
            </div>
          </div>
          <div
            className={cn(styles['header-right'], {
              [styleUtils.appear]: !inner,
              [styleUtils['appear-second']]: !inner
            })}
          >
            <HostedByVercel linkEnabled={!!confLogoLink} />
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.full}>{children}</div>
        </main>

        <footer
          className={cn(styles.footer, {
            [styleUtils.appear]: !inner,
            [styleUtils['appear-sixth']]: !inner
          })}
        >
          <div className={styles['footer-legal']}>
            <div className={styles['footer-hostedby']}>
              <HostedByVercel linkEnabled={!!confLogoLink} />
              <div className={styles['footer-separator']} />
            </div>
            <div className={styles['footer-copyright']}>
              Copyright © 2020 Vercel, Inc. All rights reserved.
            </div>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href="https://www.notion.so/vercel/Next-js-Conf-Code-of-Conduct-2dae92927656409db28aaf2a62d99c41"
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Conduct
              </a>
            </p>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href="https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf"
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
