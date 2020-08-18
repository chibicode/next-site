import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        The first <br className={styleUtils['hide-on-desktop']} /> Next.js{' '}
        <br className={styleUtils['hide-on-mobile']} />
        global user conference
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-fourth'],
          styleUtils['hide-on-desktop'],
          styles.description
        )}
      >
        An interactive online experience by the community, free for everyone.
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>October 27, 2020</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </>
  );
}
