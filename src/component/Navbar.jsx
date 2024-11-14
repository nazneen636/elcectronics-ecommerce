import React, { useEffect, useRef, useState } from "react";
import Container from "../layers/Container";
import { FaAngleDown, FaBars, FaFacebookSquare, FaTimes } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from "../assets/logo.png";
import smLogo from "../assets/whiteLogo.png";
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
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  const [todayHours, setTodayHours] = useState(null);
  let [menuShow, SetMenuShow] = useState(false);
  let [lgDevice, SetLgDevice] = useState(false);
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
  const openingHours = {
    1: {
      label: "Mon-Thu: 9:00 AM - 5:30 PM",
      start: { hour: 9, minute: 0 },
      end: { hour: 17, minute: 30 },
    },
    2: {
      label: "Mon-Thu: 9:00 AM - 5:30 PM",
      start: { hour: 9, minute: 0 },
      end: { hour: 17, minute: 30 },
    },
    3: {
      label: "Mon-Thu: 9:00 AM - 5:30 PM",
      start: { hour: 9, minute: 0 },
      end: { hour: 17, minute: 30 },
    },
    4: {
      label: "Mon-Thu: 9:00 AM - 5:30 PM",
      start: { hour: 9, minute: 0 },
      end: { hour: 17, minute: 30 },
    },
    5: {
      label: "Fri: 9:00 AM - 6:00 PM",
      start: { hour: 9, minute: 0 },
      end: { hour: 18, minute: 0 },
    },
    6: {
      label: "Sat: 9:00 AM - 6:00 PM",
      start: { hour: 11, minute: 0 },
      end: { hour: 17, minute: 30 },
    },
    0: null, // Closed on Sunday
  };

  // Check if the store is open based on current time
  const checkIfOpen = () => {
    const currentTime = new Date();
    const currentDay = currentTime.getDay();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const hours = openingHours[currentDay];
    if (!hours) {
      setTodayHours(null);
      return false; // Store is closed today
    }

    setTodayHours(hours);

    const { start, end } = hours;
    return (
      (currentHour > start.hour ||
        (currentHour === start.hour && currentMinute >= start.minute)) &&
      (currentHour < end.hour ||
        (currentHour === end.hour && currentMinute <= end.minute))
    );
  };

  useEffect(() => {
    function size() {
      if (window.innerWidth > 1024) {
        SetLgDevice(false);
        SetMenuShow(true);
      } else {
        SetLgDevice(true);
        SetMenuShow(false);
      }
    }
    size();
    window.addEventListener("resize", size);
  }, []);

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
      <div className="navTop py-4 bg-primary_bgColor px-7 xl:px-0">
        <Container className="text-white flex justify-between items-center font-semibold text-[12px]">
          {/* shop info- */}
          <div
            onClick={handleShopInfo}
            ref={shopInfoRef}
            className="ml-12 xl:ml-0 left flex gap-[10px] items-center cursor-pointer relative"
          >
            <p className="openTime">
              {isOpen ? todayHours.label : "We are closed right now"}
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

          <div className="middle text-[#ACACAC] flex">
            <p className="hidden xl:block">
              Visit our showroom in 1234 Street Adress City Address, 1234 &nbsp;
            </p>
            <a
              className="text-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:top-[102%] after:rounded-[15px]"
              href="/contact/Us"
            >
              Contact Us
            </a>
          </div>
          {/* call us */}
          <div className="right items-center gap-[14px] hidden xl:flex">
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
      <div className="navBottom h-[92px] bg-blue xl:bg-transparent text-white xl:text-primary_textColor">
        <Container className="relative py-6 flex px-3 xl:px-0 justify-between items-center">
          {/* =================logo==================== */}
          <div className="logo">
            {!lgDevice ? (
              <img src={logo} alt="logo" />
            ) : (
              <div
                className="absolute left-1 top-[-40px] bg-blue w-14 h-12 rounded-t-[50%] flex items-center justify-center
              "
              >
                <img src={smLogo} alt="logo" className="" />
              </div>
            )}
          </div>
          {/* =================logo==================== */}

          {/* =================menu==================== */}
          {!searchOpen && (
            <div className={`menu duration-0 transition-all`}>
              <div
                className={`absolute left-0 z-50 xl:static  w-full xl:w-auto bg-white xl:bg-transparent p-5 md:p-0 duration-300 transition-transform ease-in-out ${
                  menuShow
                    ? "opacity-100 visible top-[98%]"
                    : "opacity-0 invisible top-[50%]"
                }`}
              >
                <div className="xl:hidden flex items-center justify-between pb-5 border-b border-b-lineColor">
                  <img src={logo} alt={logo} />
                  <FaTimes
                    onClick={() => {
                      SetMenuShow(!menuShow);
                    }}
                    className="text-primary_textColor"
                  />
                </div>
                <ul className="flex flex-col xl:flex-row gap-1 mt-4 xl:mt-0 w-full xl:w-auto">
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
                    <Btn
                      className="xl:ml-3 inline-block px-[50px] md:px-[26px]"
                      btnText="Our Deals"
                    />
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* ======hamburger==== */}
          <div
            onClick={() => {
              SetMenuShow(!menuShow);
            }}
            className="hamburger text-xl xl:hidden absolute left-3 top-[41%]"
          >
            <FaBars className="text-white" />
          </div>
          {/* ======hamburger==== */}

          {/* lg device search bar== */}
          <div
            ref={searchRef}
            className={`hidden absolute right-[138px] transform transition-all duration-700 ease-in-out xl:flex items-center ${
              searchOpen ? "w-[80%]" : "xl:w-0 w-[80%]"
            } bg-white rounded-full px-5 py-3 border border-[#7676764e] shadow-md overflow-hidden`}
            style={{
              opacity: searchOpen ? 1 : 0, // Fade effect
            }}
          >
            <input
              type="text"
              placeholder="Search entire store here..."
              className={`flex-grow outline-none border-none bg-transparent text-base px-2 transition-opacity duration-500 ${
                searchOpen
                  ? "opacity-100 xl:opacity-100 xl:block"
                  : "opacity-100 xl:opacity-0 xl:hidden"
              }`}
            />
            <FaMagnifyingGlass className="" />
          </div>
          {/* lg device search bar== */}

          {/* sm device search bar== */}
          <div className="xl:hidden bg-white rounded-full px-4 py-3 border border-[#7676764e] shadow-md overflow-hidden flex items-center gap-2 w-[68%]">
            <FaMagnifyingGlass className="text-lineColor" />

            <input
              type="text"
              placeholder="Search here"
              className={`flex-grow outline-none border-none bg-transparent text-sm transition-opacity duration-500 placeholder:text-lineColor text-primary_textColor`}
            />
          </div>
          {/* sm device search bar== */}

          {/* =================menu==================== */}

          {/* =================search cart user==================== */}
          <div className="flex items-center ml-[-14px] md:ml-0 gap-3 xl:gap-[25px]">
            <button onClick={toggleSearch} className="focus:outline-none">
              {searchOpen ? (
                <IoClose className="text-2xl text-blue" /> // Close icon when search is open
              ) : (
                <FaMagnifyingGlass className="hidden xl:block" />
              )}
            </button>
            {/* ------------------------------- */}
            <div className="cart">
              <RiShoppingCartLine className="text-2xl -scale-x-100" />
            </div>
            {/* --------------------------------------- */}
            <div className="user">
              <img src={user} alt="" className="w-9 h-9" />
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
