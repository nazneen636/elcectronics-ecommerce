import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BredCumb = () => {
  return (
    <div>
      <p className="mt-5 flex items-center gap-2 text-[12px] text-primary_textColor capitalize">
        <span className="">Home</span>
        <IoIosArrowForward className="text-blue" />
        {window.location.pathname.split("/")[1]}
        <span>{window.location.pathname.split("/")[2]}</span>
      </p>
      <h2 className="mt-5 mb-3 font-semibold text-[32px] text-primary_textColor capitalize">
        {window.location.pathname.split("/")[1]}
        <span className="ml-2 capitalize">
          {window.location.pathname.split("/")[2].charAt(0).toUpperCase() +
            window.location.pathname.split("/")[2].slice(1)}
        </span>
      </h2>
    </div>
  );
};

export default BredCumb;
