import { useEffect, useRef } from 'react';
import cn from 'classnames';
import Tilt from 'vanilla-tilt';
import useConfData from '@lib/hooks/useConfData';
import styles from './ticket.module.css';
import styleUtils from './utils.module.css';
import TicketForm from './ticket-form';
import TicketVisual from './ticket-visual';
import TicketActions from './ticket-actions';

export default function Ticket() {
  const { userData } = useConfData();
  const ticketRef = useRef();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    let ticket;

    if (ticketRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      Tilt.init(ticketRef.current, {
        glare: true,
        max: 1,
        'max-glare': 0.12
      });

      ticket = ticketRef.current;
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      if (ticket?.vanillaTilt) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        ticket.vanillaTilt.destroy();
      }
    };
  }, [ticketRef]);

  return (
    <div className={styles['ticket-layout']}>
      <div className={cn(styles['ticket-instructions'])}>
        <div className={styles['ticket-text']}>
          <h2 className={cn(styles.hero, styleUtils.appear, styleUtils['appear-first'])}>
            You're in. <br /> Make it unique.
          </h2>
          <p className={cn(styles.description, styleUtils.appear, styleUtils['appear-second'])}>
            Generate a unique ticket image with <br className={styleUtils['hide-on-mobile']} />
            your GitHub username.
          </p>
        </div>
        <div className={cn(styleUtils.appear, styleUtils['appear-third'])}>
          <TicketForm defaultUsername={userData.username} />
        </div>
      </div>
      <div>
        <div
          ref={ticketRef}
          className={cn(styles['ticket-visual'], styleUtils.appear, styleUtils['appear-fourth'])}
        >
          <TicketVisual
            username={userData.username}
            name={userData.name}
            ticketNumber={userData.ticketNumber}
          />
        </div>
        {userData.username ? (
          <div className={styles['ticket-actions']}>
            <TicketActions username={userData.username} />
          </div>
        ) : (
          <div className={styles['ticket-actions-placeholder']} />
        )}
      </div>
    </div>
  );
}
