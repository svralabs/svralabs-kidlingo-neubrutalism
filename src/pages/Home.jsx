import React from 'react';
import HeroSection from '../components/HeroSection';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
    </div>
  );
}
