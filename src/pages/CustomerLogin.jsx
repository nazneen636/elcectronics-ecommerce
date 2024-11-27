import React, { useState } from "react";
import BredCumb from "../layers/BredCumb";
import Container from "../layers/Container";
import Btn from "../layers/Btn";
import { Link } from "react-router-dom";
import Card from "../component/Card";

const CustomerLogin = () => {
  let [email, setEmail] = useState();
  let [emailErr, setEmailErr] = useState();
  let [password, setPassword] = useState();
  let [passwordErr, setPasswordErr] = useState();

  const manageBtn = () => {
    if (!email) {
      setEmailErr("Email is required");
    }
    if (!password) {
      setPasswordErr("Password is required");
    }
  };

  const manageEmail = (e) => {
    let em = e.target.value;
    setEmail(em);
    setEmailErr("");
  };

  const managePassword = (e) => {
    let p = e.target.value;
    setPassword(p);
    setPasswordErr("");
  };
  return (
    <div>
      <Container>
        <BredCumb />
        <div className="flex pl-[117px] gap-9 mb-[58px]">
          <div className="w-[564px] flex flex-col gap-5 py-10 px-[58px] bg-light_BgShade">
            <h3 className="text-[18px] font-semibold">Registered Customers</h3>
            <p className="leading-[30px] text-sm font-light opacity-70">
              If you have an account, sign in with your email address.
            </p>
            <div className="name flex flex-col gap-1 relative">
              <label
                className="font-semibold text-[13px] leading-[210%]"
                htmlFor="email"
              >
                Email <span className="text-red">*</span>
              </label>
              <input
                onChange={manageEmail}
                value={email}
                className="w-[449px] text-base leading-[20px] border border-lineColor rounded outline-none px-[17px] py-[14px]"
                type="text"
                id="email"
                placeholder="Your Email"
              />
              <p className="text-red absolute left-0 top-full">{emailErr}</p>
            </div>
            <div className="password flex flex-col gap-1 relative">
              <label
                className="font-semibold text-[13px] leading-[210%]"
                htmlFor="password"
              >
                Your Name <span className="text-red">*</span>
              </label>
              <input
                onChange={managePassword}
                value={password}
                className="w-[449px] text-base leading-[20px] border border-lineColor rounded outline-none px-[17px] py-[14px]"
                type="text"
                id="password"
                placeholder="Password"
              />
              <p className="text-red absolute left-0 top-full">{passwordErr}</p>
            </div>
            <div className="flex gap-6 items-center mt-1">
              <Btn
                onClick={manageBtn}
                className="bg-blue text-white"
                btnText="Sign In"
              />
              <Link className="text-sm text-blue">Forgot Your Password?</Link>
            </div>
          </div>
          <div className="w-[564px] flex flex-col gap-5 py-10 px-[58px] bg-light_BgShade">
            <h3 className="text-[18px] font-semibold">Create An Account</h3>
            <p className="leading-[30px] text-sm font-light opacity-70">
              Creating an account has many benefits:
            </p>
            <ul className="flex flex-col gap-1 list-disc pl-[22px] font-light text-sm opacity-70">
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li> Track orders and more</li>
            </ul>
            <div className="flex gap-6 items-center mt-1">
              <Btn
                onClick={manageBtn}
                className="bg-blue text-white"
                btnText="Sign In"
              />
              <Link className="text-sm text-blue">Forgot Your Password?</Link>
            </div>
          </div>
        </div>
      </Container>
      <Card className="mb-[266px]" />
    </div>
  );
};

export default CustomerLogin;
