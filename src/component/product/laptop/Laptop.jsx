import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GS from "./GS";
import Gt from "./Gt";

const Laptop = () => {
  let [gs, setGs] = useState(true);
  let [gt, setGt] = useState(false);
  let [gl, setGl] = useState(false);
  let [ge, setGe] = useState(false);

  return (
    <div className="mb-10">
      <ul className="flex gap-7 mb-4">
        <li
          onClick={() => {
            setGs(true);
            setGs(false);
            setGs(false);
            setGs(false);
          }}
          className={`li cursor-pointer font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all ${
            gs ? "text-black after:w-full" : "text-gray_textTwo"
          }`}
        >
          MSI GS Series
        </li>
        <li
          onClick={() => {
            setGt(false);
            setGt(true);
            setGt(false);
            setGt(false);
          }}
          className="li cursor-pointer font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all"
        >
          MSI GT Series
        </li>
        <li
          onClick={() => {
            setGl(false);
            setGl(false);
            setGl(true);
            setGl(false);
          }}
          className="li cursor-pointer font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all"
        >
          MSI GL Series
        </li>
        <li
          onClick={() => {
            setGe(false);
            setGe(false);
            setGe(false);
            setGe(true);
          }}
          className="li cursor-pointer font-semibold text-base text-gray_textTwo leading-[140%] hover:text-black relative after:absolute after:w-0 after:h-[3px] after:bg-blue after:left-0 after:top-full hover:after:w-full duration-300 transition-all"
        >
          MSI GE Series
        </li>
      </ul>
      {gs && <GS />}
      {gt && <Gt />}
    </div>
  );
};

export default Laptop;
