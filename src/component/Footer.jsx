import React from "react";
import Container from "../layers/Container";
import Btn from "../layers/Btn";
import FooterLi from "../layers/FooterLi";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import visa from "../assets/payment/visa.png";
import ameExpress from "../assets/payment/american-express.png";
import maestro from "../assets/payment/maestro.png";
import paypal from "../assets/payment/paypal.png";
import discover from "../assets/payment/discover.png";

const Footer = () => {
  return (
    <div className="bg-primary_bgColor text-white pt-[47px] pb-5">
      <Container>
        {/* top part */}
        <div className="top flex justify-between items-center mb-[45px]">
          <div className="left">
            <h2 className="font-medium text-[38px] leading-[132%]">
              Sign Up To Our Newsletter.
            </h2>
            <p className="font-light text-[16px] leading-[132%] opacity-90 tracking-wide mt-[9px]">
              Be the first to hear about the latest offers
            </p>
          </div>
          <div className="right flex gap-6 max-w-[565px]">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-2 border-white md:w-[391px] rounded py-2 px-4 outline-none"
            />
            <Btn
              className="bg-blue text-white hover:opacity-80 duration-300 transition-all"
              btnText="Subscribe"
            />
          </div>
        </div>
        {/* top part */}

        {/* menu part */}
        <div className="menu flex justify-between mb-9">
          <div className="menu1">
            <h4 className="font-semibold text-gray_textTwo mb-8">
              Information
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLi to="/" footerLiText="About Us" />
              <FooterLi to="/" footerLiText="About Zip" />
              <FooterLi to="/" footerLiText="Privacy Policy" />
              <FooterLi to="/" footerLiText="Search" />
              <FooterLi to="/" footerLiText="Terms" />
              <FooterLi to="/" footerLiText="Orders and Returns" />
              <FooterLi to="/" footerLiText="Contact Us" />
              <FooterLi to="/" footerLiText="Advanced Search" />
              <FooterLi to="/" footerLiText="Newsletter Subscription" />
            </ul>
          </div>
          <div className="menu2">
            <h4 className="font-semibold text-gray_textTwo mb-8">PC Parts</h4>
            <ul className="flex flex-col gap-3">
              <FooterLi to="/" footerLiText="CPUS" />
              <FooterLi to="/" footerLiText="Add On Cards" />
              <FooterLi to="/" footerLiText="Hard Drives (Internal)" />
              <FooterLi to="/" footerLiText="Graphic Cards" />
              <FooterLi to="/" footerLiText="Keyboards / Mice" />
              <FooterLi
                to="/"
                footerLiText="Cases / Power Supplies / Cooling"
              />
              <FooterLi to="/" footerLiText="RAM (Memory)" />
              <FooterLi to="/" footerLiText="Software" />
              <FooterLi to="/" footerLiText="Speakers / Headsets" />
              <FooterLi to="/" footerLiText="Motherboards" />
            </ul>
          </div>
          <div className="menu3">
            <h4 className="font-semibold text-gray_textTwo mb-8">
              Desktop PCs
            </h4>
            <ul className="flex flex-col gap-4">
              <FooterLi to="/" footerLiText="Custom PCs" />
              <FooterLi to="/" footerLiText="Servers" />
              <FooterLi to="/" footerLiText="MSI All-In-One PCs" />
              <FooterLi to="/" footerLiText="HP/Compaq PCs" />
              <FooterLi to="/" footerLiText="ASUS PCs" />
              <FooterLi to="/" footerLiText="Tecs PCs" />
            </ul>
          </div>
          <div className="menu4">
            <h4 className="font-semibold text-gray_textTwo mb-8">Laptops</h4>
            <ul className="flex flex-col gap-3">
              <FooterLi to="/" footerLiText="Evryday Use Notebooks" />
              <FooterLi to="/" footerLiText="MSI Workstation Series" />
              <FooterLi to="/" footerLiText="MSI Prestige Series" />
              <FooterLi to="/" footerLiText="Tablets and Pads" />
              <FooterLi to="/" footerLiText="Netbooks" />
              <FooterLi to="/" footerLiText="Infinity Gaming Notebooks" />
            </ul>
          </div>
          <div className="menu5">
            <h4 className="font-semibold text-gray_textTwo mb-8">Address</h4>
            <ul className="flex flex-col gap-3">
              <FooterLi
                to="/"
                footerLiText="Address: 1234 Street Adress City Address, 1234"
              />
              <li>
                <Link
                  to="tel:1234 5678"
                  className="font-light text-sm opacity-90"
                >
                  Phones:
                  <span className="text-[#01A4FF]"> (00) 1234 5678</span>
                </Link>
              </li>
              <FooterLi
                to="/"
                footerLiText="We are open: Monday-Thursday: 9:00 AM - 5:30 PM"
              />
              <FooterLi to="/" footerLiText="Friday: 9:00 AM - 6:00 PM" />
              <FooterLi to="/" footerLiText="Saturday: 11:00 AM - 5:00 PM" />
              <li>
                <Link
                  to="mailto:shop@email.com"
                  className="font-light text-sm opacity-90"
                >
                  E-mail: <span className="text-[#01A4FF]">shop@email.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* menu part */}
        <hr className="border border-[#f0f0f034]" />
        {/* social media or payment part */}
        <div className="bottom flex justify-between mt-4">
          <div className="social-media flex gap-[14px]">
            <a href="#" className="">
              <FaFacebookSquare />
            </a>
            <a href="#" className="">
              <RiInstagramFill />
            </a>
          </div>
          <div className="paymentMethod flex gap-[10px]">
            <a href="#" className="">
              <img src={paypal} alt={paypal} />
            </a>
            <a href="#" className="">
              <img src={visa} alt={visa} />
            </a>
            <a href="#" className="">
              <img src={discover} alt={discover} />
            </a>
            <a href="#" className="">
              <img src={maestro} alt={maestro} />
            </a>
            <a href="#" className="">
              <img src={ameExpress} alt={ameExpress} />
            </a>
          </div>
          <div className="copyright">
            <p className="text-white opacity-60">
              Copyright © 2020 Shop Pty. Ltd.
            </p>
          </div>
        </div>
        {/* social media or payment part */}
      </Container>
    </div>
  );
};

export default Footer;
