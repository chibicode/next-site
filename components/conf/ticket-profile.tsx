import GithubIcon from '@components/icons/github';
import styles from './ticket-profile.module.css';

type Props = {
  name?: string;
  username?: string;
  size?: number;
};

export default function TicketProfile({ name, username, size = 1 }: Props) {
  return (
    <div className={styles.profile}>
      <img src={`https://github.com/${username}.png`} alt={username} className={styles.image} />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.username}>
          <span className={styles.githubIcon}>
            <GithubIcon color="var(--secondary-color)" size={20 * size} />
          </span>
          {username}
        </div>
      </div>
    </div>
  );
}
