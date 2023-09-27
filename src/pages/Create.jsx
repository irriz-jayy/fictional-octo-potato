import { SendOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    country_of_origin: "",
    description: "",
    ingredients: "",
    directions: "",
    image_url: "",
    number_of_people_served: "",
    time: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => {
            // console.log(data);
            // console.log("Success:", data);
            toast.success("Recipe has been created successfully.");
            navigate("/my_recipes");
          });
        } else {
          // Handle errors
          resp.json().then((errorData) => {
            // console.error("Error:", errorData); // Log error response
            toast.error(errorData);
            // Handle errors
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle network errors
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file); // Use the 'file' object here
      formData.append("upload_preset", "h9stgrub");

      // Replace the Cloudinary URL with your own
      fetch("https://api.cloudinary.com/v1_1/dm66wpmtb/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("Cloudinary Success:", data);
          // Extract the secure_url from the Cloudinary response
          const imageUrl = data.secure_url;

          // Update the profile_picture_url in formData
          setFormData({
            ...formData,
            image_url: imageUrl,
          });

          // Optionally, you can also update the state for immediate display
          setImageUrl(imageUrl);
        })
        .catch((error) => {
          console.error("Error uploading image to Cloudinary:", error);
        });
    } else {
      // Handle non-file input changes (e.g., text input)
      // Handle non-file input changes (e.g., text input)
      setFormData({
        ...formData,
        user: {
          ...formData.user,
          [name]: value, // Update the specific user attribute (e.g., name, email, etc.)
        },
      });
    }
  }
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
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Country of origin</label>
              <input
                type="text"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Kenya"
                value={formData.country_of_origin}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Description</label>
              <textarea
                id="description"
                rows={4}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Flat and round..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Ingriedients</label>
              <textarea
                id="ingriedients"
                rows={4}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Flour, warm water..."
                value={formData.ingredients}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Directions</label>
              <textarea
                id="directions"
                rows={4}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="1. Knead the..."
                value={formData.directions}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>Image</label>
              <input
                type="file"
                // className="rounded-md"
                accept="image/*"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Number of people served</label>
              <input
                type="number"
                value={formData.number_of_people_served}
                onChange={handleChange}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
              ></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Cooking time</label>
              <input
                type="text"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="120 mins"
                value={formData.time}
                onChange={handleChange}
              ></input>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-orange-600 col-span-2 h-12 text-white rounded-md hover:bg-orange-500"
            >
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
