import { useState } from 'react';
import TripCard from '../components/TripCard';

const mockTrips = [
  {
    id: 1,
    title: 'Jastip Bangkok July',
    date: '12–18 Jul 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBV9FmSzHmMElYvNkNaTfltT1RizeUA5MnOa_GeoMEzL0q6X1-O1T46f8mKsCvFRWrz6gwZWzBgSS7I1PGoSG62Pq2la4upprHhrMVGFWaVYgRgKmTp97BXSMBxjv9x6fEGY--PL0Krb3ueee-vkZnX8HZd3z-5bU3sxy8T--wqD6SrHXNbnP1DKpMsTrcdRqhx6mYHwqNITOHVpGvNMc9jaJY_HGD-__MPpQcDnZ_Y5LoJnx76ZFA',
    isLive: true,
    bgColor: 'bg-accent-pink',
    buttonColor: 'bg-primary-container',
    textColor: 'text-on-primary-container'
  },
  {
    id: 2,
    title: 'Tokyo Summer Haul',
    date: '20–25 Jul 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcaaOGOzHT-EXDIW2kIpsuzjLU-qucF-5-XvOe5tI435Py-Fv4eJAhb0vTYU8ZlgBjaWKjXotacSwfH_h9wP3N_FNKvjcC0YFz_TexBrc6557xlzL2aCdkHkm22OFEEOPhAmqrMCyuSj039Jrq0Sl2PRan_KEPOj6Qpq6OqBKF0DHAhFXGeGYkJyLkPheJXl8KmwAwTlf8xmSOoNTukpbFoJuKbFb3BIDR8cWz1ITQ84y4S9YCKw4o',
    isLive: false,
    bgColor: 'bg-accent-purple',
    buttonColor: 'bg-secondary-container',
    textColor: 'text-on-secondary-container'
  }
];

export default function JastipHome() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrips = mockTrips.filter(trip =>
    trip.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-margin h-16 flex items-center justify-between bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white">
            <img className="w-full h-full object-cover" alt="A portrait of a cheerful Indonesian traveler in her late 20s, smiling warmly at the camera. She is wearing a modern mustard-yellow hijab and a stylish denim jacket. The background is a clean, bright minimalist studio with soft high-key lighting, maintaining a premium light-mode UI aesthetic that matches the vibrant yellow and black neubrutalist theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7uJFPBKyoKzedtWA20XxJJKzujnXJ7ephT6fs2yOuW6ItDIVk5vNtRPOSxe1Q82_vaKXTyDtDdHn8HMNGvT05B13wFz2VI5gJQ39d0yHGauPG0eHReBPw8OsrWc0UaBRLHoZdMsYGDJ_7ShVgv7Sx-lnr72reiktIi_4zt0Pm7xs7hkmEtGDcpfk60HKU5GnkghuPEfCSNu44hY8akO-oZA8RhqMjsIgsLwrKPAnfPNdb7yagxz5J" />
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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <section className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-heading-card text-heading-card underline decoration-accent-pink decoration-4 underline-offset-4">Event Aktif</h2>
            <a className="font-label-bold text-sm underline" href="#">Lihat Semua</a>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar -mx-margin px-margin">
            {filteredTrips.map(trip => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading-card text-heading-card mb-4 underline decoration-secondary-container decoration-4 underline-offset-4">Kalender Event</h2>
          <div className="neubrutalist-card bg-white rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label-bold text-lg">Juli 2026</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-md active:bg-gray-100">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-md active:bg-gray-100">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              <div className="text-[10px] font-bold opacity-50 uppercase">Sn</div>
              <div className="text-[10px] font-bold opacity-50 uppercase">Sl</div>
              <div className="text-[10px] font-bold opacity-50 uppercase">Rb</div>
              <div className="text-[10px] font-bold opacity-50 uppercase">Km</div>
              <div className="text-[10px] font-bold opacity-50 uppercase">Jm</div>
              <div className="text-[10px] font-bold opacity-50 uppercase">Sb</div>
              <div className="text-[10px] font-bold opacity-50 uppercase">Mg</div>
              <div className="h-8 flex items-center justify-center text-sm opacity-30">29</div>
              <div className="h-8 flex items-center justify-center text-sm opacity-30">30</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">5</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">6</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">7</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">8</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">9</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">10</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">11</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">12</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">13</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">14</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">15</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">16</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">17</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">18</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">19</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">20</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">21</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">22</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">23</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">24</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">25</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">26</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">27</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">28</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">29</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">30</div>
              <div className="h-8 flex items-center justify-center text-sm font-bold">31</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
