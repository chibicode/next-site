import GlobalStyles from '@components/global-styles';
import TicketVisual from './ticket-visual';
import styles from './ticket-only.module.css';

export default function TicketOnly() {
  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <GlobalStyles />
        <TicketVisual size={2400 / 770} />
      </div>
    </div>
  );
}
