import React, { useEffect, useState } from "react";
import Container from "../../layers/Container";
import Heading from "../../layers/Heading";
import ProductItem from "./ProductItem";
import axios from "axios";
import Slider from "react-slick";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

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
  let [product, setProduct] = useState([]);
  let [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get("../../../product.json");
        setProduct(res.data.products);

        const filterNewProducts = res.data.products.filter(
          (item) => item.isNew
        );
        setNewProduct(filterNewProducts);
      } catch (error) {
        console.error("Error fetching problem");
      }
    };
    getData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      <Container className="my-[37px]">
        <Heading headingText="New Products" className="mb-[14px]" />
        <div className="slider-container">
          <Slider {...settings}>
            {newProduct.map((item, index) => (
              <ProductItem
                key={index}
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
