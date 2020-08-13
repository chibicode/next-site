import { useState } from 'react';
import cn from 'classnames';
import LoadingDots from './loading-dots';
import styles from './form.module.css';

type FormState = 'default' | 'loading' | 'error' | 'success';

export default function Form() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [formState, setFormState] = useState<FormState>('default');

  return formState === 'error' || formState === 'success' ? (
    <div className={styles.form}>
      <div className={styles['form-row']}>
        <div
          className={cn(styles['input-label'], {
            [styles.error]: formState === 'error',
            [styles.success]: formState === 'success'
          })}
        >
          <div className={cn(styles.input, styles['input-text'])}>
            {formState === 'error' ? (
              <>Error! Please try again in a few minutes.</>
            ) : (
              <>You’re successfully registered!</>
            )}
          </div>
          {formState === 'error' && (
            <button
              type="button"
              className={styles.submit}
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
      className={styles.form}
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
      <div className={styles['form-row']}>
        <label
          htmlFor="email-input-field"
          className={cn(styles['input-label'], {
            [styles.focused]: focused
          })}
        >
          <input
            className={styles.input}
            type="email"
            id="email-input-field"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={false}
            placeholder="Please enter your email…"
          />
        </label>
        <button type="submit" className={cn(styles.submit, styles[formState])}>
          {formState === 'loading' ? <LoadingDots size={4} /> : <>Register</>}
        </button>
      </div>
    </form>
  );
}
