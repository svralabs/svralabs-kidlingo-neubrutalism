import React from 'react';
import styles from './Loader.module.css';

const Loader = ({ size = 'medium', color = 'primary' }) => {
  const loaderClasses = [
    styles.loader,
    styles[`size-${size}`],
    styles[`color-${color}`],
  ].join(' ');

  return (
    <div className={loaderClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
