import { useState, useRef } from 'react';
import { SITE_URL } from '@lib/constants';
import IconCopy from './icon-copy';
import styles from './ticket-copy.module.css';

type Props = {
  username: string;
};

export default function TicketCopy({ username }: Props) {
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [scrolling, setScrolling] = useState(false);
  const scrollRef = useRef<HTMLSpanElement>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>Your ticket URL:</div>
      <div className={styles.field}>
        <span
          className={styles.url}
          ref={scrollRef}
          onScroll={() => {
            if (!scrolling) {
              setScrolling(true);
              const animationFrame = requestAnimationFrame(() => {
                const scrollableWidth =
                  (scrollRef.current?.scrollWidth || 0) - (scrollRef.current?.clientWidth || 0);
                setFadeOpacity(
                  (scrollableWidth - (scrollRef.current?.scrollLeft || 0)) / (scrollableWidth || 1)
                );
                cancelAnimationFrame(animationFrame);
                setScrolling(false);
              });
            }
          }}
        >
          {SITE_URL}/conf/tickets/{username}
        </span>
        <span className={styles.fade} style={{ opacity: fadeOpacity }} />
        <button type="button" className={styles['copy-button']}>
          <IconCopy />
        </button>
      </div>
    </div>
  );
}
