import Layout from './layout';
import styles from './ticket.module.css';
import layoutStyles from './layout.module.css';
import TicketForm from './ticket-form';

export default function Ticket() {
  return (
    <Layout>
      <div className={styles['ticket-text']}>
        <h2 className={styles.hero}>
          You're in.
          <br />
          Now make it yours.
        </h2>
        <div className={layoutStyles.description}>
          Generate a unique ticket image with your GitHub username.
        </div>
      </div>
      <TicketForm />
    </Layout>
  );
}
