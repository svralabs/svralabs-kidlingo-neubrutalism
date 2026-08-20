import { Link } from 'react-router-dom';

const bentoItems = [
  {
    id: 1,
    title: 'Dashboard',
    description: 'Return to your primary mission control and overview.',
    icon: 'dashboard',
    link: '/dashboard',
    size: 'large',
    color: 'bg-primary-container',
    accentIcon: 'rocket'
  },
  {
    id: 2,
    title: 'Settings',
    description: 'Configure your station',
    icon: 'settings',
    link: '/settings',
    size: 'small',
    color: 'bg-secondary-container'
  },
  {
    id: 3,
    title: 'API Docs',
    description: '',
    icon: 'terminal',
    link: '/api-docs',
    size: 'vertical',
    color: 'bg-accent-pink'
  },
  {
    id: 4,
    title: 'My Profile',
    description: '',
    icon: 'account_circle',
    link: '/profile',
    size: 'small',
    color: 'bg-accent-purple text-white'
  },
  {
    id: 5,
    title: 'Community',
    description: 'Join test of other designers in the void.',
    icon: 'groups',
    link: '/community',
    size: 'wide',
    color: 'bg-surface',
    members: [
      { id: 1, color: 'bg-primary' },
      { id: 2, color: 'bg-accent-pink' },
      { id: 3, color: 'bg-secondary-container' }
    ]
  },
  {
    id: 6,
    title: 'Help Center',
    description: 'Need assistance? Our support team is ready to help.',
    icon: 'help',
    link: '/help',
    size: 'tall',
    color: 'bg-accent-orange text-white'
  }
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-md">
          <span className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">Thirtyspace</span>
          <div className="hidden md:flex gap-md ml-xl">
            <Link to="#" className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Components</Link>
            <Link to="#" className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Layout</Link>
            <Link to="#" className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Tokens</Link>
            <Link to="#" className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Guides</Link>
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

        <section className="mt-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-md md:h-[700px]">
            {bentoItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`md:col-span-${item.size === 'large' ? '8 md:row-span-3' : item.size === 'small' ? '4 md:row-span-2' : item.size === 'vertical' ? '3 md:row-span-3' : item.size === 'wide' ? '5 md:row-span-2' : '4 md:row-span-3'} group ${item.color} border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col ${item.size === 'small' ? 'justify-center items-center text-center' : 'justify-between'} relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-md">{item.icon}</span>
                  <h4 className={`font-heading-card ${item.size === 'large' ? 'text-2xl md:text-4xl' : 'text-heading-card'} mb-xs`}>{item.title}</h4>
                  {item.description && <p className="font-body-md max-w-xs">{item.description}</p>}
                </div>
                {item.accentIcon && (
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[160px]">{item.accentIcon}</span>
                  </div>
                )}
                {item.members && (
                  <div className="mt-auto flex -space-x-2">
                    {item.members.map((member) => (
                      <div key={member.id} className={`w-8 h-8 rounded-full border-2 border-black ${member.color}`}></div>
                    ))}
                    <div className="flex items-center pl-4 font-label-bold text-xs">+12k joined</div>
                  </div>
                )}
                <div className="mt-auto relative z-10">
                  <span className="font-label-bold group-hover:underline">Enter Command Center →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
