import cn from 'classnames';
import Tilt from 'vanilla-tilt';
import { useRef, useEffect, useState } from 'react';
import { UserData } from '@lib/hooks/useConfData';
import { TicketGenerationState } from '@lib/conf';
import { scrollTo } from '@lib/smooth-scroll';
import Link from 'next/link';
import styles from './ticket.module.css';
import styleUtils from './utils.module.css';
import TicketForm from './ticket-form';
import TicketVisual from './ticket-visual';
import TicketActions from './ticket-actions';

type Props = {
  username: UserData['username'];
  ticketNumber: UserData['ticketNumber'];
  name: UserData['name'];
  sharePage?: boolean;
};

export default function Ticket({ username, name, ticketNumber, sharePage }: Props) {
  const ticketRef = useRef<HTMLDivElement>(null);
  const [ticketGenerationState, setTicketGenerationState] = useState<TicketGenerationState>(
    'default'
  );
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ticketRef.current) {
      Tilt.init(ticketRef.current, {
        glare: true,
        max: 5,
        'max-glare': 0.16,
        'full-page-listening': true
      });
    }
  }, [ticketRef]);

  useEffect(() => {
    if (divRef && divRef.current) {
      scrollTo(divRef.current, -30);
    }
  }, [divRef]);

  return (
    <div
      className={cn(styles['ticket-layout'], {
        [styles['ticket-share-layout']]: sharePage
      })}
    >
      <div ref={divRef}>
        <div className={styles['ticket-text']}>
          <h2 className={cn(styles.hero, styleUtils.appear, styleUtils['appear-first'])}>
            {sharePage ? (
              <>{name}’s Ticket</>
            ) : (
              <>
                You're in. <br /> Make it unique.
              </>
            )}
          </h2>
          <p className={cn(styles.description, styleUtils.appear, styleUtils['appear-second'])}>
            Join them on October 27, 2020.
          </p>
        </div>
        <div className={cn(styleUtils.appear, styleUtils['appear-third'])}>
          {!sharePage ? (
            <TicketForm
              defaultUsername={username}
              setTicketGenerationState={setTicketGenerationState}
            />
          ) : (
            <div className={styles['get-ticket']}>
              <Link href="/conf">
                {/* eslint-disable-next-line */}
                <a
                  className={styles['get-ticket-button']}
                  onClick={() => {
                    document.body.classList.add('get-ticket-clicked');
                    setTimeout(() => {
                      document.body.classList.remove('get-ticket-clicked');
                    }, 3000);
                  }}
                >
                  Get your own!
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className={styles['ticket-visual-wrapper']}>
        <div
          ref={ticketRef}
          className={cn(styles['ticket-visual'], styleUtils.appear, styleUtils['appear-fourth'])}
        >
          <TicketVisual
            username={username}
            name={name}
            ticketNumber={ticketNumber}
            ticketGenerationState={ticketGenerationState}
          />
        </div>
        {!sharePage && (
          <>
            {username ? (
              <div className={styles['ticket-actions']}>
                <TicketActions username={username} />
              </div>
            ) : (
              <div className={styles['ticket-actions-placeholder']} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
