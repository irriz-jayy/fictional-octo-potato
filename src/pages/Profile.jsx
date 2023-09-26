import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
      fetch("http://127.0.0.1:3000/profile", {
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
            throw new Error("Failed to fetch user data");
          }
        })
        .then((userData) => {
          console.log(userData);
          setUser(userData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
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
              src={user.profile_picture_url}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
          {/* User Info */}
          <div className="absolute bottom-0 left-32 transform -translate-y-1/2 text-white">
            <p className="text-2xl text-orange-600 font-semibold">
              {user.username}
              <IconButton
                aria-label="edit"
                onClick={() => alert("edit my profile")}
              >
                <Edit className="text-orange-600" />
              </IconButton>
            </p>
            <p className="text-lg">{user.name}</p>
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
