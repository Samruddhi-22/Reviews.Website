import React from "react";

import Darkmode from './DarkMood/Darkmode';

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

// import {Link} from react-router-dom

// import logo from "../../assets/logoDog.svg";
import { NavLink,useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/login", {
        email,
        password,
      });
      if (response.data === "Logged in successfully.") {
        setIsLoggedIn(true);
        history("/", { state: { id: email } });
      } else if (response.data === "User not found.") {
        alert("User not found. Please sign up.");
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  };

  let Links = [
    { name: "HOME", link: "/" },
    // { name: "CART", link: "/cart" },
    { name: "HELP", link: "/help" },
    { name: "ABOUT", link: "/about" },
    
  ];
  let [open, setOpen] = useState(false);


    const handleLogout = (e)=>{
      localStorage.removeItem("authToken");
      navigate("/login")
    }

  return (
    <div className="navbar shadow-md w-full  fixed z-50 top-0 left-0  ">
      <div className="md:flex items-center justify-between bg-[#FFBB7A] dark:bg-slate-900 py-4 md:px-10 px-7 ">
        {/* Logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <a href="/">
            
          </a>
          <span className="text-white "> The Daily Pulse</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-10 cursor-pointer md:hidden w-7 h-7 "
          style={{ zIndex: 100 }}
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link items */}
        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#FFBB7A] dark:bg-slate-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-0 ease-out ${
            open ? "top-20 z-[-1]" : "top-[-490px]"
          }`}
          style={{ zIndex: 90 }}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <a
                href={link.link}
                className="text-white hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          {localStorage.getItem("authToken") ? (
            <>
              <NavLink to="/myblogs">
                <button className="btn  hover:bg-[#ea9f59] text-white md:ml-8 font-semibold rounded  md:static ">
                  My Blogs
                </button>
              </NavLink>
            </>
          ) : (
            ""
          )}

          {!localStorage.getItem("authToken") ? (
            <>
              <NavLink to="/signup">
                <button className="btn   hover:bg-[#ea9f59] text-white md:ml-8 font-semibold   rounded duration-300 md:static  ">
                  Signup
                </button>
              </NavLink>
            </>
          ) : (
            <>
               <NavLink to="/newblog">
                <button className="btn  hover:bg-[#ea9f59] text-white md:ml-8 font-semibold rounded  md:static ">
                  New Blog
                </button>
                </NavLink>
              <NavLink to="/login">
                <button className="btn bg-[#f41818] hover:bg-[#ea9f59] text-white md:ml-8 font-semibold rounded  md:static " onClick={handleLogout}>
                  Logout
                </button>
              </NavLink>
            </>
          )}

          <div className="flex md:flex-row flex-col gap-3">
            <div className="ml-2">
              <Darkmode />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
