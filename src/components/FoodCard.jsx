import { AccessTimeOutlined, PeopleAltOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const FoodCard = ({ recipe }) => {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={recipe.image_url}
          title="green iguana"
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
            <Button size="small" variant="contained">
              View
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default FoodCard;
