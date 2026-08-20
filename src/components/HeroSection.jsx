import React from 'react';
import styles from '../pages/Home.module.css';

export default function HeroSection() {
  return (
    <main className={styles.heroMain}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          SATU TEMPAT, <br/>
          <span className={styles.heroHighlight}>SEMUA ADA!</span>
        </h1>
        <p className={styles.heroDescription}>
          Tinggalkan tab browser yang menumpuk. Pindah ke Thirtyspace. Ruang kerja kolaboratif paling berisik tapi paling rapi.
        </p>
      </div>
    </main>
  );
}
