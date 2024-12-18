import React from "react";
import msiLaptop from "../../../../public/laptop/laptop.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";
import { addToCart } from "../../../feature/cartSlice";

const Gt = () => {
  let items = useSelector((state) => state.allCart.data);
  let dispatch = useDispatch();

  const msiGsProduct = Array.isArray(items?.products)
    ? items.products.filter((item) => item.isMsiGT)
    : [];

  return (
    <div className="grid grid-cols-6">
      <div className="relative">
        <img className="h-full" src={msiLaptop} alt="" />
        <div className="w-full h-full absolute left-1/2 top-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center -translate-x-1/2">
          <h3 className="text-[22px] w-[150px] font-bold leading-[130%] text-center">
            MSI Laptops
          </h3>
          <Link to="#" className="underline absolute bottom-8">
            See all products
          </Link>
        </div>
      </div>
      {msiGsProduct.map((items, index) => (
        <ProductItem
          onClick={() => dispatch(addToCart(items))}
          key={index}
          productId={items.id}
          productStock={items.stock}
          productImg={items.image}
          productTitle={items.title}
          oldPrice={items.oldPrice}
          newPrice={items.price}
        />
      ))}
    </div>
  );
};

export default Gt;
