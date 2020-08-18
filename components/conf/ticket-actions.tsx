import cn from 'classnames';
import IconTwitter from './icon-twitter';
import IconLinkedin from './icon-linkedin';
import IconDownload from './icon-download';
import layoutStyles from './layout.module.css';
import styles from './ticket-actions.module.css';

type Props = {
  id: string;
};

export default function TicketActions({ id }: Props) {
  const permalink = encodeURIComponent(`https://nextjs.org/conf/tickets/${id}`);
  const text = encodeURIComponent(
    'Just got my free ticket to Next.js Conf, the first #nextjs global user conference:'
  );
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=vercel&text=${text}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`;
  const downloadUrl = `/conf/download-ticket/${id}`;

  return (
    <>
      <a
        className={cn(styles.button, layoutStyles.appear, styles.first)}
        href={tweetUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconTwitter width={24} /> Tweet it!
      </a>
      <a
        className={cn(styles.button, layoutStyles.appear, styles.second)}
        href={linkedInUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconLinkedin width={20} /> Share on LinkedIn
      </a>
      <a
        className={cn(styles.button, layoutStyles.appear, styles.third)}
        href={downloadUrl}
        download="Nextjs-Conf-Ticket.png"
      >
        <IconDownload width={24} /> Download
      </a>
    </>
  );
}
