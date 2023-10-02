import {
  AccessTimeOutlined,
  BookmarkAdd,
  PeopleAltOutlined,
  Visibility,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { toast } from "react-toastify";

const FoodCard = ({ recipe }) => {
  const [isSaved, setIsSaved] = useState(false); // State to track if the recipe is saved
  const token = localStorage.getItem("token"); // Get the user's token
  const user = useUser(token);

  const handleSaveClick = () => {
    // Check if the recipe is already saved (avoid duplicate saves)
    if (isSaved) {
      toast.info("Recipe is already saved.");
      return;
    }

    // Make a POST request to add the recipe to bookmarks

    if (!token) {
      alert("Please log in to save recipes.");
      return;
    }

    fetch(`http://127.0.0.1:3000/users/${user.id}/bookmarks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe_id: recipe.id }), // Send the recipe ID to save
    })
      .then((response) => {
        if (response.ok) {
          setIsSaved(true); // Update the state to indicate the recipe is saved
          toast.success("Recipe saved successfully!");
        } else {
          throw new Error("Failed to save recipe.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Card sx={{ maxWidth: 300 }} elevation={3}>
        <CardMedia
          sx={{ height: 140 }}
          image={recipe.image_url}
          title={recipe.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {recipe.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
          <Typography
            variant="h6"
            display="inline-block"
            color="text.secondary"
            gutterBottom
          >
            <PeopleAltOutlined color="primary" />
            {recipe.number_of_people_served}
          </Typography>{" "}
          <Typography
            variant="h6"
            display="inline-block"
            color="text.secondary"
          >
            <AccessTimeOutlined color="primary" />

            {recipe.time}
          </Typography>
          <CardActions>
            <Link to={`/recipes/${recipe.id}`} className="mr-2">
              <Button size="small" variant="contained" endIcon={<Visibility />}>
                View
              </Button>
            </Link>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              endIcon={<BookmarkAdd />}
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default FoodCard;
