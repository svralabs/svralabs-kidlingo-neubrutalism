import React from 'react';

export default function Loader({ size = 'medium', className = '', ...props }) {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-4',
    large: 'w-12 h-12 border-4',
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-solid border-current border-r-transparent ${sizeClasses[size]} ${className}`} {...props} />
  );
}
