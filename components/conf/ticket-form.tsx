import { useState } from 'react';
import cn from 'classnames';
import GithubIcon from '@components/icons/github';
import { Octokit } from '@octokit/rest';
import useConfData from '@lib/hooks/useConfData';
import { TicketGenerationState } from '@lib/conf';
import LoadingDots from './loading-dots';
import formStyles from './form.module.css';
import ticketFormStyles from './ticket-form.module.css';

const octokit = new Octokit();

type FormState = 'default' | 'loading' | 'error';

type Props = {
  defaultUsername?: string;
  setTicketGenerationState: React.Dispatch<React.SetStateAction<TicketGenerationState>>;
};

export default function Form({ defaultUsername = '', setTicketGenerationState }: Props) {
  const [username, setUsername] = useState(defaultUsername);
  const [focused, setFocused] = useState(false);
  const [formState, setFormState] = useState<FormState>('default');
  const { userData, setUserData } = useConfData();

  return formState === 'error' ? (
    <div>
      <div className={cn(formStyles['form-row'], ticketFormStyles['form-row'])}>
        <div className={cn(formStyles['input-label'], formStyles.error)}>
          <div className={cn(formStyles.input, formStyles['input-text'])}>
            Error! Please try again later.
          </div>
          <button
            type="button"
            className={formStyles.submit}
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
      onSubmit={e => {
        if (formState === 'default') {
          setFormState('loading');
          setTicketGenerationState('loading');
          octokit.users
            .getByUsername({
              username
            })
            .then(({ data }) => {
              fetch('https://api.nextjs.org/api/conf-github', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username,
                  id: userData.id,
                  name: data.name
                })
              })
                .then(res => res.json())
                .then(() => {
                  setUserData({ ...userData, username, name: data.name });
                  setFormState('default');
                  setTicketGenerationState('default');
                  // Prefetch the image URL to eagerly generate the image
                  fetch(`/conf/download-ticket/${username}`).catch(_ => {});
                })
                .catch(() => {
                  setFormState('error');
                });
            })
            .catch(() => {
              setFormState('error');
            });
        } else {
          setTicketGenerationState('default');
          setFormState('default');
        }
        e.preventDefault();
      }}
    >
      <div className={cn(formStyles['form-row'], ticketFormStyles['form-row'])}>
        <label
          htmlFor="github-input-field"
          className={cn(formStyles['input-label'], {
            [formStyles.focused]: focused
          })}
        >
          <input
            className={ticketFormStyles.input}
            autoComplete="off"
            type="text"
            id="github-input-field"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="GitHub username…"
            required
          />
        </label>
        <span className={ticketFormStyles.githubIcon}>
          <GithubIcon color="var(--secondary-color)" size={24} />
        </span>
        <button
          type="submit"
          className={cn(formStyles.submit, formStyles[formState])}
          disabled={formState === 'loading'}
        >
          {formState === 'loading' ? <LoadingDots size={4} /> : <>Generate</>}
        </button>
      </div>
    </form>
  );
}
