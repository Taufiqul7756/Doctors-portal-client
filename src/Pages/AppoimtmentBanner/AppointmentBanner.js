import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import doctor from "../../../src/images/doctor.png";
import bg from "../../../src/images/appointment-bg.png";

const appointmentBg = {
  background: `url(${bg})`,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "400px" }} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Appointment</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
