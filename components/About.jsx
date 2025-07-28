import React from 'react';

const About = () => {
  return (
    <div>
      <div className="flex justify-between mx-20 mt-40 pb-20">
        <div className="w-1/2 pr-20">
          <img className="w-14 h-14 animate-spin mr-10 mb-10" src="./orange-500.svg" alt="orange icon" />
          <div className="flex">
            <div>
              <h1 className="text-5xl font-bold font-serif">Hey there, I'm Ana!</h1>
              <br />
              <div>
                I am a passionate product designer dedicated to transforming ideas into tangible, intuitive products and crafting solutions that enhance human experiences through design. <br /><br />Thanks for checking out my portfolio!
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <img src="/about.jpg" alt="selfie" className="rounded w-full h-auto object-cover" />
        </div>
      </div>

      <div className="mx-20 border-b pb-40">
        <p className="ml-40 text-3xl font-serif">Some facts to get to know me :)</p><br />
        <div className="ml-40 list-disc">
          <ul>
            <li>- I’m a Figma enthusiast obsessed with shortcuts, my favorite is cmd + shift + R;</li>
            <li>- I really want to learn how to play the piano and be good at tennis at some point in my life;</li>
            <li>- I’m a big language nerd;</li>
            <li>- On the weekends, catch me on roller skates or by the beach doing aerial silks; <span className="text-gray-300">(or at home binge-watching The Office for the millionth time)</span></li>
            <li>- I’m a matcha addict who’s trying really hard to improve her latte art skills.</li>
          </ul>
        </div>
      </div>

      <div className="ml-20 mr-80 mt-40 mb-80">
        <p className="text-5xl font-serif">“How do I explain what I do at a party? The short version is that I say I humanize technology.”</p>
        <p className="text-right">— Fred Beecher</p>
      </div>
    </div>
  );
};

export default About;
