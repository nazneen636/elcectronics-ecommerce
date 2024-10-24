import React, { useEffect, useRef, useState } from "react";
import Container from "../layers/Container";
import { FaAngleDown, FaFacebookSquare, FaTimes } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from "../assets/logo.png";
import Li from "../layers/Li";
import { Link } from "react-router-dom";
import Btn from "../layers/Btn";
import { FaMagnifyingGlass } from "react-icons/fa6";
import cart from "../assets/icons/cart.png";
import time from "../assets/icons/time.png";
import location from "../assets/icons/location.png";
import user from "../assets/user.png";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoClose, IoTriangle } from "react-icons/io5";
import { VscTriangleUp } from "react-icons/vsc";

const Navbar = () => {
  let [shopInfo, SetShopInfo] = useState(false);
  let [activeLink, SetActiveLink] = useState("/");
  let [searchOpen, setSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shopInfoRef = useRef(null);
  const searchRef = useRef(null);

  let handleShopInfo = () => {
    SetShopInfo(!shopInfo);
  };

  let handleActiveLink = (path) => {
    SetActiveLink(path);
  };
  let toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Check if the store is open based on current time
  const checkIfOpen = () => {
    const currentTime = new Date();
    const currentDay = currentTime.getDay(); // 0 is Sunday, 6 is Saturday
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Store hours (for example)
    const openingHours = {
      1: { start: { hour: 9, minute: 0 }, end: { hour: 17, minute: 30 } }, // Monday to Thursday
      2: { start: { hour: 9, minute: 0 }, end: { hour: 17, minute: 30 } },
      3: { start: { hour: 9, minute: 0 }, end: { hour: 17, minute: 30 } },
      4: { start: { hour: 9, minute: 0 }, end: { hour: 18, minute: 0 } }, // Friday
      5: { start: { hour: 11, minute: 0 }, end: { hour: 17, minute: 0 } }, // Saturday
      6: null, // Closed on Sunday
      0: null, // Closed on Sunday
    };

    const todayHours = openingHours[currentDay];

    if (!todayHours) {
      return false; // Store is closed today
    }

    const { start, end } = todayHours;

    const isOpenNow =
      (currentHour > start.hour ||
        (currentHour === start.hour && currentMinute >= start.minute)) &&
      (currentHour < end.hour ||
        (currentHour === end.hour && currentMinute <= end.minute));

    return isOpenNow;
  };

  useEffect(() => {
    setIsOpen(checkIfOpen());

    // Optional: Set an interval to check every minute to update the open/closed state
    const interval = setInterval(() => {
      setIsOpen(checkIfOpen());
    }, 60000); // Check every 1 minute

    return () => clearInterval(interval);
  }, []);

  // useEffect for useRef
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopInfoRef.current && !shopInfoRef.current.contains(event.target)) {
        SetShopInfo(false);
      }

      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shopInfoRef, searchRef]);
  // useEffect for useRef

  return (
    <nav className="">
      {/* ==================nav top part========== */}
      <div className="navTop py-4 bg-primary_bgColor">
        <Container className="text-white flex justify-between items-center font-semibold text-[12px]">
          {/* shop info- */}
          <div
            onClick={handleShopInfo}
            ref={shopInfoRef}
            className="left flex gap-[10px] items-center cursor-pointer relative"
          >
            <p className="openTime">
              {isOpen ? "We are open now!" : "We are closed right now"}
            </p>
            <FaAngleDown
              className={`duration-300 transition-all ${
                shopInfo ? "-rotate-180" : "rotate-0"
              }`}
            />
            <div
              className={`shopInfo cursor-auto absolute left-0 top-[150%] z-20 shadow-xl shadow-[#76767689]  w-[262px] bg-white py-2 duration-500 transition-all ${
                shopInfo ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <VscTriangleUp className="absolute left-6 -top-4 text-white text-2xl" />
              <div className="open flex items-start gap-3 py-3 px-[13px] border-b border-lineColor">
                <img src={time} alt="icon" />
                <div className="flex flex-col gap-3">
                  <p className="text-[12px] leading-[140%] text-primary_textColor tracking-wide">
                    We are open:
                  </p>

                  <p className="text-[13px] font-semibold text-gray_text">
                    Mon-Thu: &nbsp;
                    <span className="text-primary_textColor">
                      9:00 AM - 5:30 PM
                    </span>
                  </p>

                  <p className="text-[13px] font-semibold text-gray_text">
                    Fri: &nbsp;
                    <span className="text-primary_textColor">
                      9:00 AM - 6:00 PM
                    </span>
                  </p>

                  <p className="text-[13px] font-semibold text-gray_text">
                    Sat: &nbsp;
                    <span className="text-primary_textColor">
                      11:00 AM - 5:00 PM
                    </span>
                  </p>
                </div>
              </div>
              <div className="address flex items-start gap-3 border-b py-3 px-[13px] border-lineColor">
                <img src={location} alt="icon" />
                <p className="text-[13px] leading-[140%] text-primary_textColor opacity-90">
                  Address: 1234 Street Adress, City Address, 1234
                </p>
              </div>
              <div className="phoneEmail py-3 px-[13px]">
                <p className="text-[13px] text-primary_textColor">
                  <Link
                    to="tel:1234 5678"
                    className="font-light text-sm opacity-90"
                  >
                    Phones:
                    <span className="text-[#01A4FF]"> (00) 1234 5678</span>
                  </Link>
                </p>
                <p className="mt-1 text-[13px] text-primary_textColor">
                  <Link
                    to="mailto:shop@email.com"
                    className="font-light text-sm opacity-90"
                  >
                    E-mail:{" "}
                    <span className="text-[#01A4FF]">shop@email.com</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* shop info- */}

          <div className="middle text-[#ACACAC]">
            Visit our showroom in 1234 Street Adress City Address, 1234 &nbsp;
            <a
              className="text-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:top-[102%] after:rounded-[15px]"
              href="#"
            >
              Contact Us
            </a>
          </div>
          {/* call us */}
          <div className="right flex items-center gap-[14px]">
            <Link to="callto:1234 5678" className="">
              Call Us: (00) 1234 5678
            </Link>
            <div className="icons flex items-center gap-2">
              <Link to="">
                <FaFacebookSquare className="text-lg" />
              </Link>
              <Link to="">
                <PiInstagramLogoFill className="text-xl" />
              </Link>
            </div>
          </div>
          {/* call us */}
        </Container>
      </div>
      {/* ==================nav top part========== */}

      {/* ==================nav bottom part========== */}
      <div className="navBottom h-[92px]">
        <Container className="relative py-6 flex justify-between items-center">
          {/* =================logo==================== */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {/* =================logo==================== */}

          {/* =================menu==================== */}
          {!searchOpen && (
            <div className={`menu duration-0 transition-all`}>
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
          )}

          <div
            ref={searchRef}
            className={`absolute right-[138px] transform transition-all duration-700 ease-in-out flex items-center ${
              searchOpen ? "w-[80%]" : "w-0"
            } bg-white rounded-full px-5 py-3 border border-[#7676764e] shadow-md overflow-hidden`}
            style={{
              opacity: searchOpen ? 1 : 0, // Fade effect
            }}
          >
            <input
              type="text"
              placeholder="Search entire store here..."
              className={`flex-grow outline-none border-none bg-transparent text-base px-2 transition-opacity duration-500 ${
                searchOpen ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            />
            <FaMagnifyingGlass className="" />
          </div>
          {/* =================menu==================== */}

          {/* =================search cart user==================== */}
          <div className="flex items-center gap-[25px]">
            <button onClick={toggleSearch} className="focus:outline-none">
              {searchOpen ? (
                <IoClose className="text-2xl text-blue" /> // Close icon when search is open
              ) : (
                <FaMagnifyingGlass className="" />
              )}
            </button>
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
