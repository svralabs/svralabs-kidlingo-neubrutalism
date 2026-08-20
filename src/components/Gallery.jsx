import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl border-2 border-black shadow-neubrutal">
      <img
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black shadow-neubrutal-sm p-2 rounded-full"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black shadow-neubrutal-sm p-2 rounded-full"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-accent-orange' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
