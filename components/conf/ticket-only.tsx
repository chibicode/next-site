import GlobalStyles from '@components/global-styles';
import TicketVisual from './ticket-visual';
import TicketBackground from './ticket-background';
import styles from './ticket-only.module.css';

export default function TicketOnly() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <TicketBackground width={2400} />
      </div>
      <div className={styles.page}>
        <GlobalStyles />
        <TicketVisual size={2400 / 770} />
      </div>
    </div>
  );
}
