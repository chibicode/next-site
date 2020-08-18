import cn from 'classnames';
import useConfData from '@lib/hooks/useConfData';
import styles from './ticket.module.css';
import styleUtils from './utils.module.css';
import TicketForm from './ticket-form';
import TicketVisual from './ticket-visual';
import TicketActions from './ticket-actions';

export default function Ticket() {
  const { userData } = useConfData();
  return (
    <div className={styles['ticket-layout']}>
      <div className={cn(styles['ticket-instructions'])}>
        <div className={styles['ticket-text']}>
          <h2 className={cn(styles.hero, styleUtils.appear, styleUtils['appear-first'])}>
            You're in. <br /> Make it unique.
          </h2>
          <p className={cn(styles.description, styleUtils.appear, styleUtils['appear-second'])}>
            Generate a unique ticket image with your GitHub username.
          </p>
        </div>
        <div className={cn(styleUtils.appear, styleUtils['appear-third'])}>
          <TicketForm defaultUsername={userData.username} />
        </div>
      </div>
      <div>
        <div
          className={cn(styles['ticket-visual'], styleUtils.appear, styleUtils['appear-fourth'])}
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
