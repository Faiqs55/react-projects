import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

const Gallery = ({ title, subtitle, card, data, nav  }) => { 
  const [cardData, setCardData] = useState(data);
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (data && card == "product") {
      const newArr = [];
      data.forEach((val, index) => {
        if (!newArr.includes(val.category.title)) {
          newArr.push(val.category.title); 
        }
      });
      setCategoryData(newArr);
    }
  }, [data]);  

  useEffect(() => {
    if (category === "All") {
      setCardData(data);
      return;
    }
    const filteredArr = data.filter((val) => val.category.title === category);
    setCardData(filteredArr);
  }, [category]);

  return (
    <div className="px-5 lg:px-28 flex flex-col items-center my-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h3 className="text-gray-500 mt-1">{subtitle}</h3>
      {nav && (
        <ul className="sm:slef-start flex-wrap flex justify-between sm:justify-start w-full sm:gap-5 my-3">
          <li
            className={`text-sm sm:text-base cursor-pointer pb-[1px] px-1 ${
              category === "All"
                ? "text-amber-700 font-semibold border-b-2 border-amber-700"
                : "text-gray-500"
            }`}
            onClick={() => setCategory("All")}
          >
            All
          </li>
          {categoryData.map((cat) => (
            
            <li
              onClick={() => setCategory(cat)}
              key={cat}
              className={`text-sm sm:text-base cursor-pointer pb-[1px] px-1 ${
                category === cat
                  ? "text-amber-700 font-semibold border-b-2 border-amber-700"
                  : "text-gray-500"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 px-5 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full text-center">
        {!cardData && [1,2,3,4].map(item => (
          <div
          key={item}
          role="status"
          className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse"
        >
          <span className="sr-only">Loading...</span>
        </div>
        ))}
        {card === "category" && cardData &&
          cardData.map((cat) => <CategoryCard key={cat.$id} {...cat} />)}
        {card === "product" && cardData &&
          cardData.map((pro) => <ProductCard key={pro.$id} {...pro} />)} 
      </div>
    </div> 
  );
};

export default Gallery;
