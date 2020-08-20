import { useState, useRef } from 'react';
import cn from 'classnames';
import GithubIcon from '@components/icons/github';
import CheckIcon from '@components/icons/check';
import { API_URL } from '@lib/constants';
import useConfData from '@lib/hooks/useConfData';
import { TicketGenerationState } from '@lib/conf';
import LoadingDots from './loading-dots';
import formStyles from './form.module.css';
import ticketFormStyles from './ticket-form.module.css';

type FormState = 'default' | 'loading' | 'error';

type Props = {
  defaultUsername?: string;
  setTicketGenerationState: React.Dispatch<React.SetStateAction<TicketGenerationState>>;
};

export default function Form({ defaultUsername = '', setTicketGenerationState }: Props) {
  const [username, setUsername] = useState(defaultUsername);
  const [formState, setFormState] = useState<FormState>('default');
  const [errorMsg, setErrorMsg] = useState('');
  const { userData, setUserData } = useConfData();
  const formRef = useRef<HTMLFormElement>(null);

  return formState === 'error' ? (
    <div>
      <div className={cn(formStyles['form-row'], ticketFormStyles['form-row'])}>
        <div className={cn(formStyles['input-label'], formStyles.error)}>
          <div className={cn(formStyles.input, formStyles['input-text'])}>{errorMsg}</div>
          <button
            type="button"
            className={cn(formStyles.submit, formStyles.error)}
            onClick={() => {
              setFormState('default');
              setTicketGenerationState('default');
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  ) : (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault();

        if (formState !== 'default') {
          setTicketGenerationState('default');
          setFormState('default');
          return;
        }

        setFormState('loading');
        setTicketGenerationState('loading');

        if (!process.env.NEXT_PUBLIC_CONF_GITHUB_OAUTH_CLIENT_ID) {
          setFormState('error');
          // Message for OS contributors
          setErrorMsg('Only enabled for production deployments.');
          return;
        }

        const openedWindow = window.open(
          `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
            process.env.NEXT_PUBLIC_CONF_GITHUB_OAUTH_CLIENT_ID
          )}`,
          'githubOAuth',
          'resizable,scrollbars,status,width=600,height=700'
        );

        new Promise<{ token: string } | undefined>(resolve => {
          const interval = setInterval(() => {
            if (!openedWindow || openedWindow.closed) {
              clearInterval(interval);
              resolve();
            }
          }, 250);

          window.addEventListener('message', function onMessage(e) {
            if (openedWindow) {
              openedWindow.close();
            }
            clearInterval(interval);
            resolve(e.data);
          });
        })
          .then(async data => {
            if (!data) {
              setFormState('default');
              setTicketGenerationState('default');
              return;
            }

            const res = await fetch(`${API_URL}/conf-github`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: userData.id,
                token: data.token
              })
            });

            if (!res.ok) {
              throw new Error('Failed to store oauth result');
            }

            const { username, name } = await res.json();

            document.body.classList.add('ticket-generated');
            setUserData({ ...userData, username, name });
            setUsername(username);
            setFormState('default');
            setTicketGenerationState('default');

            // Prefetch image
            new Image().src = `https://github.com/${username}.png`;

            // Prefetch the image URL to eagerly generate the image
            fetch(`/conf/download-ticket/${username}`).catch(_ => {});

            // Prefetch the twitter share URL to eagerly generate the page
            fetch(`/conf/tickets/${username}`).catch(_ => {});
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.error(err);
            setFormState('error');
            setErrorMsg('Error! Please try again later.');
            setTicketGenerationState('default');
          });
      }}
    >
      <div className={cn(formStyles['form-row'], ticketFormStyles['form-row'])}>
        <button
          type="submit"
          className={cn(
            formStyles.submit,
            formStyles['generate-with-github'],
            formStyles[formState]
          )}
          disabled={formState === 'loading' || Boolean(username)}
        >
          <div className={ticketFormStyles.generateWithGithub}>
            <span className={ticketFormStyles.githubIcon}>
              <GithubIcon color="#000" size={24} />
            </span>
            {formState === 'loading' ? (
              <LoadingDots size={4} />
            ) : (
              username || 'Generate with GitHub'
            )}
          </div>
          {username ? (
            <span className={ticketFormStyles.checkIcon}>
              <CheckIcon color="#000" size={24} />
            </span>
          ) : null}
        </button>
        <p className={ticketFormStyles.description}>Only public info will be used.</p>
      </div>
    </form>
  );
}
