import cn from 'classnames';
import VercelLogo from '@components/icons/platform-logotype';
import styles from './layout.module.css';
import ConfLogo from './conf-logo';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <header className={styles.header}>
          <ConfLogo />
          <div className={styles['header-separator']} />
          <div className={styles.description}>
            An interactive online experence by the community, free for everyone.
          </div>
        </header>
        <main className={styles.main}>
          <div>{children}</div>
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
              <VercelLogo color="currentColor" />
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
    </div>
  );
}
