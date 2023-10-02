import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button, IconButton } from "@mui/material";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import pfp from "../assets/banners.jpg";
import useUser from "../hooks/useUser";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const token = localStorage.getItem("token");
  const user = useUser(token);

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
                  <IconButton color="success">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyRecipes;
