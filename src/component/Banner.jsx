import React, { Component } from "react";
import banner1 from "../assets/banner1.png";
import Container from "../layers/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  RiArrowDropLeftLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
        background: "rgba(37,41,49, .7)",
        width: "36px",
        height: "48px",
        color: "white",
        right: "0px",
        fontSize: "30px",
      }}
      onClick={onClick}
    >
      <RiArrowRightSLine />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
        background: "rgba(37,41,49, .7)",
        width: "36px",
        height: "48px",
        color: "white",
        left: "0px",
        fontSize: "30px",
        zIndex: "10",
      }}
      onClick={onClick}
    >
      <RiArrowLeftSLine />
    </div>
  );
}
const Banner = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Container>
        <div className="slider_container">
          <Slider {...settings}>
            <div className="">
              <img src={banner1} alt="" />
            </div>
            <div>
              <img src={banner1} alt="" />
            </div>
            <div>
              <img src={banner1} alt="" />
            </div>
            <div>
              <img src={banner1} alt="" />
            </div>
            <div>
              <img src={banner1} alt="" />
            </div>
            <div>
              <img src={banner1} alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
