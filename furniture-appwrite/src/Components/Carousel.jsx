import React, { useState } from "react";

const Carousel = ({ imgs }) => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    if (current === imgs.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  const prevSlide = () => {
    if (current === 0) setCurrent(imgs.length - 1);
    else setCurrent(current - 1);
  };

  return (
    <div className={`w-[100%] h-[80vh] overflow-hidden relative`}>
      <div className="absolute min-w-[100%] min-h-[100%] z-[100] bg-[rgba(0,0,0,0.3)] flex justify-center items-center text-white flex-col gap-5">
        <h1 className="text-3xl md:text-5xl flex flex-col font-thin md:leading-[70px] text-center">
          Summer Collection
          <span className="font-bold">FLAT 50% Off</span>
        </h1>
        <button className="bg-black text-white px-7 md:px-24 py-3 rounded-full font-semibold text-lg">
          Buy Now
        </button>
        <i
          className="fa-solid fa-angle-left absolute top-[50%] translate-[-50%] left-0 ml-5 md:ml-24 md:text-xl bg-[rgba(0,0,0,0.6)] p-3 rounded-full cursor-pointer"
          onClick={prevSlide}
        ></i>
        <i
          className="fa-solid fa-angle-right absolute top-[50%] translate-[-50%] right-0 mr-5 md:mr-24 md:text-xl bg-[rgba(0,0,0,0.6)] p-3 rounded-full cursor-pointer"
          onClick={nextSlide}
        ></i>
      </div>
      <div
        className="min-w-full min-h-full flex transition-all duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imgs.map((img) => (
          <img
            key={img}
            className="min-w-[100%] object-cover object-center"
            src={img}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
