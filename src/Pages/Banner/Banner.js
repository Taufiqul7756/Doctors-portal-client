import React from "react";
import chair from "../../images/chair.png";
import BannerBg from "../../images/bg.png";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container } from "@mui/material";

const bannerBg = {
  background: `url(${BannerBg})`,
};

const verticalCenter = {
  display: "flex",
  height: "400px",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={5}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 4, fontSize: 14, fontWeight: 300, color: "grey" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              culpa blanditiis rem, eligendi maxime saepe incidunt eius magni
              error delectus?
            </Typography>

            <Button
              style={{
                marginTop: "25px",
                backgroundColor: "rgba(78, 220, 232)",
              }}
              variant="contained"
            >
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={7}>
          <img style={{ width: "300px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
