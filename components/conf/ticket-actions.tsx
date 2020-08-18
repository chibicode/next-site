import styles from './ticket-actions.module.css';

type Props = {
  id: string;
};

export default function TicketActions({ id }: Props) {
  const permalink = encodeURIComponent(`https://nextjs.org/conf/tickets/${id}`);
  const text = encodeURIComponent('I just signed up for Next.js Conf!');
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=vercel&text=${text}`;
  const downloadUrl = `/conf/download-ticket/${id}`;
  return (
    <div>
      <a className={styles.button} href={tweetUrl} rel="noopener noreferrer" target="_blank">
        Tweet it!
      </a>
      <a className={styles.button} href={downloadUrl} download="ticket.png">
        Download
      </a>
    </div>
  );
}
