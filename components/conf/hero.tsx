import cn from 'classnames';
import layoutStyles from './layout.module.css';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <>
      <h1 className={cn(layoutStyles.appear, layoutStyles['appear-third'], styles.hero)}>
        The first <br className={styles['hide-on-desktop']} /> Next.js{' '}
        <br className={styles['hide-on-tablet']} />
        global user conference
      </h1>
      <h2 className={cn('hide-on-desktop', styles.description)}>
        An interactive online experience by the community, free for everyone.
      </h2>
      <div className={cn(layoutStyles.appear, layoutStyles['appear-fourth'], styles.info)}>
        <p>October 27, 2020</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </>
  );
}
