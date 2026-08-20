export default function TripCard({ trip }) {
  return (
    <div className="neubrutalist-card bg-white min-w-[280px] rounded-xl overflow-hidden flex-shrink-0">
      <div className={`h-32 ${trip.bgColor} relative overflow-hidden`}>
        <img
          className="w-full h-full object-cover"
          alt={`Image for ${trip.title} trip`}
          src={trip.image}
        />
        {trip.isLive && (
          <div className="absolute top-2 right-2 bg-white border-2 border-black px-2 py-1 rounded-full text-[10px] font-bold">LIVE</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading-card text-[18px] mb-1">{trip.title}</h3>
        <p className="text-sm opacity-70 mb-4 flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
          {trip.date}
        </p>
        <button className={`neubrutalist-btn ${trip.buttonBg} w-full py-2 rounded-full font-label-bold ${trip.buttonText}`}>
          Lihat Katalog
        </button>
      </div>
    </div>
  );
}
