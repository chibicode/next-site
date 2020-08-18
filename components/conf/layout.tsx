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
        <header
          className={`${styles['appear--opacity-only']} ${styles['appear-fifth']} ${styles.header}`}
        >
          <ConfLogo />
          <div className={styles['header-separator']} />
          <p className={styles.description}>
            An interactive online experence by the community, free for everyone.
          </p>
        </header>
        <main className={styles.main}>
          <div>{children}</div>
        </main>
        <footer
          className={`${styles['appear--opacity-only']} ${styles['appear-fifth']} ${styles.footer}`}
        >
          <p>
            Hosted by{' '}
            <a
              href="https://vercel.com"
              className={cn(styles['footer-link'], styles['footer-logo'])}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VercelLogo color="currentColor" />
            </a>
          </p>
          <div className={styles['footer-legal']}>
            <p>Copyright © 2020 Vercel, Inc. All rights reserved.</p>
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
