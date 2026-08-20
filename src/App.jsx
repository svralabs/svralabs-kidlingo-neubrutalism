import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import JastipCatalogTrip1 from './pages/JastipCatalogTrip1';
import JastipCatalogTrip2 from './pages/JastipCatalogTrip2';
import NotFound from './pages/NotFound';
import JastipOrderForm from './pages/JastipOrderForm';
import JastipHome from './pages/JastipHome';
import LoginRegister from './pages/LoginRegister';
import ThirtyspaceHero from './pages/ThirtyspaceHero';

function ScreenBar() {
  const loc = useLocation();
  const navs = [
    { path: '/', label: 'JastipCatalogTrip1' },
    { path: '/jastipcatalogtrip2', label: 'JastipCatalogTrip2' },
    { path: '/notfound', label: 'NotFound' },
    { path: '/jastiporderform', label: 'JastipOrderForm' },
    { path: '/jastiphome', label: 'JastipHome' },
    { path: '/loginregister', label: 'LoginRegister' },
    { path: '/thirtyspacehero', label: 'ThirtyspaceHero' }
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 overflow-x-auto max-w-[95vw]">
      <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest px-2 hidden sm:inline">Screens:</span>
      {navs.map((n) => {
        const active = loc.pathname === n.path;
        return (
          <Link
            key={n.path}
            to={n.path}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
              active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <BrowserRouter>
              <ScreenBar />
              <div className="pt-10 min-h-screen">
                <Routes>
                  <Route path='/' element={<JastipCatalogTrip1 />} />
        <Route path='/jastipcatalogtrip2' element={<JastipCatalogTrip2 />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/jastiporderform' element={<JastipOrderForm />} />
        <Route path='/jastiphome' element={<JastipHome />} />
        <Route path='/loginregister' element={<LoginRegister />} />
        <Route path='/thirtyspacehero' element={<ThirtyspaceHero />} />
                  <Route path="*" element={<JastipCatalogTrip1 />} />
                </Routes>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
