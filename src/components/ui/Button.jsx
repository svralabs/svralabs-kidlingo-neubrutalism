import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'medium', icon, iconPosition = 'leading', disabled = false, onClick }) => {
  const buttonClasses = [
    styles.neubrutalistBtn,
    styles[`bg-${variant}`],
    styles[`text-${variant}`],
    styles[`size-${size}`],
    icon ? styles.hasIcon : '',
    disabled ? styles.disabled : '',
  ].join(' ');

  const iconClasses = [
    'material-symbols-outlined',
    iconPosition === 'leading' ? styles.leadingIcon : styles.trailingIcon,
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition === 'leading' && <span className={iconClasses}>{icon}</span>}
      {children}
      {icon && iconPosition === 'trailing' && <span className={iconClasses}>{icon}</span>}
    </button>
  );
};

export default Button;
