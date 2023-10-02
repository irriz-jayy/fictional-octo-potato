import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { Add, BookmarkRemove, Visibility } from "@mui/icons-material";
import useUser from "../hooks/useUser";

const Saved = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const token = localStorage.getItem("token");
  const user = useUser(token);

  useEffect(() => {
    if (token && user.id) {
      fetch(`http://127.0.0.1:3000/users/${user.id}/bookmarks`, {
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
            throw new Error("Failed to fetch bookmarks");
          }
        })
        .then((data) => {
          setBookmarks(data);
          console.log(bookmarks);
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
          <p className="text-orange-600 font-heading text-2xl">Saved Recipes</p>
        </div>
        {/* saved cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 min-h-[60vh] ">
          {/* add recipe card */}
          <a
            href="/recipes"
            className="text-white text-2xl w-48 h-60 rounded-md m-auto bg-orange-600 flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600"
          >
            <Add />
            <div>
              <p className="w-full h-full font-heading">Save recipes</p>
            </div>
          </a>
          {/* card */}
          {bookmarks.length === 0 ? (
            <>
              <p className="text-center text-lg text-gray-500 font-heading m-auto">
                You haven't saved any recipes yet.
              </p>
            </>
          ) : (
            bookmarks.map((bookmark) => (
              <div
                className="w-48 border border-orange-600 h-60 rounded-md m-auto"
                key={bookmark.id}
              >
                <img
                  src={bookmark.image_url}
                  alt=""
                  className="object-cover h-1/2 w-full"
                />
                <div className="text-center p-2">
                  <p className="font-heading text-lg text-orange-600">
                    {bookmark.name}
                  </p>
                  <Button
                    color="primary"
                    variant="contained"
                    endIcon={<Visibility />}
                  >
                    View
                  </Button>
                  <Button
                    endIcon={<BookmarkRemove />}
                    color="secondary"
                    variant="contained"
                  >
                    Unsave
                  </Button>
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

export default Saved;
