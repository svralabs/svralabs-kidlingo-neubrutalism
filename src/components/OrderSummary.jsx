import React from 'react';
import styles from '../pages/JastipOrderForm.module.css';

export default function OrderSummary() {
  return (
    <section className={styles.summarySection}>
      <h4 className={styles.summaryTitle}>Rincian Pesanan</h4>
      <div className={styles.summaryDetails}>
        <div className={styles.summaryItem}>
          <span>Subtotal Produk</span>
          <span className={styles.summaryValue}>Rp245.000</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Fee Jastip (10%)</span>
          <span className={styles.summaryValue}>Rp24.500</span>
        </div>
      </div>
      <div className={styles.summaryNote}>
        <span className={styles.infoIcon}>info</span>
        <p className={styles.noteText}>
          Ongkir & packing akan ditambahkan di invoice final oleh admin setelah barang siap dikirim.
        </p>
      </div>
    </section>
  );
}
