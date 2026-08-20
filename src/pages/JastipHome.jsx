import React, { useState } from 'react';
import TripCard from '../components/TripCard';
import tripsData from '../mocks/trips.json';

export default function JastipHome() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrips, setFilteredTrips] = useState(tripsData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = tripsData.filter(trip =>
      trip.title.toLowerCase().includes(term)
    );
    setFilteredTrips(filtered);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-margin h-16 flex items-center justify-between bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7uJFPBKyoKzedtWA20XxJJKzujnXJ7ephT6fs2yOuW6ItDIVk5vNtRPOSxe1Q82_vaKXTyDtDdHn8HMNGvT05B13wFz2VI5gJQ39d0yHGauPG0eHReBPw8OsrWc0UaBRLHoZdMsYGDJ_7ShVgv7Sx-lnr72reiktIi_4zt0Pm7xs7hkmEtGDcpfk60HKU5GnkghuPEfCSNu44hY8akO-oZA8RhqMjsIgsLwrKPAnfPNdb7yagxz5J" alt="Profile" />
          </div>
          <h1 className="font-headline-main-mobile text-[24px] text-on-primary">Halo, Jastiper!</h1>
        </div>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white border-2 border-black rounded-full active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
          <span className="material-symbols-outlined text-black">notifications</span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-accent-orange border-2 border-black rounded-full"></span>
        </button>
      </header>
      <main className="mt-24 px-margin">
        <div className="mb-8">
          <div className="neubrutalist-card bg-secondary-container p-4 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-black">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 w-full font-label-bold placeholder:text-on-secondary-container/60"
              placeholder="Cari jastip apa hari ini?"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <section className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-heading-card text-heading-card underline decoration-accent-pink decoration-4 underline-offset-4">Event Aktif</h2>
            <a className="font-label-bold text-sm underline" href="#">Lihat Semua</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTrips.map(trip => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
