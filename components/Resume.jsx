import React from 'react';

const Resume = () => {
  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="flex justify-center items-center h-screen">
    {/* Centering the button vertically and horizontally */}
      <button className="bg-rose-500 hover:bg-rose-600 text-white py-8 px-16 rounded" onClick={openResume}>
        Check out Resume
      </button>
    </div>
  );
};

export default Resume;