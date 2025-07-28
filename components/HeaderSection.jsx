const HeaderSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center border-b pb-20'>
      <div className='flex items-center'>
        <img className="w-96 animate-spin mr-20" src="./sun.svg" alt="image description"></img>
        <div className='font-serif'>
          <div className='text-8xl text-orange-500'>Hi!</div><br/>
          <div className='text-4xl w-96'>
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
