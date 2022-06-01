import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CardMedia
            component="img"
            style={{ width: "auto", height: "80px", margin: "0 auto" }}
            image={img}
            alt="Paella dish"
          />
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
