import layoutStyles from './layout.module.css';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <>
      <h1 className={`${layoutStyles.appear} ${layoutStyles['appear-first']} ${styles.hero}`}>
        The first Next.js
        <br />
        global user conference
      </h1>
      <div className={`${layoutStyles.appear} ${layoutStyles['appear-second']} ${styles.info}`}>
        <p>October 27, 2020</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </>
  );
}
