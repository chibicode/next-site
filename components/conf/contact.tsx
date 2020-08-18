import layoutStyles from './layout.module.css';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={`${layoutStyles.appear} ${layoutStyles['appear-fourth']} ${styles.contact}`}>
      Want to speak or sponsor?{' '}
      <a href="mailto:conf@nextjs.org" className={styles['contact-email']}>
        conf@nextjs.org
      </a>
    </div>
  );
}
