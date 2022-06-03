import React from "react";
import AppointmentBanner from "../../AppoimtmentBanner/AppointmentBanner";
import Banner from "../../Banner/Banner";
import Navigation from "../../Shared/Navigation/Navigation";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;
