import React from "react";

const SingleProductImg = ({ images, selectedImg, changeImg }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[70%] mx-auto flex-col lg:flex-row lg:mx-0 lg:w-[50%] flex gap-3 lg:h-[60vh]">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[10%] flex lg:flex-col justify-center lg:justify-start gap-2 order-2 lg:order-1 self-center">
        {images.slice(0, 6).map((img) => (
          <img
          key={img}
            onClick={() => {
              changeImg(img);
            }}
            src={img}
            className={`cursor-pointer h-[50px] sm:h-[60px] rounded-md border-2  ${
              selectedImg === img ? "border-amber-600" : "border-gray-200"
            }`}
          />
        ))}
      </div>
      <div className="w-[85%] mx-auto lg:mx-0 lg:w-[90%] order-1 lg:order-2">
        <img
          src={selectedImg}
          className="w-full h-full rounded-lg border-[1px] border-gray-300"
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleProductImg;
