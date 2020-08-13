import { useState } from 'react';
import cn from 'classnames';
import LoadingDots from './loading-dots';
import styles from './form.module.css';

type FormState = 'default' | 'loading' | 'error';

export default function Form() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [formState, setFormState] = useState<FormState>('default');
  return formState === 'error' ? (
    <div className={styles.form}>
      <div className={styles['form-row']}>
        <div
          className={cn(styles['input-label'], {
            [styles.error]: formState === 'error'
          })}
        >
          <div className={cn(styles.input, styles['input-text'])}>
            Error! Please try again in a few minutes.
          </div>
          <button type="button" className={styles.submit}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  ) : (
    <form
      className={styles.form}
      onSubmit={e => {
        if (formState === 'default') {
          setFormState('error');
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
