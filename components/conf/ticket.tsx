import cn from 'classnames';
import useConfData from '@lib/hooks/useConfData';
import styles from './ticket.module.css';
import layoutStyles from './layout.module.css';
import TicketForm from './ticket-form';
import TicketVisual from './ticket-visual';
import TicketActions from './ticket-actions';

export default function Ticket() {
  const { userData } = useConfData();
  return (
    <div className={styles['ticket-layout']}>
      <div className={cn(styles['ticket-instructions'])}>
        <div className={styles['ticket-text']}>
          <h2 className={styles.hero}>You're in. Now make it unique.</h2>
          <p className={layoutStyles.description}>
            Generate a unique ticket image with your GitHub username.
          </p>
        </div>
        <TicketForm defaultUsername={userData.username} />
      </div>
      <div>
        <div className={styles['ticket-visual']}>
          <TicketVisual
            username={userData.username}
            name={userData.name}
            ticketNumber={userData.ticketNumber}
          />
        </div>
        {userData.id && userData.username && (
          <div className={styles['ticket-actions']}>
            <TicketActions id={userData.id} />
          </div>
        )}
      </div>
    </div>
  );
}
