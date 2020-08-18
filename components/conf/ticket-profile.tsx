import GithubIcon from '@components/icons/github';
import cn from 'classnames';
import styles from './ticket-profile.module.css';

type Props = {
  name?: string;
  username?: string;
  size?: number;
};

export default function TicketProfile({ name, username, size = 1 }: Props) {
  return (
    <div className={styles.profile}>
      {username ? (
        <img src={`https://github.com/${username}.png`} alt={username} className={styles.image} />
      ) : (
        <span className={cn(styles.image, styles['empty-icon'])} />
      )}
      <div className={styles.text}>
        <div
          className={cn(styles.name, {
            [styles['name-blank']]: !name
          })}
        >
          {name || 'Full Name'}
        </div>
        <div className={styles.username}>
          <span className={styles.githubIcon}>
            <GithubIcon color="var(--secondary-color)" size={20 * size} />
          </span>
          {username || <>&nbsp;</>}
        </div>
      </div>
    </div>
  );
}
