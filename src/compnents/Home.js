import React from "react";
import Carousel from "../compnents/Carousal"; // Correct the spelling here
import Cards from "../compnents/Cards";
import Booking from "../compnents/Booking";
import BookingCards from "../compnents/BookingCards";
import Footer from "../compnents/Footer";
import Feedback from "./Feedback";
import Whyus from "./Whyus";
const Home = () => {
  return (
    <div className="bg-dark">
      <Carousel />
      <Booking />
      <Cards />
      <Whyus/>
      <Feedback/>
      <BookingCards />
      <Footer />
    </div>
  );
};

export default Home;
