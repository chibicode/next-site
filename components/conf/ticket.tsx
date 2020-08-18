import cn from 'classnames';
import useConfData from '@lib/hooks/useConfData';
import styles from './ticket.module.css';
import layoutStyles from './layout.module.css';
import TicketForm from './ticket-form';
import TicketVisual from './ticket-visual';

export default function Ticket() {
  const { userData } = useConfData();
  return (
    <div className={styles['ticket-layout']}>
      <div className={cn(styles.centered, styles['ticket-instructions'])}>
        <div className={styles['ticket-text']}>
          <h2 className={styles.hero}>
            You're in.
            <br />
            Now make it unique.
          </h2>
          <div className={layoutStyles.description}>
            Generate a unique ticket image with your GitHub username.
          </div>
        </div>
        <TicketForm defaultUsername={userData.username} />
      </div>
      <div className={cn(styles.centered, styles['ticket-visual'])}>
        <TicketVisual
          username={userData.username}
          name={userData.name}
          ticketNumber={userData.ticketNumber}
        />
      </div>
    </div>
  );
}
