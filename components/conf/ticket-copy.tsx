import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { SITE_URL } from '@lib/constants';
import ClipboardJS from 'clipboard';
import styleUtils from './utils.module.css';
import IconCopy from './icon-copy';
import styles from './ticket-copy.module.css';

type Props = {
  username: string;
};

export default function TicketCopy({ username }: Props) {
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [scrolling, setScrolling] = useState(false);
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const url = `${SITE_URL}/conf/tickets/${username}`;
  useEffect(() => {
    let clipboard: ClipboardJS;
    if (buttonRef.current) {
      clipboard = new ClipboardJS(buttonRef.current);
    }

    return () => {
      clipboard.destroy();
    };
  }, []);

  const copiedText = (
    <span
      className={cn(styles.copied, {
        [styles.visible]: copied
      })}
    >
      Copied!
    </span>
  );

  const copyButton = (
    <button
      type="button"
      className={styles['copy-button']}
      data-clipboard-text={url}
      ref={buttonRef}
      onClick={() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }}
    >
      <IconCopy />
    </button>
  );

  return (
    <div className={cn(styles.wrapper, styleUtils.appear)}>
      <div className={styles['label-wrapper']}>
        <div className={styles.label}>Your ticket URL:</div>
        <div className={cn(styles['mobile-copy'])}>
          {copiedText}
          {copyButton}
        </div>
      </div>
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
          {url}
        </span>
        <span className={styles.fade} style={{ opacity: fadeOpacity }} />
        <div className={styleUtils['hide-on-mobile']}>
          {copiedText}
          {copyButton}
        </div>
      </div>
    </div>
  );
}
