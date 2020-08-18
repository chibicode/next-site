import NextLogo from '@components/logo';
import cn from 'classnames';
import styles from './conf-logo.module.css';

type IconProps = { height: number };

function GlobeIcon({ height }: IconProps) {
  return (
    <div className={cn(styles['icon-background'], styles['icon-globe'])}>
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
    </div>
  );
}

function ImageIcon({ height }: IconProps) {
  return (
    <div className={cn(styles['icon-background'], styles['icon-image'])}>
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
    </div>
  );
}

function ActivityIcon({ height }: IconProps) {
  return (
    <div className={cn(styles['icon-background'], styles['icon-activity'])}>
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
    </div>
  );
}

export default function ConfLogo() {
  return (
    <div className={styles['conf-logo']}>
      <div className={styles['next-logo']}>
        <NextLogo fill="#fff" />
      </div>
      <div className={styles['text-and-icons']}>
        <div className={styles['text-conf']}>Conf</div>
        <div className={styles['header-icons']}>
          <GlobeIcon height={16} />
          <ImageIcon height={16} />
          <ActivityIcon height={16} />
        </div>
      </div>
    </div>
  );
}