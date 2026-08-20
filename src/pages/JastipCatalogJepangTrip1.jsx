import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const items = [
  {
    id: 1,
    name: 'Hada Labo Lotion Gokujyun Premium',
    price: 185000,
    category: 'SKINCARE',
    categoryColor: 'accent-purple',
    fee: 'Fee 10%',
    feeColor: 'tertiary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_2-zPEoXEcPQArGUXUHzft6MLSWYK2SmMuROCygS7FoDXi-WBMoF76jTsARdEtnNgnj6O-cELokk-jC9QibAGIEezLLi3KAIjFt5WWs4OOXJXsGHwS_7gzNPdhQ4wGj0QyJD8g7hfUCtiDXbYaoxzEUJuQ9pP9e4Wqw_yd2jcj6tSz_qDvVGSiluxU1p0UVurHYCWX_qzVSyxqo48JRV_GcJF-VtNH60rwyqTjaQAHRJlZeie_Tb',
  },
  {
    id: 2,
    name: 'KitKat Matcha Kyoto Limited Edition',
    price: 95000,
    category: 'SNACK',
    categoryColor: 'accent-pink',
    fee: 'Fee Rp15.000',
    feeColor: 'secondary-fixed',
    image: null,
  },
  {
    id: 3,
    name: 'Uniqlo U AIRism Cotton Basic Tee',
    price: 250000,
    category: 'FASHION',
    categoryColor: 'accent-blue',
    fee: 'Fee 5%',
    feeColor: 'tertiary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_2-zPEoXEcPQArGUXUHzft6MLSWYK2SmMuROCygS7FoDXi-WBMoF76jTsARdEtnNgnj6O-cELokk-jC9QibAGIEezLLi3KAIjFt5WWs4OOXJXsGHwS_7gzNPdhQ4wGj0QyJD8g7hfUCtiDXbYaoxzEUJuQ9pP9e4Wqw_yd2jcj6tSz_qDvVGSiluxU1p0UVurHYCWX_qzVSyxqo48JRV_GcJF-VtNH60rwyqTjaQAHRJlZeie_Tb',
  },
  {
    id: 4,
    name: 'Bandai Tamagotchi Classic',
    price: 120000,
    category: 'MAINAN',
    categoryColor: 'accent-green',
    fee: 'Fee Rp20.000',
    feeColor: 'secondary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_2-zPEoXEcPQArGUXUHzft6MLSWYK2SmMuROCygS7FoDXi-WBMoF76jTsARdEtnNgnj6O-cELokk-jC9QibAGIEezLLi3KAIjFt5WWs4OOXJXsGHwS_7gzNPdhQ4wGj0QyJD8g7hfUCtiDXbYaoxzEUJuQ9pP9e4Wqw_yd2jcj6tSz_qDvVGSiluxU1p0UVurHYCWX_qzVSyxqo48JRV_GcJF-VtNH60rwyqTjaQAHRJlZeie_Tb',
  },
];

export default function JastipCatalogJepangTrip1() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-primary border-b-2 border-black sticky top-0 z-50 flex justify-between items-center px-margin py-sm w-full shadow-neubrutal">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-primary">
            shopping_bag
          </span>
          <h1 className="font-headline-main-mobile text-[24px] text-on-primary uppercase tracking-tighter">
            Jastip Catalog
          </h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-accent-pink border-2 border-black shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>
      <main className="px-margin pt-6">
        <section className="mb-6">
          <div className="bg-primary-container border-2 border-black p-4 shadow-neubrutal rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-bold text-on-primary-container uppercase text-xs tracking-widest mb-1">
                  Live Event
                </p>
                <h2 className="font-heading-card text-on-primary-fixed">
                  Event Jepang Trip
                </h2>
                <div className="flex items-center mt-1 text-on-primary-fixed-variant">
                  <span className="material-symbols-outlined text-sm mr-1">
                    calendar_today
                  </span>
                  <span className="text-sm font-bold">12–18 Jul 2026</span>
                </div>
              </div>
              <div className="bg-accent-orange text-white px-3 py-1 border-2 border-black font-label-bold shadow-neubrutal-sm">
                ACTIVE
              </div>
            </div>
          </div>
        </section>
        <div className="relative mb-6">
          <input
            className="w-full h-14 pl-12 pr-4 bg-white border-2 border-black font-label-bold shadow-neubrutal-sm focus:outline-none focus:ring-0 rounded-xl placeholder-outline"
            placeholder="Cari barang titipan..."
            type="text"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
            search
          </span>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-3 mb-8 pb-2">
          <button className="whitespace-nowrap px-6 py-2 bg-secondary-container text-on-secondary-container border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all">
            Semua
          </button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">
            Skincare
          </button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">
            Snack
          </button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">
            Fashion
          </button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">
            Mainan
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {currentItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mb-10">
          <button
            className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center border-2 border-black shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all ${
                  currentPage === page
                    ? 'bg-accent-orange text-white'
                    : 'bg-white text-on-surface'
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
    </div>
  );
}
