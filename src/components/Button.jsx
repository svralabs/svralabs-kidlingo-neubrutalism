import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', onClick }) => {
  const variantClasses = {
    primary: 'bg-secondary-container text-on-secondary-container',
    secondary: 'bg-tertiary-container text-on-tertiary-container',
    outline: 'bg-white text-black border-2 border-black',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-lg py-sm text-sm',
    lg: 'px-xl py-md text-base',
  };

  return (
    <button
      className={`font-label-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
