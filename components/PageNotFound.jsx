import React from 'react';

const PageNotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div>
        <h1 className="text-5xl font-bold font-serif mb-10">Oops!</h1>
      <div className=''>I haven't gotten around to this Use Case yet... Come back in a few weeks ;)</div>
        </div>
      <img src="/page-not-found.svg" className='my-20' alt="Page Not Found"></img>
    </div>
  );
};

export default PageNotFound;