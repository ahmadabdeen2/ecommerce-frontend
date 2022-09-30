import React, { useState } from "react";
import { useGlobalContext } from "../contexts/globalContext.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../components";
import Swal from "sweetalert2";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth, login_url } = useGlobalContext();

  const FormFields = [
    {
      label: "Username",
      type: "text",
      setVal: setUsername,
    },
    {
      label: "Password",
      type: "password",
      setVal: setPassword,
    },
  ];
  let navigate = useNavigate();

  const logInUser = async (e, username, password) => {
    e.preventDefault();
    if (username === "" || password === "") {
      return Swal.fire({
        title: "Username or Password is empty",
        icon: "error",
        iconColor: "#7335C2",
        button: "Ok",
        buttonColor: "#7335C2",
      });
    }
    let response = await fetch(login_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    let data = await response.json();
    if (data.token) {
      setAuth("Token " + data.token);
      localStorage.setItem("token", "Token " + data.token);

      navigate("/account");
    } else {
      return Swal.fire({
        title: "Invalid Credentials",
        icon: "error",
        iconColor: "#7335C2",
        button: "Ok",
        buttonColor: "#7335C2",
      });
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-[83vh] overflow-hidden">
      <div className="w-[70%] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl font-poppins">
        <h1 className="text-3xl font-semibold text-center text-gray-900 font-poppins">
          Login
        </h1>
        <form className="mt-6">
          {FormFields.map(({ label, type, setVal, index }) => {
            return (
              <div key={index}>
              <FormInput
                label={label}
                type={type}
                setVal={setVal}
                key={index}
              />
              </div>
              
            );
          })}
          {/* 
          <Link to="/" className="text-xs text-gray-900 hover:underline">
            Forgot Password?
          </Link> */}
          <div className="mt-6">
            <button
              onClick={(e) => logInUser(e, username, password)}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-primary focus:outline-none focus:bg-primary"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
