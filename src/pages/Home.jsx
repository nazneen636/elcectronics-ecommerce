import React from "react";
import Banner from "../component/Banner";
import NewProduct from "../component/product/NewProduct";
import zip from "../assets/zipBanner.png";
import Container from "../layers/Container";
import Laptop from "../component/product/Laptop";
import Gaming from "../component/product/Gaming";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <NewProduct />
        <div className="py-[22px] bg-light_BgShade my-[18px]">
          <img src={zip} alt="banner" className="mx-auto" />
        </div>
        <Gaming />
        <Laptop />
      </Container>
    </div>
  );
};

export default Home;
