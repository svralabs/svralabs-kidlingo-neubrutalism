import React from 'react';

const Badge = ({ text, color = 'purple', size = 'md' }) => {
  const colorClasses = {
    purple: 'bg-accent-purple',
    orange: 'bg-accent-orange',
    pink: 'bg-accent-pink',
    green: 'bg-green-500',
    gray: 'bg-gray-400',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`inline-flex items-center ${colorClasses[color]} ${sizeClasses[size]} text-white border-2 border-black rounded-full font-label-bold`}>
      {text}
    </span>
  );
};

export default Badge;
