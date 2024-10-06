import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  function calculateDiscountPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountPrice = originalPrice - discountAmount;
    return discountPrice;
}
  const [likedToggle, setLikedToggle] = useState(false);
  return (
    <Link to={`/shop/${props.slug}`} className="flex flex-col">
      <div className="h-[300px] relative">
        {likedToggle && (
          <i 
          className="fa-solid fa-heart absolute right-4 top-4 p-2 bg-slate-400 cursor-pointer rounded-full text-white"
           onClick={() => setLikedToggle(prev => !prev)}
          ></i>
        )}
        {!likedToggle && (
          <i 
          className="fa-regular fa-heart absolute right-4 top-4 p-2 bg-slate-400 cursor-pointer rounded-full text-white"
          onClick={() => setLikedToggle(prev => !prev)}
          ></i>
        )}
        <img
          className="object-center h-full w-full rounded-lg"
          src={props.mainIMG}
          alt=""
        />
      </div>
      <div className="flex p-1 w-full flex-col">
        <div className="flex justify-between w-full items-center">
          <div>
            <h3 className="text-left font-semibold">{props.name}</h3>
            <span className="text-sm text-gray-500 font-semibold">
              {props.subTitle.slice(0, 23)}...
            </span>
          </div>
          <i className="border-[1px] border-gray-200 text-amber-700 cursor-pointer rounded-lg p-2 text-center fa-sharp-duotone fa-solid fa-cart-shopping text-lg"></i>
        </div>
        <div className="flex justify-between items-center w-full mt-1">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-lg">$ {calculateDiscountPrice(props.price, props.discount)}</span>
            <span className="font-semibold text-sm text-gray-500 line-through">
              $ {props.price}
            </span>
          </div>
          <span className="text-green-600 font-semibold">
            {props.discount}% OFF
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
