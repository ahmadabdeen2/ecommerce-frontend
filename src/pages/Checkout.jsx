import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {useGlobalContext} from '../contexts/globalContext';
import { CheckoutForm } from "../components";
import {Navigate} from 'react-router-dom'
const stripePromise = loadStripe(
  "pk_test_51LirZXBJl49q98MGxDjWM4deuVKrw9ZRT0ldiwkH4Vkaeu13RuqYcvwYsgpJqPXNB82Wj2IGHACCZYVmbbl4gWcT00i7zeq0IH"
);

const Checkout = () => {
  const {auth, cart } = useGlobalContext();
  return (
    <>
    {auth ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    
    ) : (
      <Navigate to="/login" />
    )}
    </>
  );
};

export default Checkout;
