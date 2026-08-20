import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function LoginRegister() {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <main className="px-margin py-xl flex flex-col items-center">
      <div className="w-full max-w-md mb-lg">
        <h2 className="font-headline-main-mobile text-headline-main-mobile text-on-background mb-xs">Halo!</h2>
        <p className="text-on-surface-variant font-body-md">Titip belanja dari mana saja jadi makin mudah dan aman.</p>
      </div>

      <div className="w-full max-w-md neubrutal-card bg-surface p-md rounded-xl">
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

        <AuthForm
          type={activeTab}
          onSubmit={handleSubmit}
        />
      </div>

      <div className="mt-xl w-full max-w-md overflow-hidden rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <img
          className="w-full h-48 object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdqRmzikApM6UBVfmlzTFtngXWZiqGVxUR1pXozs4GgRKy0KgroyIxxRnOgOltY888ImuExPQvpdJ8nDHczT9penhlAgshZjoN-BdFAe0V8icjF5eqGKNsEUyO9IMtOH5R460cwCSU3pJwAqoyWNQK1zIM3_t0EayLO_Yl81I4rzZ6EtXWksJfxXjWiYyxrEHOFigMxuHHfrwPKrpoVnJwg12aYhnRPnIBROqK4zHnD6euPntL3K53"
          alt="A vibrant neubrutalist illustration of a young person holding multiple shopping bags and a smartphone."
        />
      </div>
    </main>
  );
}
