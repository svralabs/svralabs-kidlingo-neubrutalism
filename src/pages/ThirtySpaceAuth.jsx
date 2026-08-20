import { useState } from 'react';

export default function ThirtySpaceAuth() {
  const [activeTab, setActiveTab] = useState('masuk');
  const [formData, setFormData] = useState({
    login: { email: '', password: '' },
    register: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    }
  });

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [formType]: {
        ...prev[formType],
        [name]: value
      }
    }));
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    console.log(`${formType} form data:`, formData[formType]);
  };

  return (
    <>
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
        <div className="w-full max-w-md mb-lg">
          <h2 className="font-headline-main-mobile text-headline-main-mobile text-on-background mb-xs">Halo!</h2>
          <p className="text-on-surface-variant font-body-md">Titip belanja dari mana saja jadi makin mudah dan aman.</p>
        </div>
        <div className="w-full max-w-md neubrutal-card bg-surface p-md rounded-xl">
          <div className="flex border-2 border-black rounded-lg mb-lg overflow-hidden">
            <button
              className={`flex-1 py-sm font-label-bold text-label-bold ${activeTab === 'masuk' ? 'tab-active' : 'hover:bg-surface-container'} transition-all duration-200`}
              onClick={() => setActiveTab('masuk')}
            >
              Masuk
            </button>
            <button
              className={`flex-1 py-sm font-label-bold text-label-bold ${activeTab === 'daftar' ? 'tab-active' : 'hover:bg-surface-container'} transition-all duration-200`}
              onClick={() => setActiveTab('daftar')}
            >
              Daftar
            </button>
          </div>

          {activeTab === 'masuk' && (
            <form className="space-y-md" onSubmit={(e) => handleSubmit(e, 'login')}>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Email</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-primary-container/10"
                  placeholder="nama@email.com"
                  type="email"
                  name="email"
                  value={formData.login.email}
                  onChange={(e) => handleInputChange(e, 'login')}
                  required
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Password</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-primary-container/10"
                  placeholder="••••••••"
                  type="password"
                  name="password"
                  value={formData.login.password}
                  onChange={(e) => handleInputChange(e, 'login')}
                  required
                />
                <div className="text-right">
                  <a className="text-secondary font-label-bold text-label-bold hover:underline" href="#">Lupa password?</a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-md bg-primary-container text-on-primary-fixed-variant font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md"
              >
                Masuk
              </button>
              <p className="text-center text-on-surface-variant font-body-md text-sm mt-md">
                Login menggunakan otentikasi email.
              </p>
            </form>
          )}

          {activeTab === 'daftar' && (
            <form className="space-y-md" onSubmit={(e) => handleSubmit(e, 'register')}>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Nama Lengkap</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="Budi Santoso"
                  type="text"
                  name="fullName"
                  value={formData.register.fullName}
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Email</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="budi@email.com"
                  type="email"
                  name="email"
                  value={formData.register.email}
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">No. Telepon</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="08123456789"
                  type="tel"
                  name="phone"
                  value={formData.register.phone}
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Alamat</label>
                <textarea
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="Jl. Mawar No. 123, Jakarta"
                  rows="3"
                  name="address"
                  value={formData.register.address}
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Password</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="Minimal 8 karakter"
                  type="password"
                  name="password"
                  value={formData.register.password}
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                  minLength="8"
                />
              </div>
              <button
                type="submit"
                className="w-full py-md bg-secondary-container text-on-secondary-container font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md"
              >
                Daftar
              </button>
            </form>
          )}
        </div>
        <div className="mt-xl w-full max-w-md overflow-hidden rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <img
            className="w-full h-48 object-cover"
            alt="A vibrant neubrutalist illustration of a young person holding multiple shopping bags and a smartphone. The background is a bold yellow and the style features heavy black outlines and flat high-contrast colors, matching a modern Indonesian tech app vibe. The lighting is flat and energetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdqRmzikApM6UBVfmlzTFtngXWZiqGVxUR1pXozs4GgRKy0KgroyIxxRnOgOltY888ImuExPQvpdJ8nDHczT9penhlAgshZjoN-BdFAe0V8icjF5eqGKNsEUyO9IMtOH5R460cwCSU3pJwAqoyWNQK1zIM3_t0EayLO_Yl81I4rzZ6EtXWksJfxXjWiYyxrEHOFigMxuHHfrwPKrpoVnJwg12aYhnRPnIBROqK4zHnD6euPntL3K53"
          />
        </div>
      </main>
      <div className="h-xl"></div>
    </>
  );
}
