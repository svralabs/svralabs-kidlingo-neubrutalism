import React from 'react';
import styles from '../pages/JastipHome.module.css';

export default function Header() {
  return (
    <header className={`${styles['fixed']} ${styles['top-0']} ${styles['left-0']} ${styles['w-full']} ${styles['z-50']} ${styles['px-margin']} ${styles['h-16']} ${styles['flex']} ${styles['items-center']} ${styles['justify-between']} ${styles['bg-primary']} ${styles['border-b-2']} ${styles['border-black']} ${styles['shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]']}`}>
      <div className={`${styles['flex']} ${styles['items-center']} ${styles['gap-3']}`}>
        <div className={`${styles['w-10']} ${styles['h-10']} ${styles['rounded-full']} ${styles['border-2']} ${styles['border-black']} ${styles['overflow-hidden']} ${styles['bg-white']}`}>
          <img
            className={`${styles['w-full']} ${styles['h-full']} ${styles['object-cover']}`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7uJFPBKyoKzedtWA20XxJJKzujnXJ7ephT6fs2yOuW6ItDIVk5vNtRPOSxe1Q82_vaKXTyDtDdHn8HMNGvT05B13wFz2VI5gJQ39d0yHGauPG0eHReBPw8OsrWc0UaBRLHoZdMsYGDJ_7ShVgv7Sx-lnr72reiktIi_4zt0Pm7xs7hkmEtGDcpfk60HKU5GnkghuPEfCSNu44hY8akO-oZA8RhqMjsIgsLwrKPAnfPNdb7yagxz5J"
            alt="A portrait of a cheerful Indonesian traveler in her late 20s, smiling warmly at the camera. She is wearing a modern mustard-yellow hijab and a stylish denim jacket. The background is a clean, bright minimalist studio with soft high-key lighting, maintaining a premium light-mode UI aesthetic that matches the vibrant yellow and black neubrutalist theme."
          />
        </div>
        <h1 className={`${styles['font-headline-main-mobile']} ${styles['text-24']} ${styles['text-on-primary']}`}>Halo, Jastiper!</h1>
      </div>
      <button className={`${styles['relative']} ${styles['w-10']} ${styles['h-10']} ${styles['flex']} ${styles['items-center']} ${styles['justify-center']} ${styles['bg-white']} ${styles['border-2']} ${styles['border-black']} ${styles['rounded-full']} ${styles['active:translate-x-[2px]']} ${styles['active:translate-y-[2px]']} ${styles['active:shadow-none']} ${styles['transition-all']}`}>
        <span className={`${styles['material-symbols-outlined']} ${styles['text-black']}`}>notifications</span>
        <span className={`${styles['absolute']} ${styles['top-0']} ${styles['right-0']} ${styles['w-3']} ${styles['h-3']} ${styles['bg-accent-orange']} ${styles['border-2']} ${styles['border-black']} ${styles['rounded-full']}`}></span>
      </button>
    </header>
  );
}
