import React, { useState } from "react";
import Heading from "../layers/Heading";
import BredCumb from "../layers/BredCumb";
import Container from "../layers/Container";
import Btn from "../layers/Btn";
import { HiOutlinePhone } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Card from "../component/Card";

const ContactUs = () => {
  let [name, setName] = useState();
  let [nameErr, setNameErr] = useState();
  let [email, setEmail] = useState();
  let [emailErr, setEmailErr] = useState();
  let [phone, setPhone] = useState();
  let [phoneErr, setPhoneErr] = useState();
  let [msg, setMsg] = useState();
  let [msgErr, setMsgErr] = useState();

  let manageName = (e) => {
    let na = e.target.value;
    setName(na);
    setNameErr("");
  };

  let manageEmail = (e) => {
    let em = e.target.value;
    setEmail(em);
    setEmailErr("");
  };

  let managePhone = (e) => {
    let ph = e.target.value;
    setPhone(ph);
    setPhoneErr("");
  };

  let manageMsg = (e) => {
    let mg = e.target.value;
    setMsg(mg);
    setMsgErr("");
  };

  let manageBtn = (e) => {
    e.preventDefault();
    if (!name) {
      setNameErr("Name is required");
    }
    if (!email) {
      setEmailErr("Email is required");
    }
    if (!phone) {
      setPhoneErr("Phone is required");
    }
    if (!msg) {
      setMsgErr("Required");
    }
  };
  return (
    <div>
      <Container>
        <BredCumb />
        {/* =====================top=========== */}
        <div className="top__Part flex">
          <div className="left">
            <p className="text-base font-light leading-[30px] mb-5">
              We love hearing from you, our Shop customers. <br />
              Please contact us and we will make sure to get back to you as soon
              as we possibly can.
            </p>

            <form action="" className="mb-[123px]">
              <div className="formInput flex flex-wrap gap-[30px] mb-6">
                <div className="name flex flex-col gap-1 relative">
                  <label
                    className="font-semibold text-[13px] leading-[210%]"
                    htmlFor="name"
                  >
                    Your Name <span className="text-red">*</span>
                  </label>
                  <input
                    onChange={manageName}
                    value={name}
                    className="w-[449px] text-base leading-[20px] border border-lineColor rounded outline-none px-[17px] py-[14px]"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                  <p className="text-red absolute left-0 top-full">{nameErr}</p>
                </div>
                {/* ================================== */}
                <div className="email flex flex-col gap-1 relative">
                  <label
                    className="font-semibold text-[13px] leading-[210%]"
                    htmlFor="email"
                  >
                    Your Email <span className="text-red">*</span>
                  </label>
                  <input
                    onChange={manageEmail}
                    value={email}
                    className="w-[449px] text-base leading-[20px] border border-lineColor rounded outline-none px-[17px] py-[14px]"
                    type="text"
                    id="email"
                    placeholder="Your Email"
                  />
                  <p className="text-red absolute left-0 top-full">
                    {emailErr}
                  </p>
                </div>
                {/* ================================== */}
                <div className="name flex flex-col gap-1 relative">
                  <label
                    className="font-semibold text-[13px] leading-[210%]"
                    htmlFor="phone"
                  >
                    Your Phone Number <span className="text-red">*</span>
                  </label>
                  <input
                    onChange={managePhone}
                    value={phone}
                    className="w-[449px] text-base leading-[20px] border border-lineColor rounded outline-none px-[17px] py-[14px]"
                    type="text"
                    id="phone"
                    placeholder="Your Phone"
                  />
                  <p className="text-red absolute left-0 top-full">
                    {phoneErr}
                  </p>
                </div>
                {/* ================================== */}
                <div className="message flex flex-col gap-1 relative">
                  <label
                    className="font-semibold text-[13px] leading-[210%]"
                    htmlFor="message"
                  >
                    What’s on your mind?<span className="text-red">*</span>
                  </label>
                  <textarea
                    onChange={manageMsg}
                    value={msg}
                    className="w-[925px] text-base leading-[20px] border border-lineColor rounded outline-none px-[17px] py-[14px] h-[236px] resize-none"
                    type="text"
                    id="message"
                    placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                  ></textarea>
                  <p className="text-red absolute left-0 top-full">{msgErr}</p>
                </div>
                {/* ================================== */}
              </div>
              <Btn
                onClick={manageBtn}
                className="bg-blue text-white hover:bg-transparent hover:!text-blue mt-5"
                btnText="Submit"
              />
            </form>
          </div>
          {/* =======shop info============= */}
          <div className="right flex flex-col gap-4 bg-light_BgShade h-[404px] w-[411px] py-[26px] px-[30px]">
            <div className="location flex gap-[10px]">
              <TiLocation className="mt-1" />
              <div className="">
                <h4 className="font-semibold text-lg">Address:</h4>
                <p className="">1234 Street Adress City Address, 1234</p>
              </div>
            </div>
            <div className="phone flex gap-[10px]">
              <HiOutlinePhone className="mt-1" />
              <div className="">
                <h4 className="font-semibold text-lg">Phone:</h4>
                <a href="callto:(00)1234 5678" className="text-[13px]">
                  (00)1234 5678
                </a>
              </div>
            </div>
            <div className="location flex gap-[10px]">
              <IoTimeOutline className="mt-1" />
              <div className="text-nowrap">
                <h4 className="font-semibold text-lg">We are open:</h4>
                <p className="">Monday - Thursday: 9:00 AM - 5:30 PM</p>
                <p className="">Friday 9:00 AM - 6:00 PM</p>
                <p className="">Saturday: 11:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="location flex gap-[10px]">
              <MdOutlineMailOutline className="mt-1" />
              <div className="">
                <h4 className="font-semibold text-lg">E-mail:</h4>
                <a
                  href="mailto:shop@email.com"
                  className="text-blue text-[13px]"
                >
                  shop@email.com
                </a>
              </div>
            </div>
          </div>
          {/* =======shop info============= */}
        </div>
        {/* =====================top=========== */}
      </Container>

      {/* =====================bottom=========== */}
      <Card />
      {/* =====================bottom=========== */}
    </div>
  );
};

export default ContactUs;
