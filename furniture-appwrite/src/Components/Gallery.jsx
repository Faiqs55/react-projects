import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

const Gallery = ({ title, subtitle, card, data, nav  }) => {
  const [cardData, setCardData] = useState(data);
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (card == "product") {
      const newArr = [];
      data.forEach((val, index) => {
        if (!newArr.includes(val.category)) {
          newArr.push(val.category);
        }
      });
      setCategoryData(newArr);
    }
  }, []);

  useEffect(() => {
    if (category === "All") {
      setCardData(data);
      return;
    }
    const filteredArr = data.filter((val) => val.category === category);
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
          {/* <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg> */}
          <span className="sr-only">Loading...</span>
        </div>
        ))}
        {card === "category" && cardData &&
          cardData.map((cat) => <CategoryCard key={cat.$id} {...cat} />)}
        {card === "product" &&
          cardData.map((pro) => <ProductCard key={pro.id} {...pro} />)}
      </div>
    </div>
  );
};

export default Gallery;
