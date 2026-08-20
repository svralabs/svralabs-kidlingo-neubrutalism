import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import ThirtySpaceHero from './pages/ThirtySpaceHero';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';
import ThirtySpaceBadgeShowcase from './pages/ThirtySpaceBadgeShowcase';
import ThirtySpaceLoaderShowcase from './pages/ThirtySpaceLoaderShowcase';
import ThirtySpace404 from './pages/ThirtySpace404';
import ThirtySpaceTableShowcase from './pages/ThirtySpaceTableShowcase';
import JastipOrderForm from './pages/JastipOrderForm';
import JastipHome from './pages/JastipHome';
import ThirtySpaceAuth from './pages/ThirtySpaceAuth';
import ThirtySpaceSidebarShowcase from './pages/ThirtySpaceSidebarShowcase';

function ScreenBar() {
  const loc = useLocation();
  const navs = [
    { path: '/', label: 'ThirtySpaceHero' },
    { path: '/jastipcatalogjepangtrip1', label: 'JastipCatalogJepangTrip1' },
    { path: '/thirtyspacebadgeshowcase', label: 'ThirtySpaceBadgeShowcase' },
    { path: '/thirtyspaceloadershowcase', label: 'ThirtySpaceLoaderShowcase' },
    { path: '/thirtyspace404', label: 'ThirtySpace404' },
    { path: '/thirtyspacetableshowcase', label: 'ThirtySpaceTableShowcase' },
    { path: '/jastiporderform', label: 'JastipOrderForm' },
    { path: '/jastiphome', label: 'JastipHome' },
    { path: '/thirtyspaceauth', label: 'ThirtySpaceAuth' },
    { path: '/thirtyspacesidebarshowcase', label: 'ThirtySpaceSidebarShowcase' }
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
                  <Route path='/' element={<ThirtySpaceHero />} />
        <Route path='/jastipcatalogjepangtrip1' element={<JastipCatalogJepangTrip1 />} />
        <Route path='/thirtyspacebadgeshowcase' element={<ThirtySpaceBadgeShowcase />} />
        <Route path='/thirtyspaceloadershowcase' element={<ThirtySpaceLoaderShowcase />} />
        <Route path='/thirtyspace404' element={<ThirtySpace404 />} />
        <Route path='/thirtyspacetableshowcase' element={<ThirtySpaceTableShowcase />} />
        <Route path='/jastiporderform' element={<JastipOrderForm />} />
        <Route path='/jastiphome' element={<JastipHome />} />
        <Route path='/thirtyspaceauth' element={<ThirtySpaceAuth />} />
        <Route path='/thirtyspacesidebarshowcase' element={<ThirtySpaceSidebarShowcase />} />
                  <Route path="*" element={<ThirtySpaceHero />} />
                </Routes>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
