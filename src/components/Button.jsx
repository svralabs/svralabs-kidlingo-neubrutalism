import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'leading',
  className = '',
  ...props
}) {
  const baseClasses = 'neubrutalist-btn rounded-full text-label-bold transition-all';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    danger: 'bg-error-container text-on-error-container',
  };
  const sizeClasses = {
    small: 'px-md py-xs text-xs font-bold',
    medium: 'px-lg py-sm',
    large: 'px-xl py-md text-xl font-extrabold',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {icon && iconPosition === 'leading' && (
        <span className="material-symbols-outlined mr-xs">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'trailing' && (
        <span className="material-symbols-outlined ml-xs">{icon}</span>
      )}
    </button>
  );
}
