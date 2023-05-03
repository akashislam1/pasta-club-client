import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefRecipes = () => {
  const chefRecipes = useLoaderData();
  const {
    chef_picture,
    bio,
    chef_name,
    numbers_of_recipes,
    years_of_experience,
    likes,
    recipes,
  } = chefRecipes;
  return (
    <div className="w-full md:w-5/6 mx-auto">
      <div className="my-6">
        <div className="mx-auto w-3/4">
          <LazyLoadImage
            className="rounded-md md:w-3/4 md:mx-auto"
            alt=""
            effect="blur"
            src={chef_picture}
          ></LazyLoadImage>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl">Chef Name : {chef_name}</h3>
          <div>
            <p>
              <span className="font-semibold">Bio</span> : {bio} Natus nesciunt
              quia doloribus facere dolores tenetur laboriosam inventore
              explicabo id iure, aut aliquam quod sed! Odio veniam repellat
              officiis totam, vero asperiores praesentium excepturi quidem
              veritatis eum! Tempora nobis itaque harum, labore, eos esse cumque
              sint repudiandae nihil odit eaque ratione!
            </p>
          </div>
          <div className="my-3">
            <p className="font-semibold">
              Years of experience : {years_of_experience}
            </p>
            <p className="font-semibold">
              Numbers of recipes : {numbers_of_recipes}
            </p>
            <p className="font-semibold">Likes : {likes}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes?.map((recipe) => (
          <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
