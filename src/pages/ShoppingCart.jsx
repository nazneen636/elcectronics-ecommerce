import React from "react";
import Container from "../layers/Container";
import BredCumb from "../layers/BredCumb";
import Card from "../component/Card";
import { useSelector } from "react-redux";
import { Image } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { GrFormEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import paypal from "../assets/paypal.png";
import zip from "../assets/zipBanner.png";

const ShoppingCart = () => {
  // let items = useSelector((state) => state.allCart.cart);
  let items = useSelector((state) => state.allCart.cart);

  return (
    <div>
      <Container>
        <BredCumb />

        <div className="flex gap-[60px]">
          <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs  border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3 font-bold">
                    <p className="font-bold">Item</p>
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    <p className="font-bold">Price</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p className="font-bold">Qty</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p className="font-bold">Subtotal</p>
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4 w-[130px]">
                      <Image src={item.image} alt={item.title} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-sm">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4">
                      <div className="">
                        <button
                          className="flex gap-5 items-center px-5 py-2 bg-light_BgShade rounded-md"
                          type="button"
                        >
                          <span className="font-semibold text-base text-black">
                            1
                          </span>
                          <div className="flex flex-col">
                            <IoIosArrowUp className="p-1 cursor-pointer text-xl" />
                            <IoIosArrowDown className="p-1 cursor-pointer text-xl" />
                          </div>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      $599
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2 items-center">
                        <RxCrossCircled className="text-[#CACDD8] text-3xl cursor-pointer" />
                        <i className="fa-regular fa-pen-circle text-[#CACDD8] text-[26px] cursor-pointer"></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-[446px] max-h-fit py-5 px-6 bg-light_BgShade">
            <div className="pb-6 border-b border-b-[#cacdd8ab]">
              <h2 className="text-xl font-semibold">Summary</h2>
              <div className="w-full mt-[18px] flex justify-between items-center">
                <p className="text-[18px]">Estimate Shipping and Tax</p>
                <IoIosArrowUp />
              </div>
              <p className="text-[#666666] text-sm mt-3">
                Enter your destination to get a shipping estimate.
              </p>
              <div className="w-full mt-5 flex justify-between items-center">
                <p className="text-[18px]">Apply Discount Code</p>
                <IoIosArrowUp />
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <div className="flex justify-between font-semibold text-sm leading-[210%]">
                <h3 className="">Subtotal</h3>
                <p className="">$13,047.00</p>
              </div>
              <div className="flex justify-between font-semibold text-sm leading-[210%]">
                <h3 className="">Shipping</h3>
                <p className="">$21.00</p>
              </div>
              <p className="text-[#A2A6B0] text-[10px]">
                (Standard Rate - Price may vary depending on the
                item/destination. TECS Staff will contact you.)
              </p>
              <div className="mt-1 flex justify-between font-semibold text-sm leading-[210%]">
                <h3 className="">Tax</h3>
                <p className="">$1.91</p>
              </div>
              <div className="flex justify-between font-semibold text-sm leading-[210%]">
                <h3 className="">GST (10%)</h3>
                <p className="">$1.91</p>
              </div>
              <div className="flex justify-between font-semibold text-sm leading-[210%]">
                <h3 className="">Order Total</h3>
                <p className="">$13,068.00</p>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <Link className="bg-blue rounded-[50px] text-white py-3 text-center font-semibold text-sm hover:shadow-xl hover:shadow-[#00000048]  duration-300 transition-all">
                  Proceed to Checkout
                </Link>
                <Link className="flex items-center justify-center gap-4 bg-[#FFB800] text-[#232C65] rounded-[50px] py-3 font-semibold text-sm hover:shadow-xl hover:shadow-[#00000048]   duration-300 transition-all">
                  Check out with
                  <img src={paypal} alt="" />
                </Link>
                <Link className="bg-transparent border border-[#A2A6B0] rounded-[50px] text-[#A2A6B0] py-3 text-center font-semibold text-sm hover:shadow-xl hover:shadow-[#00000048]   duration-300 transition-all">
                  Check Out with Multiple Addresses
                </Link>
              </div>
              <Link to="#">
                <img src={zip} alt="" className="mt-4 pl-3 mx-auto" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Card className="mt-[67px]" />
    </div>
  );
};

export default ShoppingCart;
