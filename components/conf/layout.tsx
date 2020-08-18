import cn from 'classnames';
import VercelLogo from '@components/icons/platform-logotype';
import styles from './layout.module.css';
import ConfLogo from './conf-logo';

type Props = {
  inner: boolean;
  children: React.ReactNode;
};

function HostedByVercel() {
  return (
    <div className={styles['secondary-text']}>
      Hosted by{' '}
      <a
        href="https://vercel.com"
        className={cn(styles['footer-link'], styles['footer-logo'])}
        target="_blank"
        rel="noopener noreferrer"
      >
        <VercelLogo color="currentColor" />
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
            [styles.appear]: !inner,
            [styles['appear-fifth']]: !inner
          })}
        >
          <div className={styles['header-logos']}>
            <ConfLogo />
            <div className={styles['header-logos-secondary']}>
              <div className={styles['header-separator']} />
              <div className={styles.description}>
                An interactive online experence by the community, free for everyone.
              </div>
            </div>
          </div>
          <div className={styles['header-right']}>
            <HostedByVercel />
          </div>
        </header>
        <main className={styles.main}>
          <div>{children}</div>
        </main>

        <footer
          className={cn(styles.footer, {
            [styles.appear]: !inner,
            [styles['appear-fifth']]: !inner
          })}
        >
          <div className={styles['footer-legal']}>
            <div className={styles['footer-hostedby']}>
              <HostedByVercel />
              <div className={styles['footer-separator']} />
            </div>
            <div>Copyright © 2020 Vercel, Inc. All rights reserved.</div>
            <div className={styles['footer-separator']} />
            <p>
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
