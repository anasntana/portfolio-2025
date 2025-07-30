const HeaderSection = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center border-b pb-20 px-4 md:px-0'>
      <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto'>
        <img className="w-48 md:w-96 animate-spin mb-8 md:mb-0 md:mr-20" src="./sun.svg" alt="image description"></img>
        <div className='font-serif text-center md:text-left'>
          <div className='text-5xl md:text-8xl text-orange-500'>Hi!</div><br/>
          <div className='text-2xl md:text-4xl max-w-xs md:max-w-md lg:max-w-lg'>
            I'm Ana, a <br/>
            product designer  <br/>
            based in France. ☺
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
