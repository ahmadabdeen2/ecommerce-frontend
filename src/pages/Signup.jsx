import React, { useState } from "react";
import { useGlobalContext } from "../contexts/globalContext.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {FormInput} from '../components'
import Swal from "sweetalert2";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const FormFields = [
    {
      label: "Username",
      type: "text",
      setVal: setUsername,
    },
    {
      label: "Email",
      type: "email",
      setVal: setEmail,
    },
    {
      label: "First Name",
      type: "text",
      setVal: setFirstName,
    },
    {
      label: "Last Name",
      type: "text",
      setVal: setLastName,
    },
    {
      label: "Phone",
      type: "text",
      setVal: setPhone,

    },
    {
      label: "Password",
      type: "password",
      setVal: setPassword,
    },
    {
      label: "Confirm Password",
      type: "password",
      setVal: setPassword2,
    },
  ];

  const {signup_url } = useGlobalContext();
  let navigate = useNavigate();

  const SignUpUser = async (e, username, password) => {
    e.preventDefault();
    if (password2 === "" || password === "") {
      return    Swal.fire({
        title: "Passwords do not match",
        icon: "error",
        iconColor: "#7335C2",
        button:"Ok",
        buttonColor: "#7335C2",
      });
  
  
    }

    let response = await fetch(signup_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,

      }),
    });
    let data = await response.json();
    if(data.username === username){
      alert("User Created Successfully")
      navigate("/login")
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-[83vh] overflow-hidden">
      <div className="w-[70%] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl font-poppins">
        <h1 className="text-3xl font-semibold text-center text-gray-900 font-poppins">
          Sign Up
        </h1>
        <form className="mt-6">
         {FormFields.map(({label, type, setVal, index}) => {
            return (
            <div key ={index}> 
            <FormInput label={label} type={type} setVal={setVal} key={index} />
         </div>
          )})}
        </form>
        <div className="mt-6">
            <button
              onClick={(e) => SignUpUser(e, username, password, password2, email, firstName, lastName, phone)}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-primary focus:outline-none focus:bg-primary"
            >
              SignUp
            </button>
          </div>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Have an account already?{" "}
          <Link to ={'/login'} className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
