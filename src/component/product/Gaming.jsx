import React from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import gm1 from "/gamingPc/game.png";
import { Link } from "react-router-dom";
import { addToCart } from "../../feature/cartSlice";

const Gaming = () => {
  let items = useSelector((state) => state.allCart.data);
  let dispatch = useDispatch();

  const gamingProduct = Array.isArray(items?.products)
    ? items.products.filter((item) => item.isGaming)
    : [];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 mb-[39px]">
        <div className="relative">
          <img className="h-full" src={gm1} alt="" />
          <div className="w-full h-full absolute left-1/2 top-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center -translate-x-1/2">
            <h3 className="text-[22px] w-[150px] font-bold leading-[130%] text-center">
              Custom Builds
            </h3>
            <Link to="#" className="underline absolute bottom-8">
              See all products
            </Link>
          </div>
        </div>
        {gamingProduct.map((items, index) => (
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
    </div>
  );
};

export default Gaming;
