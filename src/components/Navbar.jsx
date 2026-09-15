import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between text-white w-full z-10 h-max px-2.5 py-1.5 sm:py-2 sm:px-15 items-center mb-2">
      <div className=" flex font-extrabold text-xl sm:text-2xl  cursor-pointer">
        <span className="">TodoER</span>
      </div>
      <ul className="flex flex-row  sm:gap-6 mt-0.5">
        <NavLink
          className="cursor-pointer  flex transition-all  px-2.5  rounded-full  hover:bg-[#00000047] justify-center items-center"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="cursor-pointer  flex transition-all  px-2.5  rounded-full  hover:bg-[#00000047] justify-center items-center"
          to="/about"
        >
          About Me
        </NavLink>
        <li className=" flex cursor-pointer transition-all py-1 rounded-full  hover:bg-[#00000047] justify-center items-center">
          <button
            className="border-0 cursor-pointer hover:rotate-90 transition-all mx-0.5 sm:mx-1.5"
            onClick={setDarkMode}
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              // Moon icon for dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                color="#fff"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                color="#fff"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
