import styles from './hero.module.css';

export default function Hero() {
  return (
    <>
      <h1 className={styles.hero}>
        The first Next.js
        <br />
        global user conference
      </h1>
      <div className={styles.info}>
        <div>October 27, 2020</div>
        <div className={styles['description-separator']} />
        <div>
          <strong>Online</strong>
        </div>
      </div>
    </>
  );
}
