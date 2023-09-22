import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pfpbanner from "../assets/profilebanner.jpg";
import { IconButton } from "@mui/material";
import {
  ArrowForward,
  Cake,
  Edit,
  FavoriteOutlined,
} from "@mui/icons-material";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Profile header */}
        <div className="h-[50vh] relative">
          <img
            src={pfpbanner}
            className="h-[50vh] object-cover w-screen"
            alt=""
          />
          {/* Profile picture */}
          <div className="absolute bottom-0 left-4 transform translate-y-1/2">
            <img
              src={pfpbanner}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white`"
            />
          </div>
          {/* User Info */}
          <div className="absolute bottom-0 left-32 transform -translate-y-1/2 text-white">
            <p className="text-2xl text-orange-600 font-semibold">
              irriz-jay
              <IconButton
                aria-label="edit"
                onClick={() => alert("edit my profile")}
              >
                <Edit className="text-orange-600" />
              </IconButton>
            </p>
            <p className="text-lg">Jay Felix</p>
          </div>
        </div>
        {/* cards */}
        <div className="m-2 h-80 w-screen grid grid-cols-1 gap-2">
          <a
            href="/saved"
            className="bg-orange-600 h-32 w-3/4 rounded-md flex justify-between items-center p-4"
          >
            <FavoriteOutlined className="text-white" />
            <p className="font-heading text-white">Saved recipes</p>
            <ArrowForward className="text-white" />
          </a>
          <a
            href="/my_recipes"
            className="bg-orange-600 h-32 w-3/4 rounded-md flex justify-between items-center p-4"
          >
            <Cake className="text-white" />
            <p className="font-heading text-white">My recipes</p>
            <ArrowForward className="text-white" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
