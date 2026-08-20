import React from 'react';

const Loader = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]}`}>
      <div className="relative w-full h-full animate-spin">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-black border-t-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
