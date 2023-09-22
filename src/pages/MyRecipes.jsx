import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button, IconButton } from "@mui/material";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import pfp from "../assets/banners.jpg";

const Saved = () => {
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
        {/* saved cards */}
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
          <div className="w-48 border border-orange-600 h-60 rounded-md m-auto">
            <img src={pfp} alt="" className="object-contain" />
            <div className="text-center p-2">
              <p className="font-heading text-lg text-orange-600">Name</p>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Saved;
