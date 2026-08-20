import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ items, activeItem, onItemClick }) => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <button
                className={`${styles.button} ${activeItem === item.id ? styles.active : ''}`}
                onClick={() => onItemClick(item.id)}
              >
                {item.icon && <span className="material-symbols-outlined">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
