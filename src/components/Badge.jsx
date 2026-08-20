import React from 'react';

export default function Badge({
  children,
  variant = 'status',
  status = 'active',
  count,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full text-xs font-bold';
  const variantClasses = {
    status: {
      active: 'bg-success-container text-on-success-container',
      inactive: 'bg-error-container text-on-error-container',
      warning: 'bg-warning-container text-on-warning-container',
    },
    count: 'bg-primary-container text-on-primary-container',
  };

  const badgeClasses = `${baseClasses} ${
    variant === 'status' ? variantClasses.status[status] : variantClasses.count
  } ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {variant === 'status' ? children : count}
    </span>
  );
}
