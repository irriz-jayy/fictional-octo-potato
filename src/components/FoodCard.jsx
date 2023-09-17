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
      <Card sx={{ maxWidth: 345 }}>
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
            variant="caption"
            display="inline-block"
            color="text.secondary"
            gutterBottom
          >
            {recipe.number_of_people_served}
          </Typography>{" "}
          <Typography
            variant="caption"
            display="inline-block"
            color="text.secondary"
          >
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
