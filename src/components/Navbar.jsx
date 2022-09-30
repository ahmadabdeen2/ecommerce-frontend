import React, { useState } from "react";
import { useGlobalContext } from "../contexts/globalContext.js";
import { logodark, logolight } from "../assets";
import {
  MdMenu,
  MdClose,
  MdOutlineShoppingBag,
  MdOutlineLightbulb,
  MdDarkMode,
  MdLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarLeftLinks = [
  {
    id: 1,
    title: "Home",
    url: "",
  },
  {
    id: 2,
    title: "About",
    url: "about",
  },

  {
    id: 3,
    title: "Account",
    url: "account",
  },
];

const Navbar = () => {
  const { darkTheme, setDarkTheme, LogoutUser, auth } = useGlobalContext();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center dark:bg-gray-900 bg-gray-200 pt-4 pb-4 sticky top-0  border-b border-gray-900 dark:border-gray-200">
      <div
        onClick={() => setToggle(!toggle)}
        className="sm:hidden flex justify-start items-center text-[25px] flex-1 ml-4 text-gray-900 dark:text-gray-200"
      >
        {toggle ? <MdClose /> : <MdMenu />}
      </div>

      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        {NavbarLeftLinks.map((link, index) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] pl-5 text-gray-900 dark:text-gray-200`}
            >
              <Link to={`/${link.url}`}> {link.title} </Link>
            </li>
          );
        })}
      </ul>
      <Link to={"/"}>
        <img
          src={darkTheme ? logolight : logodark}
          alt="logo"
          className="sm:ml-8"
        />
      </Link>
      <div className="cart flex text-[25px] flex-1 justify-end pr-4 cursor-pointer">
       <Link to="/cart">
        <MdOutlineShoppingBag className="text-gray-900 dark:text-gray-200 mx-1" />
        </Link>
        <div
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-gray-900 dark:text-gray-200 mx-1"
        >

          {darkTheme ? <MdOutlineLightbulb /> : <MdDarkMode />}
        </div>
        {auth &&
          <MdLogout
            onClick={() => LogoutUser()}
            className="text-gray-900 dark:text-gray-200 mx-1"
          />
          }
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-gray-200 dark:bg-gray-900 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none sm:hidden flex flex-col justify-start items-center flex-1">
          {NavbarLeftLinks.map((link, index) => {
            return (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[15px] p-4 text-gray-900 dark:text-gray-200`}
              >
                <Link to={`/${link.url}`}> {link.title} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
