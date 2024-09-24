import React from "react";
import { features } from "../assets";
const Features = () => {
  const { tro, warr, ship, cus } = features;
  const data = [
    {
      img: tro,
      title: "High Quality",
      subTitle: "Crafted from Top Materials",
    },
    {
      img: warr,
      title: "Warranty Protection",
      subTitle: "Over 2 years",
    },
    {
      img: ship,
      title: "Free Shipping",
      subTitle: "Order Over 150$",
    },
    {
      img: cus,
      title: "24 / 7 Support",
      subTitle: "Dedicated Support",
    },
  ];
  return (
    <div className="hidden w-full lg:grid lg:grid-cols-2 xl:grid-cols-4 px-5 lg:px-24 bg-[#fff8f0] gap-5 lg:py-5">
      {data.map((item) => (
        <div
          key={item.title}
          className="flex max-h-full items-center justify-center gap-3"
        >
          <img className="h-[80px]" src={item.img} alt="" />
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className="text-gray-500">{item.subTitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
