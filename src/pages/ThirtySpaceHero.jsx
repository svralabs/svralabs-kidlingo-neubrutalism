import { Link } from 'react-router-dom';

export default function ThirtySpaceHero() {
  const features = [
    { icon: 'view_kanban', title: 'SPRINT BOARD', tag: 'NEW', bgColor: 'bg-primary-container' },
    { icon: 'video_call', title: 'VIDEO CALL', tag: 'HOT', bgColor: 'bg-cyan-neubrutalist' },
    { icon: 'edit_note', title: 'SHARED NOTES', tag: 'SYNC', bgColor: 'bg-accent-pink' },
    { icon: 'link', title: 'LINK HUB', tag: 'HUB', bgColor: 'bg-purple-neubrutalist' }
  ];

  const tickerItems = [
    { icon: 'code', text: 'DEV TEAM ALPHA' },
    { icon: 'mic', text: 'PODCAST ID' },
    { icon: 'rocket_launch', text: 'STARTUP X' }
  ];

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin py-sm bg-primary-container border-b-2 border-on-surface">
        <div className="flex items-center gap-sm">
          <span className="text-label-bold font-label-bold text-on-primary-container tracking-tighter text-xl">TS THIRTYSPACE</span>
        </div>
        <div className="hidden md:flex items-center gap-xl">
          <Link to="#" className="font-label-bold text-label-bold text-on-surface underline decoration-2 underline-offset-4">Features</Link>
          <Link to="#" className="font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-all">Team</Link>
          <Link to="#" className="font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-all">Case Studies</Link>
          <Link to="#" className="font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-all">Pricing</Link>
        </div>
        <Link to="/signup" className="bg-white neubrutal-border neubrutal-shadow px-6 py-2 rounded-full font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-95 duration-100 uppercase">
          MULAI GRATIS
        </Link>
      </nav>

      {/* Ticker Bar */}
      <div className="mt-[64px] bg-white border-b-2 border-on-surface overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center space-x-12 px-6">
              <span className="font-label-bold text-label-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">{item.icon}</span>
                {item.text}
              </span>
              {index < tickerItems.length * 2 - 1 && <span className="text-2xl font-bold">/</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-margin pt-20 pb-40">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="font-headline-main text-headline-main text-on-surface mb-6">
            SATU TEMPAT, <br/>
            <span className="bg-on-surface text-white px-6 inline-block neubrutal-shadow rotate-[-1deg]">SEMUA ADA!</span>
          </h1>
          <p className="font-body-md text-xl text-on-surface-variant max-w-xl">
            Tinggalkan tab browser yang menumpuk. Pindah ke Thirtyspace. Ruang kerja kolaboratif paling berisik tapi paling rapi.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bgColor} neubrutal-border neubrutal-shadow rounded-xl p-md flex flex-col justify-between h-48 hover-lift`}>
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                <span className="bg-white neubrutal-border px-2 py-0.5 rounded-full font-label-bold text-[10px]">{feature.tag}</span>
              </div>
              <h3 className="font-heading-card text-heading-card uppercase">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* Bento Preview Card */}
        <div className="bg-white neubrutal-border neubrutal-shadow rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
          <div className="lg:col-span-5 p-12 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-on-surface">
            <div className="mb-6">
              <span className="bg-primary-container neubrutal-border px-4 py-1 rounded-full font-label-bold text-label-bold uppercase">
                Real-time Collab
              </span>
            </div>
            <h2 className="font-headline-main text-[48px] leading-tight mb-8">
              BERASA KERJA SEMEJA.
            </h2>
            <div className="flex -space-x-3 items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white"></div>
              <span className="ml-4 font-label-bold text-label-bold">+1000 orang</span>
            </div>
          </div>
          <div className="lg:col-span-7 bg-gray-100 p-6 flex items-center justify-center">
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-gray-400">image</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
