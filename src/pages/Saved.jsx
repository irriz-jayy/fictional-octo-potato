import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { Add, BookmarkRemove } from "@mui/icons-material";
import pfp from "../assets/banners.jpg";

const Saved = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        {/* header */}
        <div className="h-[10vh] flex justify-center items-center">
          <p className="text-orange-600 font-heading text-2xl">Saved Recipes</p>
        </div>
        {/* saved cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border w-screen h-96 ">
          {/* add recipe card */}
          <a
            href="/recipes"
            className="text-white text-2xl w-48 h-60 rounded-md m-auto bg-orange-600 flex flex-col items-center justify-center cursor-pointer"
          >
            <Add />
            <div>
              <p className="w-full h-full font-heading">Add recipes</p>
            </div>
          </a>
          {/* card */}

          <div className="w-48 border border-orange-600 h-60 rounded-md m-auto">
            <img src={pfp} alt="" className="object-contain" />
            <div className="text-center p-2">
              <p className="font-heading text-lg text-orange-600">Name</p>
              <Button
                endIcon={<BookmarkRemove />}
                color="secondary"
                variant="contained"
              >
                Unsave
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Saved;
