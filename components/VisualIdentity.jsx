import React, { useState } from 'react';

const VisualIdentity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    // aleks group 1
    '/visualidentity/aleks_1.png',
    '/visualidentity/aleks_2.png',
    '/visualidentity/aleks_3.png',

    // aleks group 2
    '/visualidentity/aleks_14.png',
    '/visualidentity/aleks_5.png',
    '/visualidentity/aleks_6.png',

    // aleks group 3
    '/visualidentity/aleks_7.png',
    '/visualidentity/aleks_8.png',
    '/visualidentity/aleks_15.png',

    // aleks group 4
    '/visualidentity/aleks_10.png',
    '/visualidentity/aleks_11.png',
    '/visualidentity/aleks_12.png',

    // aleks group 5
    '/visualidentity/aleks_13.png',

    // anasantana group 1
    '/visualidentity/anasantana_1.png',
    '/visualidentity/anasantana_4.png',
    '/visualidentity/anasantana_3.png',

    // anasantana group 2
    '/visualidentity/anasantana_2.png',
    '/visualidentity/anasantana_5.png',
    '/visualidentity/anasantana_6.png',

    // snack group 1
    '/visualidentity/snack_1.png',
    '/visualidentity/snack_5.png',
    '/visualidentity/snack_2.png',

    // snack group 2
    '/visualidentity/snack_4.png',
    '/visualidentity/snack_6.png',
    '/visualidentity/snack_3.png',

    // snack group 3
    '/visualidentity/snack_7.png',
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

  const renderImageGrid = (imageArray, startIndex) =>
    imageArray.map((src, i) => (
      <img
        key={src}
        src={src}
        alt={`Visual Identity ${startIndex + i + 1}`}
        className="w-full rounded cursor-pointer transition-opacity duration-300 hover:opacity-80"
        onClick={() => openOverlay(startIndex + i)}
      />
    ));

  return (
    <div className="items-center flex flex-col px-4 md:px-0">
      <div className="h-48 md:h-96 max-w-96 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl md:text-4xl">Visual Identity</h1>
        <p className="text-sm md:text-base">I love the whole process of giving brands their own unique style.</p>
      </div>

      <div className="flex w-full justify-between px-4 md:px-20">
        <div className="md:ml-20">
          <a
            href="/projects/ui-design"
            className="flex justify-start rounded bg-right-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out text-sm md:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 mr-2 text-rose-500 transform rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            UI Design
          </a>
        </div>

        <div className="md:mr-20">
          <a
            href="/projects/renders-3d"
            className="flex justify-end rounded bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out text-sm md:text-base"
          >
            3D
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 ml-2 text-rose-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Aleks Collection */}
      <h2 className="text-xl md:text-2xl font-regular mt-8 mb-4">Aleks Rynd</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-20 mb-8 sm:mb-16 md:mb-24">
        <div className="grid gap-4">{renderImageGrid(images.slice(0, 3), 0)}</div>
        <div className="grid gap-4">{renderImageGrid(images.slice(3, 6), 3)}</div>
        <div className="grid gap-4">{renderImageGrid(images.slice(6, 9), 6)}</div>
        <div className="grid gap-4">{renderImageGrid(images.slice(9, 12), 9)}</div>
        <div className="grid gap-4">{renderImageGrid(images.slice(12, 13), 12)}</div>
      </div>

      {/* Anasantana Collection */}
      <h2 className="text-xl md:text-2xl font-regular mt-8 mb-4">Anasantana</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-20 mb-8 sm:mb-16 md:mb-24">
        <div className="grid gap-4">{renderImageGrid(images.slice(13, 16), 13)}</div>
        <div className="grid gap-4">{renderImageGrid(images.slice(16, 19), 16)}</div>
      </div>

      {/* Snack Collection */}
      <h2 className="text-xl md:text-2xl font-regular mt-8 mb-4">Snack Brasuka</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-20 mb-8 sm:mb-16 md:mb-24">
        <div className="grid gap-4">{renderImageGrid(images.slice(19, 22), 19)}</div>
        <div className="grid gap-4">{renderImageGrid(images.slice(22, 25), 22)}</div>
        <div className="grid gap-4">{renderImageGrid(images.slice(25, 26), 25)}</div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <button
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-4xl font-bold select-none"
            onClick={prevImage}
            aria-label="Previous Image"
          >
            &#8592;
          </button>
          <img
            src={images[currentIndex]}
            alt={`Visual Identity ${currentIndex + 1}`}
            className="max-h-[80vh] md:max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-4xl font-bold select-none"
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

export default VisualIdentity;
