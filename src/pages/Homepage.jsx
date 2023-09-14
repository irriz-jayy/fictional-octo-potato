import React from "react";
import Carousel from "../components/Carousel";

const Homepage = () => {
  return (
    <div className="min-h-[100vh]">
      {/* Header section */}
      <div className="h-[15vh] text-center p-2">
        <p className="text-3xl font-main">
          Welcome to{" "}
          <span className="font-curve font-thin text-orange-500">
            Simply Good
          </span>{" "}
          Recipes!
        </p>
        <p className="font-main mt-2 text-lg text-gray-500">
          Your one stop for recipes
        </p>
      </div>
      {/* Carousel */}
      <div>
        <Carousel />
      </div>
      {/*  */}
      <div className="h-96 border"></div>
    </div>
  );
};

export default Homepage;
