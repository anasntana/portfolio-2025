import React from 'react';

const About = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-col lg:flex-row justify-between mx-4 md:mx-20 mt-20 md:mt-40 pb-20">
        <div className="w-full lg:w-1/2 lg:pr-20 mb-8 lg:mb-0">
          <img className="w-14 h-14 animate-spin mr-10 mb-10" src="./orange-500.svg" alt="orange icon" />
          <div className="flex">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-serif">Hey there, I'm Ana!</h1>
              <br />
              <div className="text-base md:text-lg">
                I am a passionate product designer dedicated to transforming ideas into tangible, intuitive products and crafting solutions that enhance human experiences through design. <br /><br />Thanks for checking out my portfolio!
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <img src="/about.jpg" alt="selfie" className="rounded w-full h-auto object-cover" />
        </div>
      </div>

      <div className="mx-4 md:mx-20 border-b pb-20 md:pb-40">
        <p className="text-xl md:text-3xl font-serif mb-4 md:ml-40">Some facts to get to know me :)</p><br />
        <div className="ml-4 md:ml-40 list-disc">
          <ul className="space-y-2 text-sm md:text-base">
            <li>- I'm a Figma enthusiast obsessed with shortcuts, my favorite is cmd + shift + R;</li>
            <li>- I really want to learn how to play the piano and be good at tennis at some point in my life;</li>
            <li>- I'm a big language nerd;</li>
            <li>- On the weekends, catch me on roller skates or by the beach doing aerial silks; <span className="text-gray-300">(or at home binge-watching The Office for the millionth time)</span></li>
            <li>- I'm a matcha addict who's trying really hard to improve her latte art skills.</li>
          </ul>
        </div>
      </div>

      <div className="mx-4 md:ml-20 md:mr-80 mt-20 md:mt-40 mb-20 md:mb-80">
        <p className="text-2xl md:text-5xl font-serif">"How do I explain what I do at a party? The short version is that I say I humanize technology."</p>
        <p className="text-right mt-4">— Fred Beecher</p>
      </div>
    </div>
  );
};

export default About;
