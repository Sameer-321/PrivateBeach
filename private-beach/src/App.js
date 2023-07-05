import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
    </div>
  );
};

export default App;
