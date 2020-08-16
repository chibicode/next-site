import { useState } from 'react';
import cn from 'classnames';
import GithubIcon from '@components/icons/github';
import LoadingDots from './loading-dots';
import formStyles from './form.module.css';
import ticketFormStyles from './ticket-form.module.css';

type FormState = 'default' | 'loading' | 'error' | 'success';

export default function Form() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [formState, setFormState] = useState<FormState>('default');

  return formState === 'error' || formState === 'success' ? (
    <div>
      <div className={formStyles['form-row']}>
        <div
          className={cn(formStyles['input-label'], {
            [formStyles.error]: formState === 'error',
            [formStyles.success]: formState === 'success'
          })}
        >
          <div className={cn(formStyles.input, formStyles['input-text'])}>
            {formState === 'error' ? (
              <>Error! Please try again in a few minutes.</>
            ) : (
              <>You’re successfully registered!</>
            )}
          </div>
          {formState === 'error' && (
            <button
              type="button"
              className={formStyles.submit}
              onClick={() => {
                setFormState('default');
              }}
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <form
      onSubmit={e => {
        if (formState === 'default') {
          setFormState('loading');
          fetch('https://api.nextjs.org/api/conf-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email,
              referrer: document.referrer
            })
          })
            .then(() => {
              // Reset the textarea value on success
              setFormState('success');
            })
            .catch(() => {
              setFormState('error');
            });
        } else {
          setFormState('default');
        }
        e.preventDefault();
      }}
    >
      <div className={formStyles['form-row']}>
        <label
          htmlFor="github-input-field"
          className={cn(formStyles['input-label'], {
            [formStyles.focused]: focused
          })}
        >
          <input
            className={ticketFormStyles.input}
            type="text"
            id="github-input-field"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={false}
            placeholder="Enter your GitHub username…"
          />
        </label>
        <span className={ticketFormStyles.githubIcon}>
          <GithubIcon color="var(--secondary-color)" />
        </span>
        <button type="submit" className={cn(formStyles.submit, formStyles[formState])}>
          {formState === 'loading' ? <LoadingDots size={4} /> : <>Generate</>}
        </button>
      </div>
    </form>
  );
}
