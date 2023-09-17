import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import fetchRecipes from "../api/recipes";
import FoodCard from "../components/FoodCard";
import { Skeleton } from "@mui/material";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        setRecipes(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log("Error fetching recipes:", error);
      });
  }, []);
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
      <div className="min-h-96">
        <div>
          {isLoaded ? (
            // Render FoodCard components when data is loaded
            recipes.map((recipe) => (
              <FoodCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            // Render Skeleton components while data is loading
            <Skeleton variant="rectangular" height={200} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
