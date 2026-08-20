import { Link } from 'react-router-dom';

export default function ThirtySpace404() {
  const navLinks = [
    { name: 'Components', path: '/components' },
    { name: 'Layout', path: '/layout' },
    { name: 'Tokens', path: '/tokens' },
    { name: 'Guides', path: '/guides' },
  ];

  const bentoItems = [
    {
      title: 'Dashboard',
      description: 'Return to your primary mission control and overview.',
      icon: 'dashboard',
      path: '/dashboard',
      className: 'md:col-span-8 md:row-span-3 bg-primary-container',
      size: 'large',
    },
    {
      title: 'Settings',
      description: 'Configure your station',
      icon: 'settings',
      path: '/settings',
      className: 'md:col-span-4 md:row-span-2 bg-secondary-container',
      size: 'small',
    },
    {
      title: 'API Docs',
      description: '',
      icon: 'terminal',
      path: '/api-docs',
      className: 'md:col-span-3 md:row-span-3 bg-accent-pink',
      size: 'medium',
    },
    {
      title: 'My Profile',
      description: '',
      icon: 'account_circle',
      path: '/profile',
      className: 'md:col-span-4 md:row-span-1 bg-accent-purple text-white',
      size: 'small',
    },
    {
      title: 'Community',
      description: 'Join test of other designers in the void.',
      icon: 'groups',
      path: '/community',
      className: 'md:col-span-5 md:row-span-2 bg-surface',
      size: 'medium',
    },
    {
      title: 'Help Center',
      description: '',
      icon: 'help',
      path: '/help',
      className: 'md:col-span-4 md:row-span-3 bg-accent-orange text-white',
      size: 'large',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-md">
          <span className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">Thirtyspace</span>
          <div className="hidden md:flex gap-md ml-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <Link
          to="/get-started"
          className="bg-primary-container text-on-primary-container px-lg py-sm rounded-full border-2 border-black font-label-bold neubrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          Get Started
        </Link>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-xl px-margin max-w-7xl mx-auto w-full">
        {/* Concise Hero Section */}
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

        {/* High-Density Asymmetric Bento Grid */}
        <section className="mt-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-md md:h-[700px]">
            {bentoItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`group ${item.className} border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-md">{item.icon}</span>
                  <h4 className={`font-heading-card ${item.size === 'large' ? 'text-2xl md:text-4xl' : 'text-heading-card'} mb-xs`}>
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className={`font-body-md ${item.size === 'large' ? 'max-w-xs' : 'text-sm'}`}>
                      {item.description}
                    </p>
                  )}
                </div>
                {item.title === 'Dashboard' && (
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[160px]">rocket</span>
                  </div>
                )}
                {item.title === 'Community' && (
                  <div className="mt-auto flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-black bg-primary"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-black bg-accent-pink"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-black bg-secondary-container"></div>
                    <div className="flex items-center pl-4 font-label-bold text-xs">+12k joined</div>
                  </div>
                )}
                {item.size === 'large' && (
                  <div className="mt-auto relative z-10">
                    <span className="font-label-bold group-hover:underline">Enter Command Center →</span>
                  </div>
                )}
                {item.size === 'medium' && (
                  <span className="font-label-bold group-hover:underline mt-md">Read Docs →</span>
                )}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
