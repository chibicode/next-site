import GlobalStyles from '@components/global-styles';
import TicketVisual from './ticket-visual';
import styles from './ticket-image.module.css';

export default function TicketOnly() {
  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <GlobalStyles />
        <TicketVisual size={2000 / 770} />
      </div>
    </div>
  );
}
