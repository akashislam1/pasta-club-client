import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const chefRecipes = useLoaderData();
  console.log(chefRecipes);
  return <div>chef recipes</div>;
};

export default ChefRecipes;
