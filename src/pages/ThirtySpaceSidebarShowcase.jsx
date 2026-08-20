import React from 'react';
import Sidebar from '../components/Sidebar';

const ThirtySpaceSidebarShowcase = () => {
  const sidebarItems = [
    { name: 'Components', href: '#' },
    { name: 'Layout', href: '#' },
    { name: 'Tokens', href: '#' },
    { name: 'Guides', href: '#' },
  ];

  return (
    <div className="flex">
      <Sidebar items={sidebarItems} activeItem="Components" />
      <main className="flex-grow pt-32 pb-xl px-margin max-w-7xl mx-auto w-full ml-64">
        <section className="mb-xl">
          <div className="inline-block bg-black p-md md:p-lg mb-md">
            <h1 className="font-headline-main text-headline-main-mobile md:text-headline-main text-white uppercase leading-none">
              SIDEBAR VARIANTS
            </h1>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-2xl text-lg">
            High-contrast, brutalist sidebar components designed for maximum legibility and structural impact. Built for navigation-heavy interfaces that refuse to be boring.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ThirtySpaceSidebarShowcase;
