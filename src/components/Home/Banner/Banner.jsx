import React from "react";
import BannerImage from "../../../assets/bannerImg.jpg";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-4">
      <div className="md:p-20">
        <h1 className="text-3xl md:text-4xl font-bold p-3">
          Fun and Easy to become Master Cook
        </h1>
        <p className="p-3 text-slate-500 font-semibold">
          Let&apos;s join us to become a cooking expert in every kind of cuisine
          with a fun way to learn
        </p>
        <div className="p-3">
          <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-8  focus:outline-none focus:shadow-outline">
            Join us <FaArrowRight className="inline-block ml-3"></FaArrowRight>
          </button>
        </div>
      </div>
      <div>
        <img className="md:w-3/5 mx-auto" src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
