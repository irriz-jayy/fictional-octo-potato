import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IconButton } from "@mui/material";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import useUser from "../hooks/useUser";
import { toast } from "react-toastify";
import Modal from "react-modal"; // Import react-modal

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const token = localStorage.getItem("token");
  const user = useUser(token);
  const [editedRecipe, setEditedRecipe] = useState(null); // Track the edited recipe
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  console.log(user);

  useEffect(() => {
    if (token) {
      fetch(`http://127.0.0.1:3000/users/${user.id}/recipes`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch recipes");
          }
        })
        .then((data) => {
          setRecipes(data);
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token, user]);

  function handleDelete(recipeId) {
    // Show a confirmation dialog using window.confirm
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) {
      // If the user cancels the deletion, do nothing
      return;
    }

    // Continue with the deletion if confirmed
    fetch(`http://127.0.0.1:3000/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // If the recipe is deleted successfully, remove it from the state
          const updatedRecipes = recipes.filter(
            (recipe) => recipe.id !== recipeId
          );
          setRecipes(updatedRecipes);
          console.log("Recipe deleted successfully.");
        } else {
          throw new Error("Failed to delete recipe.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleEdit(recipe) {
    // Set the edited recipe and open the modal
    setEditedRecipe(recipe);
    setIsModalOpen(true);
  }

  // Handle closing the modal
  function closeModal() {
    setIsModalOpen(false);
    setEditedRecipe(null);
  }

  function handleInputChange(e, field) {
    const updatedRecipe = { ...editedRecipe };
    updatedRecipe[field] = e.target.value;
    setEditedRecipe(updatedRecipe);
  }
  // Handle saving the edited recipe
  function handleSaveEdit(e) {
    e.preventDefault();
    console.log("handleSaveEdit called");

    const updatedRecipe = {
      user_id: user.id,
      name: editedRecipe.name,
      country_of_origin: editedRecipe.country_of_origin,
      description: editedRecipe.description,
      time: editedRecipe.time,
      ingredients: editedRecipe.ingredients,
      directions: editedRecipe.directions,
      description: editedRecipe.description,
      number_of_people_served: editedRecipe.number_of_people_served,
    };

    console.log(updatedRecipe);
    fetch(`http://127.0.0.1:3000/recipes/${editedRecipe.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log("Recipe updated successfully.");
          toast.success("Recipe updated successfully");
          // Close the modal or perform any other necessary actions
          closeModal();
          window.location.reload();
        } else {
          // Handle error
          throw new Error("Failed to update recipe.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Navbar />
      <div className="min-h-96">
        {/* header */}
        <div className="h-[10vh] flex justify-center items-center">
          <p className="text-orange-600 font-heading text-2xl">
            Created Recipes
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 min-h-[60vh] ">
          {/* add recipe card */}
          <a
            href="/create"
            className="text-white text-2xl w-48 h-60 rounded-md m-auto bg-orange-600 flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600"
          >
            <Add />
            <div>
              <p className="w-full h-full font-heading">Create recipes</p>
            </div>
          </a>
          {/* card */}
          {recipes.length === 0 ? (
            <>
              <p className="text-center text-lg text-gray-500 font-heading m-auto">
                You haven't created any recipes yet.
              </p>
            </>
          ) : (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="w-48 border border-orange-600 h-60 rounded-md m-auto"
              >
                <img
                  src={recipe.image_url}
                  alt={recipe.name}
                  className="object-cover w-full h-2/3"
                />
                <div className="text-center p-2">
                  <p className="font-heading text-lg text-orange-600">
                    {recipe.name}
                  </p>
                  <IconButton color="primary">
                    <Visibility />
                  </IconButton>
                  <IconButton
                    color="success"
                    onClick={() => handleEdit(recipe)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(recipe.id)}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
      {/* Modal for editing */}
      {/* Modal for editing */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Recipe Modal"
      >
        {editedRecipe && (
          <div>
            <h2 className="text-2xl text-center text-orange-600 font-heading">
              Edit Recipe
            </h2>
            <div className="flex items-center justify-center p-2 font-main">
              <form
                className="grid grid-cols-2 gap-4 "
                onSubmit={(e) => handleSaveEdit(e)}
              >
                <div className="flex flex-col">
                  <label htmlFor="recipeName">Name</label>
                  <input
                    type="text"
                    id="recipeName"
                    name="recipeName"
                    placeholder="Recipe Name"
                    className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                    defaultValue={editedRecipe.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="recipeName">Country of origin</label>
                  <input
                    type="text"
                    id="country_of_origin"
                    name="country_of_origin"
                    placeholder="Country of origin"
                    className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                    defaultValue={editedRecipe.country_of_origin}
                    onChange={(e) => handleInputChange(e, "country_of_origin")}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="recipeName">Cooking time</label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    placeholder="time"
                    className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                    defaultValue={editedRecipe.time}
                    value={editedRecipe.time}
                    onChange={(e) => handleInputChange(e, "time")}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="recipeName">Number of people served</label>
                  <input
                    type="number"
                    id="number_of_people_served"
                    name="number_of_people_served"
                    placeholder="number_of_people_served"
                    className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                    defaultValue={editedRecipe.number_of_people_served}
                    onChange={(e) =>
                      handleInputChange(e, "number_of_people_served")
                    }
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="recipeDescription">Directions</label>
                  <textarea
                    type="text"
                    id="recipeDirections"
                    name="recipeDirections"
                    placeholder="Recipe directions"
                    className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                    defaultValue={editedRecipe.directions}
                    onChange={(e) => handleInputChange(e, "directions")}
                  ></textarea>
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="recipeDescription">Description</label>
                  <textarea
                    type="text"
                    id="recipeDescription"
                    name="recipeDescription"
                    placeholder="Recipe Description"
                    className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                    defaultValue={editedRecipe.description}
                    onChange={(e) => handleInputChange(e, "descritpion")}
                  ></textarea>
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="recipeIngredients">Ingredients</label>
                  <textarea
                    id="recipeIngredients"
                    name="recipeIngredients"
                    placeholder="Recipe Ingredients (comma separated)"
                    className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                    defaultValue={editedRecipe.ingredients}
                    onChange={(e) => handleInputChange(e, "ingredients")}
                  ></textarea>
                </div>
                {/* Exclude the image if you don't want to allow changing it */}
                <button
                  type="submit"
                  className="bg-green-600  h-12 text-white rounded-md hover:bg-green-500"
                >
                  Save
                </button>
                <button
                  onClick={closeModal}
                  className="bg-red-600  h-12 text-white rounded-md hover:bg-red-500"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MyRecipes;
