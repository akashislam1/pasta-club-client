import React from "react";
import BannerImage from "../../../assets/bannerImg.jpg";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full min-h-screen md:w-5/6 mx-auto flex flex-col md:flex-row justify-around items-center mt-12 gap-4">
      <div className="md:p-10 md:w-1/2">
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
      <div className="md:w-1/2">
        <img className="md:w-3/5 mx-auto" src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
