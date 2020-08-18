import cn from 'classnames';
import layoutStyles from './layout.module.css';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <>
      <h1 className={cn(layoutStyles.appear, layoutStyles['appear-third'], styles.hero)}>
        The first Next.js
        <br />
        global user conference
      </h1>
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
