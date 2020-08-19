import px from '@lib/to-pixels';
import cn from 'classnames';
import styles from './loading-dots.module.css';

interface Props {
  size?: number;
  height?: number | string;
  reverse?: boolean;
}

const LoadingDots: React.FC<Props> = ({ size = 2, height, children, reverse }) => {
  return (
    <span
      className={cn(styles.loading, { [styles.reverse]: reverse })}
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
