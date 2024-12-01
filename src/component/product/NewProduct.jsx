import React, { useEffect, useState } from "react";
import Container from "../../layers/Container";
import Heading from "../../layers/Heading";
import ProductItem from "./ProductItem";
import axios from "axios";
import Slider from "react-slick";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../feature/cartSlice";

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
        width: "36px",
        height: "48px",
        borderBottomLeftRadius: "30px",
        borderTopLeftRadius: "30px",
        background: "#66666638",
        color: "white",
        zIndex: "10",
        right: "0",
        fontSize: "15px",
      }}
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos />
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
        width: "36px",
        height: "48px",
        borderBottomRightRadius: "30px",
        borderTopRightRadius: "30px",
        background: "#66666638",
        color: "white",
        zIndex: "10",
        left: "0",
        fontSize: "15px",
      }}
      onClick={onClick}
    >
      <MdArrowBackIos />
    </div>
  );
}

const NewProduct = () => {
  let items = useSelector((state) => state.allCart.data);
  let dispatch = useDispatch();

  const newProduct = Array.isArray(items?.products)
    ? items.products.filter((item) => item.isNew)
    : [];

  console.log(items);
  console.log("Items from Redux:", items);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      <Container className="my-[37px]">
        <Heading headingText="New Products" className="mb-[14px]" />
        <div className="slider-container">
          <Slider {...settings}>
            {newProduct.map((item) => (
              <ProductItem
                onClick={() => dispatch(addToCart(item))}
                key={item.id}
                productId={item.id}
                productStock={item.stock}
                productImg={item.image}
                productTitle={item.title}
                oldPrice={item.oldPrice}
                newPrice={item.price}
              />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewProduct;
