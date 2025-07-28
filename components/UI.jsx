import React, { useState } from 'react';

const UI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten all images into a single array in the correct order
  const images = [
    '/ui/ui_1.png',
    '/ui/ui_2.png',
    '/ui/ui_3.png',
    '/ui/ui_4.png',
    '/ui/ui_5.png',
    '/ui/ui_6.png',
    '/ui/ui_14.png',
    '/ui/ui_8.png',
    '/ui/ui_13.png',
    '/ui/ui_7.png',
    '/ui/ui_11.png',
    '/ui/ui_9.png',
  ];

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
        <h1 className="text-4xl">UI Design</h1>
        <p className="">A few of my contributions to the 100 Days UI Challenge.</p>
      </div>

      <div className="ml-auto mr-20 max-w-96 mt-4">
        <a
          href="/projects/visual-identity"
          className="flex items-center justify-end rounded bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"
        >
          Visual Identity
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 ml-2 text-rose-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-20 mb-8 sm:mb-16 md:mb-24 mt-8 sm:mt-16 md:mt-24">
        {[ // arrays of images per column
          ['/ui/ui_1.png', '/ui/ui_2.png', '/ui/ui_3.png'],
          ['/ui/ui_4.png', '/ui/ui_5.png', '/ui/ui_6.png'],
          ['/ui/ui_14.png', '/ui/ui_8.png', '/ui/ui_13.png'],
          ['/ui/ui_7.png', '/ui/ui_11.png', '/ui/ui_9.png'],
        ].map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((src, i) => {
              const globalIndex =
                colIndex * 3 + i; // calculate index for modal navigation
              return (
                <img
                  key={src}
                  src={src}
                  alt={`UI Design ${globalIndex + 1}`}
                  className="w-full rounded cursor-pointer transition-opacity duration-300 hover:opacity-80"
                  onClick={() => openOverlay(globalIndex)}
                />
              );
            })}
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
            alt={`UI Design ${currentIndex + 1}`}
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

export default UI;
