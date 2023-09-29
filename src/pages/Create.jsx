import { SendOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    country_of_origin: "",
    description: "",
    ingredients: "",
    directions: "",
    image_url: "",
    number_of_people_served: "",
    time: "",
    user_id: "",
  });

  useEffect(() => {
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
          console.log("User Data:", userData);
          // Extract the user ID from userData and update the formData state
          setFormData({
            ...formData,
            user_id: userData.id, // Assuming the user ID is in the 'id' field of userData
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "h9stgrub");

      // Replace the Cloudinary URL with your own
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dm66wpmtb/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error uploading image to Cloudinary");
      }

      const data = await response.json();
      console.log("Cloudinary Success:", data);
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      toast.error("Error uploading image. Please try again.");
      return null;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await handleImageUpload(file);

      if (imageUrl) {
        setFormData({
          ...formData,
          image_url: imageUrl,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the image URL is available
    if (!formData.image_url) {
      toast.error("Please upload an image before submitting.");
      return;
    }

    // Check if other required fields are filled
    for (const key in formData) {
      if (formData[key] === "") {
        toast.error(`Please fill in the ${key.replace(/_/g, " ")} field.`);
        return;
      }
    }

    // Now you can submit the form data with the image URL
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => {
            console.log("Success:", data);
            toast.success("Recipe has been created successfully.");
            navigate("/my_recipes");
          });
        } else {
          // Handle errors
          resp.json().then((errorData) => {
            console.error("Error:", errorData); // Log error response
            toast.error(errorData);
            // Handle errors
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle network errors
      });
  };

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
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Image</label>
              <input
                type="file"
                // className="rounded-md"
                accept="image/*"
                onChange={handleFileChange}
              ></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Description</label>
              <textarea
                id="description"
                rows={4}
                name="description"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Flat and round..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Ingriedients</label>
              <textarea
                id="ingredients"
                name="ingredients"
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
                name="directions"
                rows={4}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="1. Knead the..."
                value={formData.directions}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label>Country of origin</label>
              <input
                type="text"
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
                placeholder="Kenya"
                name="country_of_origin"
                value={formData.country_of_origin}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Number of people served</label>
              <input
                type="number"
                name="number_of_people_served"
                value={formData.number_of_people_served}
                onChange={handleChange}
                className="rounded-md focus:border-orange-600 focus:ring-orange-600"
              ></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Cooking time</label>
              <input
                type="text"
                name="time"
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
