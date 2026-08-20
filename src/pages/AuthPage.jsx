import React, { useState } from 'react';
import styles from './AuthPage.module.css';
import AuthForm from '../components/AuthForm';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-surface">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-primary dark:bg-primary z-50 border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between px-margin py-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <h1 className="font-headline-main-mobile text-headline-main-mobile text-on-primary uppercase tracking-tighter" style={{ fontSize: '24px' }}>TITIPIN</h1>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-on-primary">menu</span>
        </div>
      </header>
      <main className="px-margin py-xl flex flex-col items-center">
        {/* Brand Intro Area */}
        <div className="w-full max-w-md mb-lg">
          <h2 className="font-headline-main-mobile text-headline-main-mobile text-on-background mb-xs">Halo!</h2>
          <p className="text-on-surface-variant font-body-md">Titip belanja dari mana saja jadi makin mudah dan aman.</p>
        </div>
        {/* Auth Container */}
        <div className="w-full max-w-md neubrutal-card bg-surface p-md rounded-xl">
          {/* Tabs */}
          <div className="flex border-2 border-black rounded-lg mb-lg overflow-hidden">
            <button
              className={`flex-1 py-sm font-label-bold text-label-bold ${activeTab === 'login' ? 'tab-active' : 'hover:bg-surface-container'} transition-all duration-200`}
              onClick={() => setActiveTab('login')}
            >
              Masuk
            </button>
            <button
              className={`flex-1 py-sm font-label-bold text-label-bold ${activeTab === 'register' ? 'tab-active' : 'hover:bg-surface-container'} transition-all duration-200`}
              onClick={() => setActiveTab('register')}
            >
              Daftar
            </button>
          </div>
          {/* Forms */}
          <AuthForm type={activeTab} />
        </div>
        {/* Visual Asset */}
        <div className="mt-xl w-full max-w-md overflow-hidden rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <img
            className="w-full h-48 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdqRmzikApM6UBVfmlzTFtngXWZiqGVxUR1pXozs4GgRKy0KgroyIxxRnOgOltY888ImuExPQvpdJ8nDHczT9penhlAgshZjoN-BdFAe0V8icjF5eqGKNsEUyO9IMtOH5R460cwCSU3pJwAqoyWNQK1zIM3_t0EayLO_Yl81I4rzZ6EtXWksJfxXjWiYyxrEHOFigMxuHHfrwPKrpoVnJwg12aYhnRPnIBROqK4zHnD6euPntL3K53"
            alt="A vibrant neubrutalist illustration of a young person holding multiple shopping bags and a smartphone."
          />
        </div>
      </main>
      {/* Bottom Spacing for mobile */}
      <div className="h-xl"></div>
    </div>
  );
}
