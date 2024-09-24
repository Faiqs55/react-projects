import React from "react";

const ProductCard = (props) => {
  return (
    <div className="flex flex-col">
      <div className="h-[300px]">
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
          <i class="border-[1px] border-gray-200 text-amber-700 cursor-pointer rounded-lg p-2 text-center fa-sharp-duotone fa-solid fa-cart-shopping text-lg"></i>
        </div>
        <div className="flex justify-between items-center w-full mt-1">
            <div className="flex gap-2 items-center">
                <span className="font-semibold text-lg">$ {props.price}</span>
                <span className="font-semibold text-sm text-gray-500 line-through">$ 800</span>
            </div>
            <span className="text-green-600 font-semibold">{props.discount}% OFF</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
