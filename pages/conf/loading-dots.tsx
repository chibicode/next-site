import px from '@lib/to-pixels';
import styles from './loading-dots.module.css';

interface Props {
  size?: number;
  height?: number | string;
}

const LoadingDots: React.FC<Props> = ({ size = 2, height, children }) => {
  return (
    <span
      className={styles.loading}
      style={{
        ['--loading-dots-height' as string]: height ? px(height) : undefined,
        ['--loading-dots-size' as string]: size !== 2 ? px(size) : undefined
      }}
      data-geist-loading-dots=""
    >
      {children && <div className={styles.spacer}>{children}</div>}
      <span />
      <span />
      <span />
    </span>
  );
};

export default LoadingDots;
