import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Rating } from "../components";
import { useGlobalContext } from "../contexts/globalContext";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { products , setCart, cart } = useGlobalContext();
  const addToCart = () => {
    const product = products.find((item) => item.id.toString() === id);
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id.toString() === id);
    if (index === -1) {
      newCart.push({ ...product, quantity });
    } else {
      newCart[index].quantity += quantity;
    }
    setCart(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      title: "Added to cart",
      text: "You can view your cart in the cart page",
      icon: "success",
      iconColor: "#7335C2",
      button:"Ok",
      confirmButtonColor: "#7335C2",
    });


  };

  return (
    <>
      {products
        .filter((inf) => inf.id.toString() === id)
        .map((info) => {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 px-6 bg-gray-200 dark:bg-gray-900 w-full font-poppins  py-16 min-h-screen">
              <img
                src={info?.image}
                className="w-[100%] h-[100%] object-cover pr-5"
                alt="product"
              />
              <div className="flex flex-col">
                <div className="flex items-start justify-between">
                  <p className="font-poppins  text-2xl sm:text-4xl font-light text-gray-900 dark:text-gray-200">
                    {info?.name}
                  </p>
                  <p className="font-poppins text-2xl sm:text-2xl font-light text-gray-900 dark:text-gray-200">
                    ${info?.price}
                  </p>
                </div>
                <p className="font-poppins text-2xl sm:text-xl font-light py-6 text-gray-900 dark:text-gray-200">
                  {info?.description}
                </p>
                <div className="flex items-center justify-between pt-10">
                  <div>
                    <button
                      className="text-2xl pr-2 text-gray-900 dark:text-gray-200"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      {" "}
                      +{" "}
                    </button>
                    <button
                      className="text-2xl px-2 text-gray-900 dark:text-gray-200"
                      onClick={() =>
                        quantity > 0
                          ? setQuantity(quantity - 1)
                          : setQuantity(0)
                      }
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="text-2xl px-2 font-poppins text-gray-900 dark:text-gray-200">
                      {" "}
                      {quantity}{" "}
                    </span>
                  </div>{" "}
                  <button onClick={() => addToCart()} className="bg-gray-900 dark:bg-gray-200 dark:text-gray-900 w-[30%] h-[60px] rounded-xl text-gray-200 text-xl">
                    {" "}
                    Add to cart
                  </button>
                </div>
                <Rating
                  value={info?.avg_rating}
                  text={`(${info?.no_of_ratings})`}
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductDetails;
