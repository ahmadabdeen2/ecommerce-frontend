import React from "react";
import { useGlobalContext } from "../contexts/globalContext.js";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const Account = () => {
  const { auth, userDetails } = useGlobalContext();

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    let response = await fetch(`${API_ENDPOINT}/products/orders/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
    });
    let data = await response.json();
    if (data) {
      setOrders(data);
      localStorage.setItem("userDetails", JSON.stringify(data));
    } else {
      alert("Invalid Credentials");
    }
  };

  useEffect(() => {
    const ok = async () => {
      // await getDeets();
      await getOrders();
    };

    ok();
  }, []);

  return (
    <>
      {auth ? (
        <div className="flex flex-col w-full px-5 min-h-[82vh] py-10">
          {" "}
          <p className="text-2xl font-poppins text-gray-900 dark:text-gray-200">
            Hello {userDetails[0]?.username}{" "}!

          </p>
          <p className="text-2xl font-poppins text-gray-900 dark:text-gray-200">
            You can check your past orders here
          </p>
          <div className="flex flex-col items-center justify-center">
            {orders.map((order, index) => {
              return (
                <div key={index} className="flex items-center  w-full border-b-2 py-5 border-gray-900 dark:border-gray-200">
                  <p className="text-lg font-poppins text-gray-900 dark:text-gray-200">
                    {" "}
                    Order id: {order.id}{" "}
                  </p>
                  <p className="text-lg font-poppins text-gray-900 dark:text-gray-200">
                    {" "}
                    &nbsp; Date Ordered:{" "}
                    {new Date(order.created).toLocaleDateString() +
                      " " +
                      new Date(order.created).toLocaleTimeString()}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </>
  );
};

export default Account;
