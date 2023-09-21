const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/recipes/${recipeId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch recipe details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw error;
  }
};

export default fetchRecipeDetails;
