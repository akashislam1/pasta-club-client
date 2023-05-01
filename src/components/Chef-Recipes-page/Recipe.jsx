import React from "react";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
  const notify = () => toast("Add to favourite!");
  console.log(recipe);
  const { recipe_name, rating, ingredients, cooking_method } = recipe;
  return (
    <div className=" p-5 bg-slate-100 shadow-lg rounded-md mb-10">
      <h2 className="font-bold text-xl my-3">Recipe Name : {recipe_name}</h2>
      <div className="my-3">
        <p>
          <span className="font-semibold">Ingredient : </span>
          {ingredients?.map((ingredient, index) => (
            <span key={index}>{ingredient}, </span>
          ))}
          .
        </p>
      </div>
      <p className="my-3">
        <span className="font-semibold">Cooking method :</span> {cooking_method}
      </p>
      <div className="my-5 flex justify-between items-center">
        <p className="font-semibold">Ratings : {rating}</p>
        <button
          onClick={notify}
          className="font-bold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-3  focus:outline-none focus:shadow-outline"
        >
          Add to Favourite
        </button>
      </div>
    </div>
  );
};

export default Recipe;
