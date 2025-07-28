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
      className="h-screen flex justify-center items-center gap-8 text-4xl relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverImg(null)}
    >
      {/* Hover image behind the titles */}
      {hoverImg && (
        <img
          src={hoverImg}
          alt="Preview"
          className="pointer-events-none absolute max-w-96 max-h-96 opacity-80 transition-opacity duration-200 rounded"
          style={{
            top: position.y,
            left: position.x,
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        />
      )}

      {/* Links on top of image */}
      {projects.map(({ href, label, imgSrc }) => (
        <a
          key={href}
          href={href}
          className="relative px-4 py-2 z-10 font-serif"
          onMouseEnter={() => setHoverImg(imgSrc)}
          onMouseLeave={() => setHoverImg(null)}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default Projects;
