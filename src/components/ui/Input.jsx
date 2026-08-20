import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, value, onChange, disabled = false, icon }) => {
  const inputClasses = [
    styles.input,
    disabled ? styles.disabled : '',
  ].join(' ');

  return (
    <div className={styles.inputContainer}>
      {icon && <span className={`${styles.icon} material-symbols-outlined`}>{icon}</span>}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
