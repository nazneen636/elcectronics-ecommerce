import React from "react";
import { Link } from "react-router-dom";

const Li = ({ to, liText, className, onClick, isActive }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`font-semibold text-sm py-2 px-3 duration-300 transition-all ${
          isActive
            ? "bg-black text-white rounded-[50px]"
            : "text-primary_textColor hover:bg-gray-200 hover:rounded-[20px]"
        } ${className}`}
      >
        {liText}
      </Link>
    </li>
  );
};

export default Li;
