import React from "react";
import { Image } from "antd";
import new1 from "../../assets/newProduct/new1.png";
import { FaStar } from "react-icons/fa6";

const ProductItem = ({
  productStock,
  productImg,
  productTitle,
  oldPrice,
  newPrice,
}) => {
  console.log("Product Stock Value:", productStock);

  return (
    <div>
      <div className="w-[234px] h-[346px] p-6  flex flex-col gap-3 items-center justify-center">
        <div className="">
          {productStock === "In Stock" && (
            <span className="text-green">In Stock</span>
          )}
          {productStock === "Check Availability" && (
            <span className="text-red">Check Availability</span>
          )}
        </div>
        <Image src={productImg} />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <div className="icons text-orange-400 flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[12px] opacity-70">Reviews (4)</p>
          </div>
          <h3 className="text-[13px] ">{productTitle}</h3>
          <p className="mt-1 leading-[140%] line-through text-[13px] text-gray_textTwo">
            {oldPrice}
          </p>
          <p className="font-semibold text-sm leading-[140%]">${newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
