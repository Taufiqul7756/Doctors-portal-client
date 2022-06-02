import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
  {
    name: "Taufiqul Islam",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex amet veritatis alias accusantium possimus ab officia quisquam voluptate. Consequuntur eius eum incidunt hic sed quibusdam quasi fuga dolorum libero ducimus.",
    img: fluoride,
  },

  {
    name: "Tazwar Islam",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex amet veritatis alias accusantium possimus ab officia quisquam voluptate. Consequuntur eius eum incidunt hic sed quibusdam quasi fuga dolorum libero ducimus.",
    img: cavity,
  },

  {
    name: "Riduanul Islam",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex amet veritatis alias accusantium possimus ab officia quisquam voluptate. Consequuntur eius eum incidunt hic sed quibusdam quasi fuga dolorum libero ducimus.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 400, m: 2, color: "info.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography
          sx={{ fontWeight: 600, color: "text.secondary" }}
          variant="h4"
          component="div"
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service} exp="7"></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
