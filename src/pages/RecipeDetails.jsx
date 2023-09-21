import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Skeleton } from "@mui/material";
import fetchRecipeDetails from "../api/fetchRecipeDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookmarkAdd } from "@mui/icons-material";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeDetails(recipeId)
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
      });
  }, [recipeId]);

  if (!recipe) {
    return (
      <>
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="mb-4">
            <Skeleton variant="rectangular" width={500} height={100} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={500} height={460} />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* header */}
        <div className="flex flex-col md:flex-row lg:flex-row md:min-h-96 lg:min-h-96">
          <img
            src={recipe.image_url}
            alt={recipe.name}
            className="rounded-md p-2 w-screen h-1/2 object-contain md:w-1/2 lg:w-1/2"
          />
          <div className="h-1/2 text-center md:w-1/2 lg:w-1/2 ">
            <p className="text-orange-600 font-heading text-2xl  p-2">
              {recipe.name}
            </p>
            <p className=" font-main text-lg ">{recipe.description}</p>
            <p className=" font-main text-lg ">
              Originates from {recipe.country_of_origin}
            </p>
            <p className="text-orange-600 font-main text-lg">
              Serves {recipe.number_of_people_served}
            </p>{" "}
            <p className="text-orange-600 font-main text-lg">
              Takes {recipe.time} to prepare
            </p>
            <Button
              variant="outlined"
              endIcon={<BookmarkAdd />}
              onClick={() => alert(`Saved:${recipeId}`)}
            >
              Save
            </Button>
          </div>
        </div>
        {/* more details section */}
        <div className="flex flex-col h-screen">
          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-orange-600" />
            </div>
            <div className="relative flex justify-center text-2xl font-heading">
              <span className="bg-white px-2 text-orange-600">Ingredients</span>
            </div>
          </div>
          <p className="font-main text-lg text-center">{recipe.ingredients}</p>
          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-orange-600" />
            </div>
            <div className="relative flex justify-center text-2xl font-heading">
              <span className="bg-white px-2 text-orange-600">
                Cooking instructions
              </span>
            </div>
          </div>
          <ol className="font-main text-lg text-center">
            {recipe.directions.split("\n").map((step, index) => (
              <li key={index}>{step.trim()}</li>
            ))}
          </ol>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RecipeDetails;
