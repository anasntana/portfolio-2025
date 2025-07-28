import React, { useState } from 'react';

const Illustrations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'illustration_2.png',
    'illustration_4.png',
    'illustration_5.png',
    'illustration_6.svg',
  ].map((file) => `/illustrations/${file}`);

  const openOverlay = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="items-center flex flex-col">
      <div className="h-96 max-w-96 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl">Illustrations</h1>
        <p>Some digital illustrations.</p>
      </div>

      {/* Navigation Links */}
      <div className="flex w-full justify-between px-8 md:px-20">
        <div>
          <a
            href="/projects/renders-3d"
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
            3D Renders
          </a>
        </div>
        <div>
          <a
            href="/projects/photography"
            className="flex items-center rounded bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"
          >
            Photography
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-2 text-rose-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 md:px-20 my-20 w-full">
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full aspect-square overflow-hidden rounded shadow cursor-pointer transition-opacity duration-300 hover:opacity-80"
            onClick={() => openOverlay(i)}
          >
            <img src={src} alt={`Illustration ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold select-none"
            onClick={prevImage}
            aria-label="Previous Image"
          >
            &#8592;
          </button>
          <img
            src={images[currentIndex]}
            alt={`Illustration ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold select-none"
            onClick={nextImage}
            aria-label="Next Image"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Illustrations;
