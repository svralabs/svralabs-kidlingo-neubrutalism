import React from 'react';
import styles from '../pages/AuthPage.module.css';

export default function SocialLoginButton({ icon, text, onClick }) {
  return (
    <button className={styles['social-login-button']} onClick={onClick}>
      <span className="material-symbols-outlined mr-2">{icon}</span>
      <span className="font-label-bold text-label-bold">{text}</span>
    </button>
  );
}
