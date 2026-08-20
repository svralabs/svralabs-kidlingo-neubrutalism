import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JastipOrderFormMobile from './pages/JastipOrderFormMobile';
import ThirtyspaceTableShowcase from './pages/ThirtyspaceTableShowcase';
import JastipHomeScreenMobile from './pages/JastipHomeScreenMobile';
import ThirtyspaceHeroSection from './pages/ThirtyspaceHeroSection';
import ThirtyspaceSidebarShowcase from './pages/ThirtyspaceSidebarShowcase';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';
import ThirtyspaceLoaderShowcase from './pages/ThirtyspaceLoaderShowcase';
import ThirtyspaceLoginRegisterMobile from './pages/ThirtyspaceLoginRegisterMobile';
import ThirtyspaceBadgeShowcase from './pages/ThirtyspaceBadgeShowcase';
import Thirtyspace404NavigationBentoVariant from './pages/Thirtyspace404NavigationBentoVariant';
import JastipCatalogJepangTrip2 from './pages/JastipCatalogJepangTrip2';
import ThirtyspaceButtonShowcase from './pages/ThirtyspaceButtonShowcase';
import ThirtyspaceComponentShowcaseInputs from './pages/ThirtyspaceComponentShowcaseInputs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">kidlingo-neubrutalism</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Order Form Mobile</Link>
            <Link to="/thirtyspace-table-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Table Showcase</Link>
            <Link to="/jastip-home-screen-mobile" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Home Screen Mobile</Link>
            <Link to="/thirtyspace-hero-section" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Hero Section</Link>
            <Link to="/thirtyspace-sidebar-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Sidebar Showcase</Link>
            <Link to="/jastip-catalog-jepang-trip-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Catalog Jepang Trip 1</Link>
            <Link to="/thirtyspace-loader-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Loader Showcase</Link>
            <Link to="/thirtyspace-login-register-mobile" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Login Register Mobile</Link>
            <Link to="/thirtyspace-badge-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Badge Showcase</Link>
            <Link to="/thirtyspace-404-navigation-bento-variant" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace 404 Navigation Bento Variant</Link>
            <Link to="/jastip-catalog-jepang-trip-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Catalog Jepang Trip 2</Link>
            <Link to="/thirtyspace-button-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Button Showcase</Link>
            <Link to="/thirtyspace-component-showcase-inputs" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Thirtyspace Component Showcase Inputs</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<JastipOrderFormMobile />} />
          <Route path="/thirtyspace-table-showcase" element={<ThirtyspaceTableShowcase />} />
          <Route path="/jastip-home-screen-mobile" element={<JastipHomeScreenMobile />} />
          <Route path="/thirtyspace-hero-section" element={<ThirtyspaceHeroSection />} />
          <Route path="/thirtyspace-sidebar-showcase" element={<ThirtyspaceSidebarShowcase />} />
          <Route path="/jastip-catalog-jepang-trip-1" element={<JastipCatalogJepangTrip1 />} />
          <Route path="/thirtyspace-loader-showcase" element={<ThirtyspaceLoaderShowcase />} />
          <Route path="/thirtyspace-login-register-mobile" element={<ThirtyspaceLoginRegisterMobile />} />
          <Route path="/thirtyspace-badge-showcase" element={<ThirtyspaceBadgeShowcase />} />
          <Route path="/thirtyspace-404-navigation-bento-variant" element={<Thirtyspace404NavigationBentoVariant />} />
          <Route path="/jastip-catalog-jepang-trip-2" element={<JastipCatalogJepangTrip2 />} />
          <Route path="/thirtyspace-button-showcase" element={<ThirtyspaceButtonShowcase />} />
          <Route path="/thirtyspace-component-showcase-inputs" element={<ThirtyspaceComponentShowcaseInputs />} />
          <Route path="*" element={<JastipOrderFormMobile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
