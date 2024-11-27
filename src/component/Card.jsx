import React from "react";
import { MdHeadsetMic, MdOutlineMailOutline } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidMagicWand } from "react-icons/bi";

const Card = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="bg-[#F5F7FF]">
        <div className="py-[50px] w-[1055px] mx-auto flex justify-between">
          <div className="card gap-3 w-[265px] flex flex-col items-center justify-center">
            <div className="w-[65px] h-[65px] rounded-full bg-blue flex items-center justify-center text-white">
              <MdHeadsetMic className="text-[25px]" />
            </div>
            <h3 className="text-[18px] font-bold leading-[132%]">
              Product Support
            </h3>
            <p className="text-center text-sm leading-[140%] opacity-60">
              Up to 3 years on-site warranty <br /> available for your peace of
              mind.
            </p>
          </div>
          <div className="card gap-3 w-[265px] flex flex-col items-center justify-center">
            <div className="w-[65px] h-[65px] rounded-full bg-blue flex items-center justify-center text-white">
              <FaCircleUser className="text-[25px]" />
            </div>
            <h3 className="text-[18px] font-bold leading-[132%]">
              Personal Account
            </h3>
            <p className="text-center text-sm leading-[140%] opacity-60">
              Up to 3 years on-site warranty <br /> available for your peace of
              mind.
            </p>
          </div>
          <div className="card gap-3 w-[265px] flex flex-col items-center justify-center">
            <div className="w-[65px] h-[65px] rounded-full bg-blue flex items-center justify-center text-white">
              <BiSolidMagicWand className="text-[25px]" />
            </div>
            <h3 className="text-[18px] font-bold leading-[132%]">
              Amazing Savings
            </h3>
            <p className="text-center text-sm leading-[140%] opacity-60">
              Up to 3 years on-site warranty <br /> available for your peace of
              mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
