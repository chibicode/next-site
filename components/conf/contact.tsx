import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
      Want to speak or sponsor? <br className={styleUtils['show-on-mobile']} />
      <a href="mailto:conf@nextjs.org" className={styles['contact-email']}>
        conf@nextjs.org
      </a>
    </div>
  );
}
