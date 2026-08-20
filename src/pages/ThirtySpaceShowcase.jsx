import ShowcaseTab from '../components/ShowcaseTab';

const tableData = [
  {
    name: 'Alex Rivera',
    role: 'Lead Architect',
    status: 'Online',
    statusColor: 'bg-green-500',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNB2FTbQIfkaQC0xPxzZTUjvwiSxGICoxpDgKwXDrFKmX4iySDgEY51AurU41r7QyCKIHfggKBGN2CeFXgjtaSyA39JTcQNa_yR_evcRBQXFghbUWFpPm1RfVWaekOJmm_v3dgeJSNOQwUkelunnZlOWPr31s3vvg0uFp5Pzo16pi2Ue_PwHaBkfJ17IiwrTtFrw2Z4FEW3eNBWcF6-Uj9OufpGIZDIzV6Ibt3idZflKSX66cvQ4Qe',
    avatarBg: 'bg-accent-purple',
    roleColor: 'bg-accent-purple'
  },
  {
    name: 'Jordan Smith',
    role: 'UI Designer',
    status: 'Offline',
    statusColor: 'bg-gray-400',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm30WPPdFMJnKN5L6qLud7-pszwPIesGZvX8GjBUFnlf7tRw95-bxmWiOVI3HuKTw5cy4jN1pAIxqvzNA77UE1iy8rTjlP71T4BMONTNQgscxYlirzRvcgNchhNSWczXe9uIP4Zadu8c5-YvJZFgsx0kE0djRJmvAugl59zNX-GUY_khvj8m0nypS_WaEuP4sLSovm2oIoYxGBrOgCbREsqruH9r-OaDgBO_6ZTj8F3OBoPGoUDbgJ',
    avatarBg: 'bg-secondary-container',
    roleColor: 'bg-secondary-container'
  }
];

const buttonVariants = [
  { label: 'Primary', bg: 'bg-primary', text: 'text-on-primary' },
  { label: 'Secondary', bg: 'bg-secondary', text: 'text-on-secondary' },
  { label: 'Tertiary', bg: 'bg-tertiary', text: 'text-on-tertiary' },
  { label: 'Error', bg: 'bg-error', text: 'text-on-error' }
];

const inputVariants = [
  { label: 'Text Input', type: 'text', placeholder: 'Enter text...' },
  { label: 'Email Input', type: 'email', placeholder: 'Enter email...' },
  { label: 'Password Input', type: 'password', placeholder: 'Enter password...' },
  { label: 'Search Input', type: 'search', placeholder: 'Search...' }
];

export default function ThirtySpaceShowcase() {
  const tabs = [
    {
      title: 'Tables',
      content: (
        <div className="overflow-x-auto brutalist-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary-container border-b-2 border-black">
                <th className="p-md font-label-bold text-on-primary-container uppercase border-r-2 border-black">Member Name</th>
                <th className="p-md font-label-bold text-on-primary-container uppercase border-r-2 border-black">Role</th>
                <th className="p-md font-label-bold text-on-primary-container uppercase border-r-2 border-black">Status</th>
                <th className="p-md font-label-bold text-on-primary-container uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="font-body-md">
              {tableData.map((row, index) => (
                <tr key={index} className="border-b-2 border-black last:border-b-0 hover:bg-background transition-colors">
                  <td className="p-md border-r-2 border-black">
                    <div className="flex items-center gap-sm">
                      <div className={`w-10 h-10 rounded-full border-2 border-black overflow-hidden ${row.avatarBg}`}>
                        <img className="w-full h-full object-cover" src={row.avatar} alt={row.name} />
                      </div>
                      <span className="font-bold">{row.name}</span>
                    </div>
                  </td>
                  <td className="p-md border-r-2 border-black">
                    <span className={`px-3 py-1 ${row.roleColor} text-white border-2 border-black rounded-full font-label-bold text-xs`}>{row.role}</span>
                  </td>
                  <td className="p-md border-r-2 border-black">
                    <div className="flex items-center gap-xs">
                      <span className={`w-3 h-3 ${row.statusColor} border-2 border-black rounded-full`}></span>
                      <span className="font-medium text-sm">{row.status}</span>
                    </div>
                  </td>
                  <td className="p-md">
                    <div className="flex gap-sm">
                      <button className="px-3 py-1 bg-tertiary-container border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">EDIT</button>
                      <button className="px-3 py-1 bg-white border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">DELETE</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: 'Buttons',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {buttonVariants.map((variant, index) => (
            <div key={index} className="flex flex-col items-center">
              <button className={`px-4 py-2 ${variant.bg} ${variant.text} border-2 border-black brutalist-shadow font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`}>
                {variant.label}
              </button>
              <span className="mt-2 font-body-sm text-on-surface-variant">{variant.label}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Inputs',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputVariants.map((variant, index) => (
            <div key={index} className="flex flex-col">
              <label className="mb-1 font-label-bold text-on-surface-variant">{variant.label}</label>
              <input
                type={variant.type}
                placeholder={variant.placeholder}
                className="px-3 py-2 border-2 border-black brutalist-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              />
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">Thirtyspace</div>
        <nav className="hidden md:flex gap-lg items-center">
          <a className="font-body-md text-on-primary underline decoration-2 underline-offset-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Components</a>
          <a className="font-body-md text-on-primary/80 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Layout</a>
          <a className="font-body-md text-on-primary/80 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Tokens</a>
          <a className="font-body-md text-on-primary/80 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Guides</a>
        </nav>
        <button className="bg-secondary-container text-on-secondary-container px-lg py-sm font-label-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
          Get Started
        </button>
      </header>
      <main className="flex-grow pt-32 pb-xl px-margin max-w-7xl mx-auto w-full">
        <section className="mb-xl">
          <div className="inline-block bg-black p-md md:p-lg mb-md">
            <h1 className="font-headline-main text-headline-main-mobile md:text-headline-main text-white uppercase leading-none">
              Component Showcase
            </h1>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-2xl text-lg">
            High-contrast, brutalist UI components designed for maximum legibility and structural impact. Built for interfaces that refuse to be boring.
          </p>
        </section>
        <ShowcaseTab tabs={tabs} />
      </main>
    </div>
  );
}
