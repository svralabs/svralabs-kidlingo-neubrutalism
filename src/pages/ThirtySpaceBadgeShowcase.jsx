import React from 'react';
import Badge from '../components/Badge';

const ThirtySpaceBadgeShowcase = () => {
  return (
    <div className="flex-grow pt-32 pb-xl px-margin max-w-7xl mx-auto w-full">
      <section className="mb-xl">
        <div className="inline-block bg-black p-md md:p-lg mb-md">
          <h1 className="font-headline-main text-headline-main-mobile md:text-headline-main text-white uppercase leading-none">
            BADGE VARIANTS
          </h1>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-2xl text-lg">
          High-contrast, brutalist badge components designed for maximum legibility and structural impact. Built for status indicators that refuse to be boring.
        </p>
      </section>
      <section className="mb-xl">
        <div className="flex items-center gap-sm mb-lg">
          <span className="w-8 h-8 bg-accent-purple border-2 border-black rounded-full flex items-center justify-center brutalist-shadow">
            <span className="material-symbols-outlined text-white text-sm">label</span>
          </span>
          <h2 className="font-heading-card text-heading-card text-on-surface">Standard Badges</h2>
        </div>
        <div className="flex gap-lg">
          <Badge text="Lead Architect" color="purple" size="sm" />
          <Badge text="UI Designer" color="orange" size="md" />
          <Badge text="Developer" color="pink" size="lg" />
        </div>
      </section>
    </div>
  );
};

export default ThirtySpaceBadgeShowcase;
