import TicketColored from './ticket-colored';
import styles from './ticket-visual.module.css';
import TicketProfile from './ticket-profile';

export default function TicketVisual() {
  return (
    <>
      <div className={styles.visual}>
        <div className={styles.frame}>
          <TicketColored width="100%" />
        </div>
        <div className={styles.info}>
          <div className={styles.profile}>
            <TicketProfile name="Evil Rabbit" username="evilrabbit" />
          </div>
          <div>?</div>
        </div>
      </div>
    </>
  );
}
