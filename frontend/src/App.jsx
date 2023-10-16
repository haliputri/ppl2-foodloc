import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroLanding from "./components/HeroLanding";
import FooterResto from "./components/FooterResto";
import CardResto from "./components/CardResto";

function App() {
  return (
    <>
      <Navigation />
      <HeroLanding />
      {/* <div className="mt-24 mb-24">
        <h4
          class="text-2xl font-bold dark:text-white mb-8"
          style={{ color: "#FFA90A" }}
        >
          Restaurants
        </h4>
        <div className="flex mb-16">
          <CardResto />
          <CardResto />
          <CardResto />
        </div>
        <div className="flex mb-16">
          <CardResto />
          <CardResto />
          <CardResto />
        </div>
      </div> */}
      <FooterResto />
    </>
  );
}

export default App;
