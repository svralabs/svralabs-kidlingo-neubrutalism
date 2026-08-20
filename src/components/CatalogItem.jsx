import React from 'react';
import styles from '../pages/JastipCatalog.module.css';

const CatalogItem = ({ item }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        {item.image ? (
          <img
            className={styles.productImage}
            src={item.image}
            alt={item.title}
          />
        ) : (
          <div className={styles.errorPlaceholder}>
            <div className={styles.errorPattern}></div>
            <span className={`material-symbols-outlined ${styles.errorIcon}`} data-icon="image_not_supported">image_not_supported</span>
            <p className={styles.errorText}>Product Image Missing</p>
          </div>
        )}
        <div className={styles.productBadge}>{item.category}</div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{item.title}</h3>
        <p className={styles.productPrice}>{item.price}</p>
        <div className="mt-auto">
          <span className={styles.productFee}>{item.fee}</span>
          <button className={styles.productButton}>
            <span className="material-symbols-outlined" data-icon="add">add</span>
            Titip
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
