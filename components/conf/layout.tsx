import cn from 'classnames';
import VercelLogo from '@components/icons/platform-logotype';
import styles from './layout.module.css';
import styleUtils from './utils.module.css';
import ConfLogo from './conf-logo';

type Props = {
  inner: boolean;
  children: React.ReactNode;
};

function HostedByVercel() {
  return (
    <div className={styles['secondary-text']}>
      <a
        href="https://vercel.com"
        className={cn(styles['footer-link'], styles['footer-logo'])}
        target="_blank"
        rel="noopener noreferrer"
      >
        Hosted by <VercelLogo color="currentColor" />
      </a>
    </div>
  );
}

export default function Layout({ children, inner }: Props) {
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
            <ConfLogo />
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
            <HostedByVercel />
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
              <HostedByVercel />
              <div className={styles['footer-separator']} />
            </div>
            <div>Copyright © 2020 Vercel, Inc. All rights reserved.</div>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href="https://vercel.com/legal/privacy-policy"
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
