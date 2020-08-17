import TicketColored from './ticket-colored';
import styles from './ticket-visual.module.css';
import TicketProfile from './ticket-profile';
import TicketNumber from './ticket-number';

type Size = {
  size?: number;
};

export default function TicketVisual({ size = 1 }: Size) {
  return (
    <>
      <div className={styles.visual} style={{ ['--size' as string]: size }}>
        <div className={styles.frame}>
          <TicketColored width="100%" />
        </div>
        <div className={styles.profile}>
          <TicketProfile name="Evil Rabbit" username="evilrabbit" size={size} />
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
