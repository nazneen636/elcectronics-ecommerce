import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[136px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
