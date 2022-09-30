import React, { useState, useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useGlobalContext } from "../contexts/globalContext";

import ApiService from "../helpers/stripeApi";
import { useNavigate } from 'react-router-dom';
const CheckoutForm = () => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  const { auth, userDetails, cart, setCart } =
    useGlobalContext();
  let [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const getTotalAmount = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  };


  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    ApiService.saveStripeInfo({
      email,
      payment_method_id: paymentMethod.id,
      amount: total,
    })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Payment Successful",
          icon: "success",
          iconColor: "#7335C2",
          button: "Ok",
          buttonColor: "#7335C2",
        });
        createOrder(userDetails[0].id);
        setCart([]);
        navigate("/account");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createOrder = async (id) => {
    if (cart.length > 0) {
      let response = await fetch(`${API_ENDPOINT}/products/orders/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify({
          user: id,
          ordered: true,
        }),
      });

      let data = await response.json();
      await createOrderItems(data);
    } else {
      return Swal.fire({
        title: "Cart is empty",
        icon: "error",
        iconColor: "#7335C2",
        button: "Ok",
        buttonColor: "#7335C2",
      });
    }
  };

  const createOrderItems = async (data) => {
    cart.forEach(async (item) => {
      await fetch(`${API_ENDPOINT}/products/orderitems/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify({
          product: item.id,
          order: data.id,
          quantity: item.quantity,
        }),
      });
    });

    setCart([]);
    return Swal.fire({
      title: "Order Placed",
      icon: "success",
      iconColor: "#7335C2",
      button: "Ok",
      buttonColor: "#7335C2",
    });
  };

  useEffect(() => {
    getTotalAmount();
  }, [cart]);

  return (
    
    <>
    
      <div className="relative flex flex-col justify-center min-h-[83vh] overflow-hidden">
        <div className="w-[70%] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl font-poppins">
          <h1 className="text-3xl font-semibold text-center text-gray-900 font-poppins">
            Checkout - Total Amount: {total}
          </h1>
          <h2 className="text-md font-semibold text-center text-primary font-poppins">
            Enter 4242 4242 4242 4242 as sample card number
          </h2>
          <form className="mt-6">
            <div className="pb-5">
              <label htmlFor="email" className="pr-5 w-[20%]">
                Email
              </label>
              <input
                className=" w-[85%] py-[0.5rem] mt-2 text-gray-900 bg-white   text-xs"
                id="email"
                name="name"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <CardElement onChange={() => handleChange} />
            <div className="mt-6">
              <button
                onClick={(e) => handleSubmit(e)}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-primary focus:outline-none focus:bg-primary"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
