import IconTwitter from './icon-twitter';
import IconLinkedin from './icon-linkedin';
import IconDownload from './icon-download';
import styles from './ticket-actions.module.css';

type Props = {
  id: string;
};

export default function TicketActions({ id }: Props) {
  const permalink = encodeURIComponent(`https://nextjs.org/conf/tickets/${id}`);
  const text = encodeURIComponent('I just signed up for Next.js Conf!');
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=vercel&text=${text}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`;
  const downloadUrl = `/conf/download-ticket/${id}`;

  return (
    <>
      <a className={styles.button} href={tweetUrl} rel="noopener noreferrer" target="_blank">
        <IconTwitter width={24} /> Tweet it!
      </a>
      <a className={styles.button} href={linkedInUrl} rel="noopener noreferrer" target="_blank">
        <IconLinkedin width={20} /> Share on LinkedIn
      </a>
      <a className={styles.button} href={downloadUrl} download="ticket.png">
        <IconDownload width={24} /> Download
      </a>
    </>
  );
}
