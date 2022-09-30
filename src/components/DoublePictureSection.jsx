import React from "react";
import { tshirt1, tshirt7 } from "../assets";
import { Link } from "react-router-dom";
import { Links } from "./index.js";

const infodata = [
  {
    title: "Discover men's collection now",
    img: tshirt1,
    links: "See More",
    linksurl: "/men",
  },
  {
    title: "Discover women's collection now",
    img: tshirt7,
    links: "See More",
    linksurl: "/women",
  },
];
const PictureLeftSection = () => {
  return (
    <section className="flex-col flex items-center justify-center px-2 sm:px-10 py-4 sm:py-10 bg-gray-200 dark:bg-gray-900">
      <h2 className="text-xl sm:text-4xl text-gray-900 dark:text-gray-200 font-poppins font-light pt-2 sm:py-5">
        {" "}
        Discover our latest collection{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {infodata.map((info, index) => {
          return (
            <div key={index} className="flex flex-col sm:px-5  my-4 ">
              <Link to={info.linksurl} className="cursor-pointer">
                <img
                  src={info.img}
                  alt="mens"
                  className="sm:w-[600px] sm:h-[600px] w-[100%] h-[400px] object-cover rounded-xl sm:my-5 my-3 px-4 sm:px-0"
                  title="mens"
                />
                <div className="flex justify-between items-center px-4 sm:px-0">
                  <p className="text-sm font-poppins italic font-light text-gray-900 dark:text-gray-200 underline cursor-pointer">
                    {" "}
                    {info.title}{" "}
                  </p>

                  <Links url={info.linksurl} text={"See More"} />
                </div>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PictureLeftSection;
