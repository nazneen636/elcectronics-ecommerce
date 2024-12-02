import React from "react";
import { NavLink } from "react-router-dom";

const Laptop = () => {
  return (
    <div>
      <ul className="flex gap-7 mb-10">
        <NavLink
          to="/"
          className="li font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all"
        >
          MSI GS Series
        </NavLink>
        <NavLink
          to="/"
          className="li font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all"
        >
          MSI GT Series
        </NavLink>
        <NavLink
          to="/"
          className="li font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all"
        >
          MSI GL Series
        </NavLink>
        <NavLink
          to="/"
          className="li font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all"
        >
          MSI GE Series
        </NavLink>
      </ul>
    </div>
  );
};

export default Laptop;
