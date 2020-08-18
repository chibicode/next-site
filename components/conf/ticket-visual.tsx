import TicketColored from './ticket-colored';
import styles from './ticket-visual.module.css';
import TicketProfile from './ticket-profile';
import TicketNumber from './ticket-number';
import TicketMono from './ticket-mono';

type Props = {
  size?: number;
  name?: string;
  ticketNumber?: number;
  username?: string;
};

export default function TicketVisual({ size = 1, name, username, ticketNumber }: Props) {
  return (
    <>
      <div className={styles.visual} style={{ ['--size' as string]: size }}>
        <div className={styles.frame}>
          {username ? <TicketColored width="100%" /> : <TicketMono width="100%" />}
        </div>
        <div className={styles.profile}>
          <TicketProfile name={name} username={username} size={size} />
        </div>
        {ticketNumber && (
          <div className={styles['ticket-number-wrapper']}>
            <div className={styles['ticket-number']}>
              <TicketNumber number={ticketNumber} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
