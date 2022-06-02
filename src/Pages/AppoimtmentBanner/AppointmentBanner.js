import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import doctor from "../../../src/images/doctor.png";
import bg from "../../../src/images/appointment-bg.png";
import { Button } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: "150px",
  backgroundColor: "rgba(100, 103, 118)",
  backgroundBlendMode: "darken ,luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography
              sx={{ mb: 5 }}
              style={{ color: "rgba(78, 220, 232)" }}
              variant="h6"
            >
              Appointment
            </Typography>
            <Typography
              // sx={{ mb: 3 }}
              style={{ color: "rgba(255, 255, 255)" }}
              variant="h6"
            >
              Make an Appointment Today
            </Typography>
            <Typography
              style={{
                color: "rgba(255, 255, 255)",
                fontSize: 14,
                fontWeight: "300",
              }}
              variant="h6 "
              sx={{ my: 5 }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eum
              voluptatum voluptatem est animi. Est veniam cumque nemo neque
              voluptatibus.
            </Typography>

            <Button
              sx={{ display: "flex" }}
              style={{ marginTop: "25px" }}
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
