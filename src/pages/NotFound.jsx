import React from 'react';
import NavigationBento from '../components/NavigationBento';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-md">
          <span className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">Thirtyspace</span>
          <div className="hidden md:flex gap-md ml-xl">
            <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Components</a>
            <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Layout</a>
            <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Tokens</a>
            <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Guides</a>
          </div>
        </div>
        <button className="bg-primary-container text-on-primary-container px-lg py-sm rounded-full border-2 border-black font-label-bold neubrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
          Get Started
        </button>
      </nav>

      <main className="flex-grow pt-24 pb-xl px-margin max-w-7xl mx-auto w-full">
        <section className="flex flex-col items-center text-center mb-md">
          <div className="relative inline-block mb-sm">
            <h1 className="font-headline-main text-[80px] md:text-[120px] leading-none text-accent-orange font-black drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] select-none">
              404
            </h1>
            <div className="absolute -top-2 -right-6 bg-accent-pink border-2 border-black px-md py-xs neubrutal-shadow font-label-bold -rotate-12 text-xs md:text-sm">
              LOST IN SPACE
            </div>
          </div>
          <h2 className="font-headline-main text-2xl md:text-4xl max-w-2xl mb-xs uppercase tracking-tight">
            Destination Not Found
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl">
            We've recalculated your trajectory. Choose a new destination from the flight deck below.
          </p>
        </section>

        <NavigationBento />
      </main>
    </div>
  );
};

export default NotFound;
