import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefSection = ({ data }) => {
  const {
    chef_picture,
    chef_id,
    chef_name,
    numbers_of_recipes,
    years_of_experience,
    likes,
  } = data;
  return (
    <div className="border rounded-md">
      <div>
        <LazyLoadImage
          className="w-full md:w-96 md:h-64 rounded-md"
          alt=""
          effect="blur"
          src={chef_picture}
        ></LazyLoadImage>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl">Chef Name : {chef_name}</h3>
        <div className="my-3">
          <p className="font-semibold">
            Years of experience : {years_of_experience}
          </p>
          <p className="font-semibold">
            Numbers of recipes : {numbers_of_recipes}
          </p>
        </div>
        <div className="my-3 flex justify-between items-center">
          <p className="font-semibold">Likes : {likes}</p>
          <Link to={`/chefRecipes/${chef_id}`}>
            <button className="font-bold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
