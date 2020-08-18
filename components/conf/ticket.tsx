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
          <h2 className={cn(styles.hero, layoutStyles.appear, layoutStyles['appear-first'])}>
            You're in. <br className={styles['hide-on-desktop']} /> Make it unique.
          </h2>
          <p className={cn(styles.description, layoutStyles.appear, layoutStyles['appear-second'])}>
            Generate a unique ticket image with your GitHub username.
          </p>
        </div>
        <div className={cn(layoutStyles.appear, layoutStyles['appear-third'])}>
          <TicketForm defaultUsername={userData.username} />
        </div>
      </div>
      <div>
        <div
          className={cn(
            styles['ticket-visual'],
            layoutStyles.appear,
            layoutStyles['appear-fourth']
          )}
        >
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
