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
import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ recipe }) => {
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
              onClick={() => alert("Added to bookmarks!")}
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
