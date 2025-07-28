import React, { useState } from 'react';

const images = Array.from({ length: 25 }, (_, i) => `/photography/photography_${i + 1}.jpg`).filter(
  (src, index) => index !== 24 // Skip index 24 (photography_25.jpg)
);

const Photography = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const closeOverlay = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="items-center flex flex-col">
      {/* Header */}
      <div className="h-96 max-w-96 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl">Photography</h1>
        <p>My oldest hobby — playing with compositions and capturing moments that tell stories.</p>
      </div>

      {/* Back Navigation */}
      <div className="flex w-full justify-start px-8 md:px-20">
        <a
          href="/projects/illustrations"
          className="flex items-center rounded bg-right-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2 text-rose-500 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          Illustrations
        </a>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 md:px-20 my-20 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-square overflow-hidden rounded shadow cursor-pointer hover:opacity-80 transition"
            onClick={() => setSelectedIndex(index)}
          >
            <img src={src} alt={`Photography ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeOverlay}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 text-white text-4xl px-4 py-2"
          >
            &#8592;
          </button>

          <img
            src={images[selectedIndex]}
            alt={`Photography ${selectedIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 text-white text-4xl px-4 py-2"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Photography;