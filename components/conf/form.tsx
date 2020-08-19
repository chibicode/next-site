import { useState } from 'react';
import cn from 'classnames';
import useConfData from '@lib/hooks/useConfData';
import LoadingDots from './loading-dots';
import styleUtils from './utils.module.css';
import styles from './form.module.css';

type FormState = 'default' | 'loading' | 'error';

export default function Form() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [formState, setFormState] = useState<FormState>('default');
  const { setPageState, setUserData } = useConfData();

  return formState === 'error' ? (
    <div className={styles.form}>
      <div className={styles['form-row']}>
        <div className={cn(styles['input-label'], styles.error)}>
          <div className={cn(styles.input, styles['input-text'])}>
            Error! Please try again later.
          </div>
          <button
            type="button"
            className={styles.submit}
            onClick={() => {
              setFormState('default');
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  ) : (
    <form
      className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.form)}
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
              referrer: document.referrer,
              queryParams: window.location.search
            })
          })
            .then(res => res.json())
            .then(data => {
              setUserData({
                id: data.id,
                ticketNumber: data.ticketNumber,
                alreadyExists: data.exists,
                name: data.name,
                username: data.username
              });
              setPageState('ticket');
              // Prefetch the share URL to eagerly generate the page
              fetch(`/conf/tickets/${data.username}`).catch(_ => {});
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
      <div className={styles['form-row']}>
        <label
          htmlFor="email-input-field"
          className={cn(styles['input-label'], {
            [styles.focused]: focused
          })}
        >
          <input
            className={styles.input}
            autoComplete="off"
            type="email"
            id="email-input-field"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Enter email to register free"
            required
          />
        </label>
        <button
          type="submit"
          className={cn(styles.submit, styles[formState])}
          disabled={formState === 'loading'}
        >
          {formState === 'loading' ? <LoadingDots size={4} /> : <>Register</>}
        </button>
      </div>
    </form>
  );
}
