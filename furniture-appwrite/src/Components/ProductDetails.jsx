import React, { useState } from "react";

const ProductDetails = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="w-full sm:w-[90%] md:w-[70%] mx-auto  lg:mx-0 lg:w-[50%] mb-5">
      <div className="w-full hover:bg-gray-100 bg-gray-50">
        <div className="flex w-full py-5 px-4 justify-between items-center cursor-pointer " onClick={()=> {setShow(prev=>!prev)}}>
          <h2 className="text-xl font-semibold">Product Details</h2>
          <div className="flex items-center relative">
            <i className="fa-solid fa-chevron-up bg-gray-200 p-1 rounded-full absolute right-0"></i>
            <i className="fa-solid fa-chevron-down bg-gray-200 p-1 rounded-full absolute right-0"></i>
          </div>
        </div>
        <p className={`text-gray-500 pb-5 px-4 ${show ? 'block' : 'hidden'}`}>
          The Elite Comfort Sofa is a statement piece that blends style,
          comfort, and durability, making it an essential addition to any modern
          living space. Upholstered in high-quality, stain-resistant fabric,
          this sofa is available in a variety of rich, contemporary colors to
          complement any interior decor. The soft yet supportive cushions are
          filled with high-density foam, ensuring maximum comfort for both
          lounging and entertaining. A robust, kiln-dried hardwood frame ensures
          lasting durability, offering strong support for years of use. Designed
          with versatility in mind, the Elite Comfort Sofa features sleek,
          minimalist lines, accented by elegant wooden legs in a natural finish.
          The plush, overstuffed back cushions are removable for easy cleaning,
          and the deep seating allows for complete relaxation. Whether you're
          hosting guests or unwinding after a long day, this sofa promises an
          inviting and luxurious seating experience. Beyond aesthetics and
          comfort, this sofa embodies functionality. Its modular design allows
          for easy assembly and customization, making it ideal for various
          living spaces—from compact apartments to spacious homes. The Elite
          Comfort Sofa seamlessly blends form and function, creating an inviting
          ambiance that enhances any room it inhabits. Perfect for those who
          value both design and comfort, it's a timeless investment for the
          home.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
