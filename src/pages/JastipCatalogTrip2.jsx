import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

const tripImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_2-zPEoXEcPQArGUXUHzft6MLSWYK2SmMuROCygS7FoDXi-WBMoF76jTsARdEtnNgnj6O-cELokk-jC9QibAGIEezLLi3KAIjFt5WWs4OOXJXsGHwS_7gzNPdhQ4wGj0QyJD8g7hfUCtiDXbYaoxzEUJuQ9pP9e4Wqw_yd2jcj6tSz_qDvVGSiluxU1p0UVurHYCWX_qzVSyxqo48JRV_GcJF-VtNH60rwyqTjaQAHRJlZeie_Tb',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_2-zPEoXEcPQArGUXUHzft6MLSWYK2SmMuROCygS7FoDXi-WBMoF76jTsARdEtnNgnj6O-cELokk-jC9QibAGIEezLLi3KAIjFt5WWs4OOXJXsGHwS_7gzNPdhQ4wGj0QyJD8g7hfUCtiDXbYaoxzEUJuQ9pP9e4Wqw_yd2jcj6tSz_qDvVGSiluxU1p0UVurHYCWX_qzVSyxqo48JRV_GcJF-VtNH60rwyqTjaQAHRJlZeie_Tb',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_2-zPEoXEcPQArGUXUHzft6MLSWYK2SmMuROCygS7FoDXi-WBMoF76jTsARdEtnNgnj6O-cELokk-jC9QibAGIEezLLi3KAIjFt5WWs4OOXJXsGHwS_7gzNPdhQ4wGj0QyJD8g7hfUCtiDXbYaoxzEUJuQ9pP9e4Wqw_yd2jcj6tSz_qDvVGSiluxU1p0UVurHYCWX_qzVSyxqo48JRV_GcJF-VtNH60rwyqTjaQAHRJlZeie_Tb',
];

export default function JastipCatalogTrip2() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-primary border-b-2 border-black sticky top-0 z-50 flex justify-between items-center px-4 py-3 w-full shadow-neubrutal">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-primary">shopping_bag</span>
          <h1 className="font-headline-main-mobile text-[24px] text-on-primary uppercase tracking-tighter">Jastip Catalog</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-accent-pink border-2 border-black shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      <main className="px-4 pt-6">
        <section className="mb-6">
          <div className="bg-primary-container border-2 border-black p-4 shadow-neubrutal rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-bold text-on-primary-container uppercase text-xs tracking-widest mb-1">Live Event</p>
                <h2 className="font-heading-card text-on-primary-fixed">Event Jepang Trip</h2>
                <div className="flex items-center mt-1 text-on-primary-fixed-variant">
                  <span className="material-symbols-outlined text-sm mr-1">calendar_today</span>
                  <span className="text-sm font-bold">12–18 Jul 2026</span>
                </div>
              </div>
              <div className="bg-accent-orange text-white px-3 py-1 border-2 border-black font-label-bold shadow-neubrutal-sm">
                ACTIVE
              </div>
            </div>
          </div>
        </section>

        <Gallery images={tripImages} />

        <section className="mt-6">
          <h2 className="font-heading-card text-on-surface mb-2">Deskripsi</h2>
          <p className="font-label text-on-surface-variant mb-4">
            Trip ke Jepang untuk belanja barang-barang kebutuhan sehari-hari. Termasuk skincare, snack, fashion, dan mainan.
          </p>

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-label-bold text-on-surface">Harga</p>
              <p className="font-headline-main text-primary text-xl">Rp1.200.000</p>
            </div>
            <div className="text-right">
              <p className="font-label-bold text-on-surface">Slot Tersisa</p>
              <p className="font-headline-main text-primary text-xl">12/20</p>
            </div>
          </div>

          <Link
            to="/order-form"
            className="w-full py-3 bg-accent-orange text-white border-2 border-black font-label-bold shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 rounded-lg"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Pesan Sekarang
          </Link>
        </section>
      </main>
    </div>
  );
}
