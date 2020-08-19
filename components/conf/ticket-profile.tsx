import GithubIcon from '@components/icons/github';
import cn from 'classnames';
import useConfData from '@lib/hooks/useConfData';
import IconAvatar from './icon-avatar';
import styles from './ticket-profile.module.css';

type Props = {
  name?: string;
  username?: string;
  size?: number;
};

export default function TicketProfile({ name, username, size = 1 }: Props) {
  const { ticketGenerationState } = useConfData();
  return (
    <div className={styles.profile}>
      <span
        className={cn(styles.skeleton, styles.wrapper, styles.inline, styles.rounded, {
          [styles.show]: ticketGenerationState === 'loading'
        })}
      >
        {username ? (
          <img src={`https://github.com/${username}.png`} alt={username} className={styles.image} />
        ) : (
          <span className={cn(styles.image, styles['empty-icon'])}>
            <IconAvatar width="calc(80px * var(--size))" />
          </span>
        )}
      </span>
      <div className={styles.text}>
        <p
          className={cn(styles.name, {
            [styles['name-blank']]: !username
          })}
        >
          <span
            className={cn(styles.skeleton, styles.wrapper, {
              [styles.show]: ticketGenerationState === 'loading'
            })}
          >
            {name || username || 'Your Name'}
          </span>
        </p>
        <p className={styles.username}>
          <span
            className={cn(styles.skeleton, styles.wrapper, {
              [styles.show]: ticketGenerationState === 'loading'
            })}
          >
            <span className={styles.githubIcon}>
              <GithubIcon color="var(--secondary-color)" size={20 * size} />
            </span>
            {username || <>username</>}
          </span>
        </p>
      </div>
    </div>
  );
}
