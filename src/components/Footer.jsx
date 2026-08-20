import React from 'react';
import styles from '../pages/JastipHome.module.css';

export default function Footer() {
  return (
    <footer className={`${styles['fixed']} ${styles['bottom-0']} ${styles['left-0']} ${styles['w-full']} ${styles['z-50']} ${styles['px-margin']} ${styles['h-16']} ${styles['flex']} ${styles['items-center']} ${styles['justify-between']} ${styles['bg-primary']} ${styles['border-t-2']} ${styles['border-black']} ${styles['shadow-[-4px_-4px_0px_0px_rgba(0,0,0,1)]']}`}>
      <button className={`${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['gap-1']}`}>
        <span className={`${styles['material-symbols-outlined']} ${styles['text-black']}`}>home</span>
        <span className={`${styles['text-10']} ${styles['font-bold']}`}>Beranda</span>
      </button>
      <button className={`${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['gap-1']}`}>
        <span className={`${styles['material-symbols-outlined']} ${styles['text-black']}`}>search</span>
        <span className={`${styles['text-10']} ${styles['font-bold']}`}>Cari</span>
      </button>
      <button className={`${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['gap-1']}`}>
        <span className={`${styles['material-symbols-outlined']} ${styles['text-black']}`}>shopping_cart</span>
        <span className={`${styles['text-10']} ${styles['font-bold']}`}>Keranjang</span>
      </button>
      <button className={`${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['gap-1']}`}>
        <span className={`${styles['material-symbols-outlined']} ${styles['text-black']}`}>person</span>
        <span className={`${styles['text-10']} ${styles['font-bold']}`}>Profil</span>
      </button>
    </footer>
  );
}
