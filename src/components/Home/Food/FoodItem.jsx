import React from "react";
import chickenImg from "../../../assets/images/chicken.jpg";
import noodlesImg from "../../../assets/images/nodles.jpg";
import pastaImg from "../../../assets/images/pasta.jpg";
import pizzaImg from "../../../assets/images/pizza.jpg";

const FoodItem = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={chickenImg} alt="" />
        <h3 className="my-absolute-class">Italian Chicken Curry</h3>
      </div>
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={noodlesImg} alt="" />
        <h3 className="my-absolute-class">Italian Noodles</h3>
      </div>
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={pastaImg} alt="" />
        <h3 className="my-absolute-class">Italian Spaghetti Pasta</h3>
      </div>
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={pizzaImg} alt="" />
        <h3 className="my-absolute-class">Pizza alla Bufala</h3>
      </div>
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={pastaImg} alt="" />
        <h3 className="my-absolute-class">Italian Spaghetti Pasta</h3>
      </div>
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={chickenImg} alt="" />
        <h3 className="my-absolute-class">Italian Chicken Curry</h3>
      </div>
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={pizzaImg} alt="" />
        <h3 className="my-absolute-class">Pizza alla Bufala</h3>
      </div>
      <div className=" my-relative-class ">
        <img className="h-full rounded-md" src={noodlesImg} alt="" />
        <h3 className="my-absolute-class">Italian Noodles</h3>
      </div>
    </div>
  );
};

export default FoodItem;
