import React from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Li = ({ to, liText, className, onClick, isActive }) => {
  return (
    <li className="flex justify-between items-center">
      <Link
        to={to}
        onClick={onClick}
        className={`font-normal leading-[34px] md:font-semibold text-[13px] md:text-sm py-2 md:px-3 duration-300 transition-all ${
          isActive
            ? "bg-black text-white rounded-[15px] md:rounded-[50px]"
            : "text-primary_textColor hover:bg-gray-200 hover:rounded-[20px]"
        } ${className}`}
      >
        {liText}
      </Link>
      <MdKeyboardArrowRight className="md:hidden text-primary_textColor" />
    </li>
  );
};

export default Li;
