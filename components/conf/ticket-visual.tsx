import TicketColored from './ticket-colored';
import styles from './ticket-visual.module.css';
import TicketProfile from './ticket-profile';
import TicketNumber from './ticket-number';

export default function TicketVisual() {
  return (
    <>
      <div className={styles.visual}>
        <div className={styles.frame}>
          <TicketColored width="100%" />
        </div>
        <div className={styles.profile}>
          <TicketProfile name="Evil Rabbit" username="evilrabbit" />
        </div>
        <div className={styles['ticket-number-wrapper']}>
          <div className={styles['ticket-number']}>
            <TicketNumber number={1} />
          </div>
        </div>
      </div>
    </>
  );
}
