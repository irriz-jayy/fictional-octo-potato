import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import fetchRecipes from "../api/recipes";
import FoodCard from "../components/FoodCard";
import { Masonry } from "@mui/lab";
import { Container } from "@mui/material";
import { DoubleArrowOutlined } from "@mui/icons-material";
import best from "../assets/best.jpg";

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
    <>
      <Navbar />
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
          <p className="text-2xl font-heading text-orange-600">
            Popular recipes
          </p>
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
        <div className="text-center my-2">
          <a
            href="/recipes"
            className="font-heading p-2 text-white rounded-md border bg-orange-600 shadow-md hover:bg-orange-500"
          >
            More recipes
            <span>
              <DoubleArrowOutlined />
            </span>
          </a>
        </div>
        {/* Best recipe section */}
        <div className="h-96 relative">
          <img
            src={best}
            alt="best recipe"
            className="h-96 w-screen object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-center w-3/4 h-1/2 sm:w-1/2 sm:h-1/2 md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/2">
              <p className="font-heading text-2xl p-2">Best Recipes 2023</p>
              <p className="font-main text-lg p-2">
                <span className="font-curve text-orange-600">Simply good</span>{" "}
                offers only the best recipes. And they are user made. Dont be
                left behind.{" "}
                <span className="text-orange-600">Sign up now!</span>
              </p>
              <a
                href="/sign_up"
                className="font-heading p-2 text-white rounded-md border bg-orange-600 shadow-md hover:bg-orange-500"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
