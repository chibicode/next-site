import { useState } from 'react';
import cn from 'classnames';
import styles from './form.module.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  return (
    <form className={styles.form}>
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
        <input type="submit" className={styles.submit} value="Register" />
      </div>
    </form>
  );
}
