import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { SITE_URL } from '@lib/constants';
import IconTwitter from './icon-twitter';
import IconLinkedin from './icon-linkedin';
import IconDownload from './icon-download';
import LoadingDots from './loading-dots';
import styleUtils from './utils.module.css';
import styles from './ticket-actions.module.css';

type Props = {
  username: string;
};

export default function TicketActions({ username }: Props) {
  const [imgReady, setImgReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const downloadLink = useRef<HTMLAnchorElement>();
  const permalink = encodeURIComponent(`${SITE_URL}/conf/tickets/${username}`);
  const text = encodeURIComponent(
    `Just got my free ticket to #nextjsconf, grab yours! Let’s build a better web with #nextjs:`
  );
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=vercel&text=${text}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`;
  const downloadUrl = `/conf/download-ticket/${username}`;

  useEffect(() => {
    setImgReady(false);

    const img = new Image();

    img.src = downloadUrl;
    img.onload = () => {
      setImgReady(true);
      setLoading(false);
      if (downloadLink.current) {
        downloadLink.current.click();
        downloadLink.current = undefined;
      }
    };
  }, [downloadUrl]);

  return (
    <>
      <a
        className={cn(styles.button, styleUtils.appear, styles.first, 'icon-button')}
        href={tweetUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconTwitter width={24} /> Tweet it!
      </a>
      <a
        className={cn(
          styles.button,
          styleUtils.appear,
          styles.second,
          'icon-button',
          // LinkedIn Share widget doesn’t work on mobile
          styles['linkedin-button']
        )}
        href={linkedInUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconLinkedin width={20} /> Share on LinkedIn
      </a>
      <a
        className={cn(styles.button, styleUtils.appear, styles.third, 'icon-button', {
          [styles.loading]: loading
        })}
        href={loading ? undefined : downloadUrl}
        onClick={e => {
          if (imgReady) return;

          e.preventDefault();
          downloadLink.current = e.currentTarget;
          // Wait for the image download to finish
          setLoading(true);
        }}
        download="Nextjs-Conf-Ticket.png"
      >
        {loading ? (
          <LoadingDots size={4} />
        ) : (
          <>
            <IconDownload width={24} /> Download
          </>
        )}
      </a>
    </>
  );
}
