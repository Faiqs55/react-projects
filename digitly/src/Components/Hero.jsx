import React from "react";
import heroBG from "../assets/bg/hero_bg.png";
import hero from "../assets/bg/hero.png";
import f1 from "../assets/icon/feature1.png";
import f2 from "../assets/icon/feature2.png";
import f3 from "../assets/icon/feature3.png";
import f4 from "../assets/icon/feature4.png";
import HeroCard from "./HeroCard";

const Hero = () => {

    const feature = [
        {
            img: f1,
            title: 'CUSTOMIZED SOLUTION',
        },
        {
            img: f2,
            title: 'ROI-DRIVEN APPROCH',
        },
        {
            img: f3,
            title: 'CREATIVE SOLUTION',
        },
        {
            img: f4,
            title: "EXPERT TEAM",
        },
    ]

  return (
    <>
      <div className="h-[90vh] relative flex items-center justify-center px-40">
        <img
          className="absolute top-0 left-0 w-full h-full z-[-2]"
          src={heroBG}
          alt=""
        />
        <img
          className="absolute top-0 left-0 w-full h-full z-[-1]"
          src={hero}
          alt=""
        />
        <div className="flex flex-col text-white text-center gap-4">
          <h1 className="text-7xl font-semibold">DIGITAL SERVICES</h1>
          <h2 className="text-2xl font-semibold">
            BUILDING YOUR EMPIRE DIGITALLY
          </h2>
          <div className="flex gap-3 justify-center mt-2">
            <button className="text-lg font-semibold px-7 py-3 rounded-full bg-gradient-to-r from-[#7436bb] to-[#b520a2]">
              Get Started
            </button>
            <button className="text-lg font-semibold px-7 py-3 rounded-full border-2 border-[#b520a2]">
              Discover More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#160726] px-40 min-h-[50vh] relative">
         <div className="flex px-40 gap-3 w-full justify-between absolute -top-24 left-0">
            {feature.map(f => <HeroCard key={f.title} data={f} />)}
         </div>
      <div className="absolute left-[50%] translate-x-[-50%] top-[50%] mt-20">
         <div className="text-white flex flex-col items-center gap-5">
            <div className="h-[5vh] border-[1px] w-0 border-white"></div>
            <h3>OUR CLIENTS</h3>
         </div>
      </div>
      </div>

    </>
  );
};

export default Hero;
