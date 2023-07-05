import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-[100px]">s</div>
    </div>
  );
};

export default App;
