const fetchRecipes = async () => {
  try {
    const response = await fetch("http://127.0.0.1:3000/recipes");
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export default fetchRecipes;
