import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import fetchRecipes from "../api/recipes";
import FoodCard from "../components/FoodCard";
import { Masonry } from "@mui/lab";
import { Button, Container } from "@mui/material";
import { DoubleArrowOutlined } from "@mui/icons-material";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.log("Error fetching recipes:", error);
      });
  }, []);

  const popularRecipes = recipes.slice(0, 8);
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
      {/* Heading for the recipe section */}
      <div className="h-[5vh] text-center p-2">
        <p className="text-2xl font-heading text-orange-600">Popular recipes</p>
      </div>
      {/* Masonry list of the recipes */}
      <Container maxWidth={screen} className="mt-4 p-2">
        <Masonry
          columns={{ xs: 2, sm: 3, md: 4, lg: 4 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {popularRecipes.map((recipe) => (
            <FoodCard key={recipe.id} recipe={recipe} />
          ))}
        </Masonry>
      </Container>
      <div className="text-center">
        <a
          href="/recipes"
          className="p-2 text-white rounded-md border bg-orange-600 shadow-md hover:bg-orange-500"
        >
          More recipes
          <span>
            <DoubleArrowOutlined />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
