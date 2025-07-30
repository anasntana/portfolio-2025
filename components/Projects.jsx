import React, { useState } from 'react';

const projects = [
  { href: "projects/ui-design", label: "UI Design", imgSrc: "/ui.png" },
  { href: "projects/visual-identity", label: "Visual Identity", imgSrc: "/visual.png" },
  { href: "projects/renders-3d", label: "3D Renders", imgSrc: "/3d.png" },
  { href: "projects/illustrations", label: "Illustrations", imgSrc: "/illustrations.png" },
  { href: "projects/photography", label: "Photography", imgSrc: "/photography.jpg" },
];

const Projects = () => {
  const [hoverImg, setHoverImg] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-2xl md:text-4xl relative px-4 md:px-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverImg(null)}
    >
      {/* Hover image behind the titles - hidden on mobile */}
      {hoverImg && (
        <img
          src={hoverImg}
          alt="Preview"
          className="pointer-events-none absolute max-w-48 md:max-w-96 max-h-48 md:max-h-96 opacity-80 transition-opacity duration-200 rounded hidden md:block"
          style={{
            top: position.y,
            left: position.x,
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        />
      )}

      {/* Links on top of image */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 z-10">
        {projects.map(({ href, label, imgSrc }) => (
          <a
            key={href}
            href={href}
            className="relative px-4 py-2 font-serif text-center md:text-left hover:opacity-80 transition-opacity duration-200"
            onMouseEnter={() => setHoverImg(imgSrc)}
            onMouseLeave={() => setHoverImg(null)}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
