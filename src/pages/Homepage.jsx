import React from "react";
import Carousel from "../components/Carousel";

const Homepage = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="h-[15vh] text-center p-2">
        <p className="text-3xl">
          Welcome to <span className="italic">Simply Good Recipes</span>!
        </p>
        <p className="text-orange-500">Your one stop for recipes</p>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Homepage;
