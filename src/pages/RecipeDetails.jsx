import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import fetchRecipeDetails from "../api/fetchRecipeDetails";

const RecipeDetails = () => {
  // Access the recipeId from the URL parameter using useParams
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details based on recipeId
    // You can make an API call here to retrieve the recipe details
    // Replace this with your actual API call
    fetchRecipeDetails(recipeId)
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
      });
  }, [recipeId]); // Include recipeId in the dependency array to fetch details when it changes

  // Check if the recipe data is available
  if (!recipe) {
    return (
      <>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </>
    );
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image_url} alt={recipe.name} />
      <p>{recipe.description}</p>
      {/* Display other recipe details here */}
    </div>
  );
};

export default RecipeDetails;
