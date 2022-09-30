import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import { useGlobalContext } from "../contexts/globalContext.js";

const Category = () => {
  const location = useLocation();
  const { products } = useGlobalContext();

  return (
    <section className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 font-poppins">
      <h2 className="text-xl sm:text-4xl dark:text-gray-200 text-gray-900 py-10">
        {" "}
        {location.pathname.replace("/", "").charAt(0).toUpperCase() +
          location.pathname.slice(2)}{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 bg-gray-200 dark:bg-gray-900 w-full px-5">
        {products
          ?.filter(
            (info) =>
              info.category.toLowerCase() ===
              location.pathname.replace("/", "").toLowerCase()
          )
          .map((info, index) => {
            return (
              <div className="product-container w-full py-10 px-6">
                <Link to={`/product/${info.id}`}>
                  <img
                    src={info?.image}
                    alt="product"
                    className="object-cover w-[100%] h-[400px] hover:opacity-70 cursor-pointer"
                    loading="lazy"
                  />
                </Link>
                <Link
                  to={`/product/${info.id}`}
                  className="flex justify-between items-center"
                >
                  <p className="font-poppins text-gray-900 dark:text-gray-200 pt-5 text-[15px] font-light cursor-pointer hover:text-gray-400 dark:hover:text-gray-500">
                    {" "}
                    {info.name}
                  </p>
                  <p className="font-poppins text-gray-900 dark:text-gray-200 pt-5 text-[15px] font-light cursor-pointer hover:text-gray-400 dark:hover:text-gray-500">
                    {" "}
                    ${info.price}
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Category;
