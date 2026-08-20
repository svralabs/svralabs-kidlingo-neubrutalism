import React, { useState } from 'react';
import styles from '../pages/JastipCatalog.module.css';

const FilterBar = ({ categories, onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className={styles.chipsContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.chip} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
