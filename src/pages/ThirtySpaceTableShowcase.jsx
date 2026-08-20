import React from 'react';
import Table from '../components/Table';

const ThirtySpaceTableShowcase = () => {
  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Lead Architect',
      status: 'Online',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNB2FTbQIfkaQC0xPxzZTUjvwiSxGICoxpDgKwXDrFKmX4iySDgEY51AurU41r7QyCKIHfggKBGN2CeFXgjtaSyA39JTcQNa_yR_evcRBQXFghbUWFpPm1RfVWaekOJmm_v3dgeJSNOQwUkelunnZlOWPr31s3vvg0uFp5Pzo16pi2Ue_PwHaBkfJ17IiwrTtFrw2Z4FEW3eNBWcF6-Uj9OufpGIZDIzV6Ibt3idZflKSX66cvQ4Qe',
      avatarBg: 'bg-accent-pink',
    },
    {
      name: 'Jordan Smith',
      role: 'UI Designer',
      status: 'Offline',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm30WPPdFMJnKN5L6qLud7-pszwPIesGZvX8GjBUFnlf7tRw95-bxmWiOVI3HuKTw5cy4jN1pAIxqvzNA77UE1iy8rTjlP71T4BMONTNQgscxYlirzRvcgNchhNSWczXe9uIP4Zadu8c5-YvJZFgsx0kE0djRJmvAugl59zNX-GUY_khvj8m0nypS_WaEuP4sLSovm2oIoYxGBrOgCbREsqruH9r-OaDgBO_6ZTj8F3OBoPGoUDbgJ',
      avatarBg: 'bg-secondary-container',
    },
  ];

  const columns = [
    {
      header: 'Member Name',
      cell: (row) => (
        <div className="flex items-center gap-sm">
          <div className={`w-10 h-10 rounded-full border-2 border-black overflow-hidden ${row.avatarBg}`}>
            <img className="w-full h-full object-cover" src={row.avatar} alt={row.name} />
          </div>
          <span className="font-bold">{row.name}</span>
        </div>
      ),
    },
    {
      header: 'Role',
      cell: (row) => (
        <span className={`px-3 py-1 ${row.role === 'Lead Architect' ? 'bg-accent-purple' : 'bg-secondary-container'} text-white border-2 border-black rounded-full font-label-bold text-xs`}>
          {row.role}
        </span>
      ),
    },
    {
      header: 'Status',
      cell: (row) => (
        <div className="flex items-center gap-xs">
          <span className={`w-3 h-3 ${row.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'} border-2 border-black rounded-full`}></span>
          <span className="font-medium text-sm">{row.status}</span>
        </div>
      ),
    },
    {
      header: 'Actions',
      cell: () => (
        <div className="flex gap-sm">
          <button className="px-3 py-1 bg-tertiary-container border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">EDIT</button>
          <button className="px-3 py-1 bg-white border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">DELETE</button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-grow pt-32 pb-xl px-margin max-w-7xl mx-auto w-full">
      <section className="mb-xl">
        <div className="inline-block bg-black p-md md:p-lg mb-md">
          <h1 className="font-headline-main text-headline-main-mobile md:text-headline-main text-white uppercase leading-none">
            TABLE VARIANTS
          </h1>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-2xl text-lg">
          High-contrast, brutalist table components designed for maximum legibility and structural impact. Built for data-heavy interfaces that refuse to be boring.
        </p>
      </section>
      <section className="mb-xl">
        <div className="flex items-center gap-sm mb-lg">
          <span className="w-8 h-8 bg-accent-purple border-2 border-black rounded-full flex items-center justify-center brutalist-shadow">
            <span className="material-symbols-outlined text-white text-sm">database</span>
          </span>
          <h2 className="font-heading-card text-heading-card text-on-surface">Standard Data Grid</h2>
        </div>
        <Table data={teamMembers} columns={columns} />
      </section>
    </div>
  );
};

export default ThirtySpaceTableShowcase;
