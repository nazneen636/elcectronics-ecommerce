import React, { useState } from "react";
import Container from "../layers/Container";
import { FaAngleDown, FaFacebookSquare, FaTimes } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from "../assets/logo.png";
import Li from "../layers/Li";
import { Link } from "react-router-dom";
import Btn from "../layers/Btn";
import { FaMagnifyingGlass } from "react-icons/fa6";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import { TfiShoppingCart } from "react-icons/tfi";

const Navbar = () => {
  let [activeLink, SetActiveLink] = useState("/");
  let [searchOpen, setSearchOpen] = useState(false);
  let [menuOff, setMenuOff] = useState(false);
  let handleActiveLink = (path) => {
    SetActiveLink(path);
  };
  let handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <nav className="">
      {/* ==================nav top part========== */}
      <div className="navTop py-4 bg-primary_bgColor">
        <Container className="text-white flex justify-between items-center font-semibold text-[12px]">
          <div className="left flex gap-[10px] items-center">
            <p className="">Mon-Thu: 9:00 AM - 5:30 PM</p>
            <FaAngleDown />
          </div>
          <div className="middle text-[#ACACAC]">
            Visit our showroom in 1234 Street Adress City Address, 1234 &nbsp;
            <a
              className="text-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:top-[102%] after:rounded-[15px]"
              href="#"
            >
              Contact Us
            </a>
          </div>
          <div className="right flex items-center gap-[14px]">
            <p className="">Call Us: (00) 1234 5678</p>
            <div className="icons flex items-center gap-2">
              <FaFacebookSquare className="text-xl" />
              <PiInstagramLogoFill className="text-xl" />
            </div>
          </div>
        </Container>
      </div>
      {/* ==================nav top part========== */}

      {/* ==================nav bottom part========== */}
      <div className="navBottom">
        <Container className="py-6 flex justify-between items-center">
          {/* =================logo==================== */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* =================logo==================== */}

          {/* =================menu==================== */}
          <div
            className={`menu duration-500 transition-all ${
              searchOpen == menuOff
                ? "block opacity-100 visible"
                : "hidden opacity-0 invisible"
            }`}
          >
            <ul className="flex gap-1">
              <Li
                to="/"
                isActive={activeLink === "/"}
                onClick={() => handleActiveLink("/")}
                liText="Laptops"
              />
              <Li
                isActive={activeLink === "/desktops"}
                onClick={() => handleActiveLink("/desktops")}
                to="/"
                liText="Desktop PCs"
              />
              <Li
                isActive={activeLink === "/networking"}
                onClick={() => handleActiveLink("/networking")}
                to="/"
                liText="Networking Devices"
              />
              <Li
                isActive={activeLink === "/printers"}
                onClick={() => handleActiveLink("/printers")}
                to="/"
                liText="Printers & Scanners"
              />
              <Li
                isActive={activeLink === "/pc"}
                onClick={() => handleActiveLink("/pc")}
                to="/"
                liText="PC Parts"
              />
              <Li
                isActive={activeLink === "/other-Products"}
                onClick={() => handleActiveLink("/other-Products")}
                to="/"
                liText="All Other Products"
              />
              <Li
                isActive={activeLink === "/repair"}
                onClick={() => handleActiveLink("/repair")}
                to="/"
                liText="Repairs"
              />
              <li>
                <Btn className="ml-3" btnText="Our Deals" />
              </li>
            </ul>
          </div>
          {/* =================menu==================== */}

          {/* =================search cart user==================== */}
          <div className="flex items-center gap-[25px]">
            <div onClick={handleSearchOpen} className="search">
              <div className="relative">
                <FaMagnifyingGlass
                  className={` ${searchOpen ? "hidden" : "block"}`}
                />
                {/* <FaTimes
                  className={`absolute left-0 top-0 ${
                    searchOpen ? "block" : "hidden"
                  }`}
                /> */}
              </div>
              <div className="w-full">
                <input
                  type="search"
                  placeholder="Search entiere store here..."
                  className={`w-[1126px] bg-[#F5F7FF] border border-primary_bgColor rounded-[31px] py-6 px-[30px] outline-none ${
                    searchOpen ? "block" : "hidden"
                  }`}
                />
                {/* <FaMagnifyingGlass className="text-primary_red" /> */}
              </div>
            </div>
            {/* ------------------------------- */}
            <div className="cart">
              <img src={cart} alt="" />
            </div>
            {/* --------------------------------------- */}
            <div className="user">
              <img src={user} alt="" />
            </div>
          </div>
          {/* =================search cart user==================== */}
        </Container>
      </div>
      {/* ==================nav bottom part========== */}
    </nav>
  );
};

export default Navbar;
