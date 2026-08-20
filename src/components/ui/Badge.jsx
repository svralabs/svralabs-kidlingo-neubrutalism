import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ children, variant = 'primary', size = 'medium', icon }) => {
  const badgeClasses = [
    styles.badge,
    styles[`bg-${variant}`],
    styles[`text-${variant}`],
    styles[`size-${size}`],
  ].join(' ');

  return (
    <span className={badgeClasses}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
