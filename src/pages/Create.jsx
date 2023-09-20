import { SendOutlined } from "@mui/icons-material";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Create = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] font-main">
        <p className="p-2 text-center text-orange-500 font-bold text-2xl">
          Create your recipe
        </p>
        <div className="flex items-center justify-center p-2">
          <form className="grid grid-cols-2 gap-4 ">
            <div className="flex flex-col">
              <label>Recipe name</label>
              <input
                type="text"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Chapati"
              />
            </div>
            <div className="flex flex-col">
              <label>Country of origin</label>
              <input
                type="text"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Kenya"
              ></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Description</label>
              <textarea
                id="description"
                rows={4}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Flat and round..."
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Ingriedients</label>
              <textarea
                id="ingriedients"
                rows={4}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Flour, warm water..."
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Directions</label>
              <textarea
                id="directions"
                rows={4}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="1. Knead the..."
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>Image</label>
              <input
                type="file"
                // className="rounded-md"
                accept="image/*"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Number of people served</label>
              <input
                type="number"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
              ></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Cooking time</label>
              <input
                type="text"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="120 mins"
              ></input>
            </div>
            <button className="bg-orange-600 col-span-2 h-12 text-white rounded-md hover:bg-orange-500">
              Submit
              <span className="ml-2">
                <SendOutlined />
              </span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Create;
