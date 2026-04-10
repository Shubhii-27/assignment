import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TopConsulting from "./TopConsulting";
import LandingSection from "./LandingSection"
import Ratings from "./Ratings"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopConsulting/>
      <LandingSection/>
      <Ratings/>
    </div>
  );
}

export default App;