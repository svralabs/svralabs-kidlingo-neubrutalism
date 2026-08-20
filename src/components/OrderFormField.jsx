import React from 'react';
import styles from '../pages/JastipOrderForm.module.css';

export default function OrderFormField({ label, id, type = 'text', placeholder, rows }) {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <InputComponent
        id={id}
        type={type}
        placeholder={placeholder}
        rows={rows}
        className={styles.input}
        required
      />
    </div>
  );
}
