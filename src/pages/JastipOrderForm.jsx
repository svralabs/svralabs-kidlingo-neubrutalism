import React from 'react';
import OrderFormField from '../components/OrderFormField';
import OrderSummary from '../components/OrderSummary';
import styles from './JastipOrderForm.module.css';

export default function JastipOrderForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.formContainer}>
      <header className="fixed top-0 w-full z-50 bg-primary border-b-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center px-margin h-16 w-full text-on-primary">
        <button className="mr-4 active:translate-x-[2px] active:translate-y-[2px] transition-all">
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </button>
        <h1 className="font-headline-main-mobile text-[24px] font-extrabold uppercase tracking-tight">New Order</h1>
      </header>

      <main>
        <section className={styles.productCard}>
          <div className={styles.productImage}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8r_2NJHnVJVk2LuUO5Q35KNiqOJ07xZiM3JOPab8lF7HrmnLAM1Q4UceufyRIt7g0Y_z3clsv7jpFBdmtql64mlNKyXVyqc5HRa5ZGVIDsrmy3FAcVgtpHnYHmJ_1RTRf0qRi5FhVTIT_w08454Nf_gPuQ3YeJWBR3LmnwcHhI-yrPwvSGYP3SZ5vHSEeSYWQra5XPAtt7Nz59QlpdLNCgr2dipNfmoOTHT07DL6LLXtMBw90MXOF"
              alt="Hada Labo Lotion"
            />
          </div>
          <div className={styles.productInfo}>
            <div>
              <h2 className={styles.productTitle}>Hada Labo Lotion</h2>
              <p className={styles.productPrice}>Rp245.000</p>
              <span className={styles.productFee}>Fee 10%</span>
            </div>
            <div className={styles.quantityContainer}>
              <button className={`${styles.quantityButton} active`}>
                <span className="material-symbols-outlined text-sm font-bold">remove</span>
              </button>
              <span className={styles.quantityValue}>1</span>
              <button className={`${styles.quantityButton} bg-primary-container`}>
                <span className="material-symbols-outlined text-sm font-bold">add</span>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Data Penerima</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <OrderFormField
                label="Nama Penerima"
                id="nama"
                type="text"
                placeholder="Masukkan nama lengkap"
              />
              <OrderFormField
                label="No. Telepon Penerima"
                id="telepon"
                type="tel"
                placeholder="0812xxxxxx"
              />
              <OrderFormField
                label="Alamat Lengkap"
                id="alamat"
                type="textarea"
                placeholder="Jl. Anggrek No. 12, Jakarta Selatan..."
                rows={4}
              />
            </div>
          </form>
        </section>

        <OrderSummary />
      </main>

      <footer className={styles.stickyFooter}>
        <div className={styles.totalContainer}>
          <span className={styles.totalLabel}>Total Estimasi</span>
          <span className={styles.totalValue}>Rp269.500</span>
        </div>
        <button className={styles.submitButton}>
          Kirim Order
          <span className="material-symbols-outlined">send</span>
        </button>
      </footer>
    </div>
  );
}
