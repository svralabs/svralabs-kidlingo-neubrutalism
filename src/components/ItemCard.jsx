import React from 'react';

export default function ItemCard({ item }) {
  return (
    <div className="bg-white border-2 border-black shadow-neubrutal rounded-xl overflow-hidden flex flex-col">
      <div className="relative aspect-square border-b-2 border-black overflow-hidden">
        {item.image ? (
          <img
            className="w-full h-full object-cover"
            src={item.image}
            alt={item.name}
          />
        ) : (
          <div className="relative aspect-square border-b-2 border-black bg-surface-variant flex flex-col items-center justify-center p-4 text-center">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '10px 10px' }}
            ></div>
            <span className="material-symbols-outlined text-4xl mb-2 text-outline">image_not_supported</span>
            <p className="font-label-bold text-[10px] uppercase text-outline">Product Image Missing</p>
          </div>
        )}
        <div className={`absolute top-2 left-2 bg-${item.categoryColor} text-white text-[10px] font-bold px-2 py-1 border-2 border-black shadow-neubrutal-sm uppercase`}>
          {item.category}
        </div>
      </div>
      <div className="p-3 flex-grow flex flex-col">
        <h3 className="font-label-bold text-sm text-on-surface leading-tight mb-2 line-clamp-2">{item.name}</h3>
        <p className="font-headline-main text-[16px] text-primary mb-2">Rp{item.price.toLocaleString()}</p>
        <div className="mt-auto">
          <span className={`inline-block bg-${item.feeColor} text-on-${item.feeColor}-variant text-[10px] font-bold px-2 py-0.5 border border-black mb-3`}>
            {item.feeType === 'percentage' ? `Fee ${item.fee}%` : `Fee Rp${item.fee.toLocaleString()}`}
          </span>
          <button className="w-full py-2 bg-accent-orange text-white border-2 border-black font-label-bold shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 rounded-lg">
            <span className="material-symbols-outlined text-sm">add</span>
            Titip
          </button>
        </div>
      </div>
    </div>
  );
}
