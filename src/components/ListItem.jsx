import React from "react";
import { useGlobalContext } from "../contexts/globalContext.js";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const ListItem = (props) => {
  const { cart, setCart } = useGlobalContext();
  
  const addQuantity = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      newCart[index].quantity += 1;
    }
    setCart(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  };
  const removeQuantity = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      }
    }
    setCart(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  };
  const removeItem = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="flex flex-col">
      {cart.length ? (
        cart.map((item) => {
          return (
            <div className="flex border-b-2 py-4 w-full my-2 border-gray-900 dark:border-gray-200">
              <div className="flex w-full items-center">
                <Link to={`/product/${item.id}`}>
                  <p className="text-gray-900 dark:text-gray-200 font-poppins">
                    {" "}
                    {item?.name}{" "}
                  </p>
                </Link>
                <MdDeleteOutline
                  className="text-gray-900 dark:text-gray-200 text-2xl ml-2 cursor-pointer"
                  onClick={() => removeItem(item?.id)}
                />
                <p className="ml-auto text-gray-900 dark:text-gray-200 font-poppins ">
                  {" "}
                  ${item?.price * item?.quantity}{" "}
                </p>
                <button
                  className="text-2xl px-2 text-gray-900 dark:text-gray-200"
                  onClick={() => addQuantity(item?.id)}
                >
                  +
                </button>
                <button
                  className="text-2xl px-2 text-gray-900 dark:text-gray-200"
                  onClick={() => removeQuantity(item?.id)}
                >
                  -
                </button>
                <span className="text-2xl px-2 font-poppins text-gray-900 dark:text-gray-200">
                  {" "}
                  {item?.quantity}{" "}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-900 dark:text-gray-200 font-poppins text-3xl">
            {" "}
            No items in cart{" "}
          </p>
          <Link to="/">
            <button className="bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 px-4 py-2 rounded-lg mt-10">
              {" "}
              Shop Now{" "}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ListItem;
