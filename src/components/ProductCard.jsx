import React from 'react';
import styles from '../pages/JastipHome.module.css';

export default function ProductCard({ title, date, imageUrl, isLive, bgColor }) {
  return (
    <div className={`${styles['neubrutalist-card']} ${styles['bg-white']} ${styles['min-w-280']} ${styles['rounded-xl']} ${styles['overflow-hidden']} ${styles['flex-shrink-0']}`}>
      <div className={`${styles['h-32']} ${styles[bgColor]} ${styles['relative']} ${styles['overflow-hidden']}`}>
        <img
          className={`${styles['w-full']} ${styles['h-full']} ${styles['object-cover']}`}
          src={imageUrl}
          alt={`Event image for ${title}`}
        />
        {isLive && (
          <div className={`${styles['absolute']} ${styles['top-2']} ${styles['right-2']} ${styles['bg-white']} ${styles['border-2']} ${styles['border-black']} ${styles['px-2']} ${styles['py-1']} ${styles['rounded-full']} ${styles['text-10']} ${styles['font-bold']}`}>LIVE</div>
        )}
      </div>
      <div className={`${styles['p-4']}`}>
        <h3 className={`${styles['font-heading-card']} ${styles['text-18']} ${styles['mb-1']}`}>{title}</h3>
        <p className={`${styles['text-sm']} ${styles['opacity-70']} ${styles['mb-4']} ${styles['flex']} ${styles['items-center']} ${styles['gap-1']}`}>
          <span className={`${styles['material-symbols-outlined']} ${styles['text-16']}`}>calendar_today</span>
          {date}
        </p>
        <button className={`${styles['neubrutalist-btn']} ${styles['bg-primary-container']} ${styles['w-full']} ${styles['py-2']} ${styles['rounded-full']} ${styles['font-label-bold']} ${styles['text-on-primary-container']}`}>
          Lihat Katalog
        </button>
      </div>
    </div>
  );
}
