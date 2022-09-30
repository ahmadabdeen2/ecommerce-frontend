import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../components";
import { useGlobalContext } from "../contexts/globalContext.js";
import { useState } from "react";
import Swal from 'sweetalert2';
import {Navigate, useNavigate} from 'react-router-dom'
const Cart = () => {
  let navigate = useNavigate();
  const {auth, cart} = useGlobalContext();
  const goToCheckout = () =>  {
    if (auth && cart.length > 0) {
      navigate("/checkout");
    } else if (!auth) {
      return Swal.fire({
        title: "Please Login",
        icon: "error",
        iconColor: "#7335C2",
        button: "Ok",
        buttonColor: "#7335C2",
      });
    } else if (cart.length === 0) {
      return Swal.fire({
        title: "Cart is empty",
        icon: "error",
        iconColor: "#7335C2",
        button: "Ok",
        buttonColor: "#7335C2",
      });
    }
  }
  return (
    <div className="flex flex-col p-5 min-h-[81vh]">
      <h1 className="text-4xl font-poppins font-light py-5 text-gray-900 dark:text-gray-200">
        {" "}
        Your Cart{" "}
      </h1>

      <ListItem />
      <div className="flex flex-col w-full items-end">
        
          <button onClick = {goToCheckout} className="bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 py-2 px-4 rounded-lg font-poppins font-light text-xl mt-5 w-full">
            {" "}
            Checkout{" "}
          </button>
        
      </div>
    </div>
  );
};

export default Cart;
