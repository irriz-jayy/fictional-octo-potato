import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fetchRecipes from "../api/recipes";
import { Container } from "@mui/material";
import { Masonry } from "@mui/lab";
import FoodCard from "../components/FoodCard";

const Recipes = () => {
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
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* header */}
        <div className="h-[10vh] flex justify-center items-center">
          <p className="text-orange-600 font-heading text-2xl">All recipes</p>
        </div>
        {/* Masonry list of the recipes */}
        <Container maxWidth={screen} className="mt-4 p-2">
          <Masonry
            columns={{ xs: 2, sm: 3, md: 4, lg: 4 }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {recipes.map((recipe) => (
              <FoodCard key={recipe.id} recipe={recipe} />
            ))}
          </Masonry>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
