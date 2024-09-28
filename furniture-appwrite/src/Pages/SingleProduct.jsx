import React, { useState } from "react";
import SingleProductImg from "../Components/SingleProductImg";
import ProductActions from "../Components/ProductActions";
import ProductDetails from "../Components/ProductDetails";

const SingleProduct = () => {
  const imgs = [
    "https://images.pexels.com/photos/11112731/pexels-photo-11112731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11112727/pexels-photo-11112727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17063465/pexels-photo-17063465/free-photo-of-red-and-green-vintage-armchairs-standing-on-a-wooden-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8135274/pexels-photo-8135274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17488645/pexels-photo-17488645/free-photo-of-gray-armchair-in-wooden-frame.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const imgChangeHandler = (img) => {
    setSelectedImg(img);
  };
  return (
    <main className="mt-[17vh] px-5 lg:px-14 xl:px-40">
      <div className="flex flex-col lg:flex-row gap-10 pt-10 mb-10">
        <SingleProductImg
          images={imgs}
          selectedImg={selectedImg}
          changeImg={imgChangeHandler}
        />
        <ProductActions />
      </div>
      <ProductDetails/>
    </main>
  );
};

export default SingleProduct;
