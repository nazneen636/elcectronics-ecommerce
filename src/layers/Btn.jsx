import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ btnText, className, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className={`inline-block py-2 px-[26px] text-blue text-sm font-semibold rounded-[50px] border-2 border-blue duration-200 transition-all hover:text-white hover:bg-blue ${className}`}
    >
      {btnText}
    </Link>
  );
};

export default Btn;
