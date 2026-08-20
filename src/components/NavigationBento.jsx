import React from 'react';
import styles from '../pages/NotFound.module.css';

const NavigationBento = () => {
  const navigationItems = [
    {
      id: 1,
      title: 'Dashboard',
      description: 'Return to your primary mission control and overview.',
      icon: 'dashboard',
      link: '/dashboard',
      size: 'large',
      color: 'primary-container',
    },
    {
      id: 2,
      title: 'Settings',
      description: 'Configure your station',
      icon: 'settings',
      link: '/settings',
      size: 'small',
      color: 'secondary-container',
    },
    {
      id: 3,
      title: 'API Docs',
      description: '',
      icon: 'terminal',
      link: '/api-docs',
      size: 'vertical',
      color: 'accent-pink',
    },
    {
      id: 4,
      title: 'My Profile',
      description: '',
      icon: 'account_circle',
      link: '/profile',
      size: 'small-square',
      color: 'accent-purple',
    },
    {
      id: 5,
      title: 'Community',
      description: 'Join test of other designers in the void.',
      icon: 'groups',
      link: '/community',
      size: 'wide',
      color: 'surface',
    },
    {
      id: 6,
      title: 'Help Center',
      description: '',
      icon: 'help',
      link: '/help',
      size: 'tall',
      color: 'accent-orange',
    },
  ];

  return (
    <div className={styles.bentoGrid}>
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={`${styles.bentoItem} ${styles[item.size]} ${styles[item.color]}`}
        >
          <div className={styles.bentoContent}>
            <span className="material-symbols-outlined text-4xl mb-md">{item.icon}</span>
            <h4 className="font-heading-card text-heading-card mb-xs">{item.title}</h4>
            {item.description && <p className="font-body-md text-sm">{item.description}</p>}
            {item.size === 'large' && (
              <div className={styles.rocketIcon}>
                <span className="material-symbols-outlined text-[160px]">rocket</span>
              </div>
            )}
            {item.size === 'community' && (
              <div className="mt-auto flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-black bg-primary"></div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-accent-pink"></div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-secondary-container"></div>
                <div className="flex items-center pl-4 font-label-bold text-xs">+12k joined</div>
              </div>
            )}
            <span className="font-label-bold group-hover:underline mt-md">Enter →</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NavigationBento;
