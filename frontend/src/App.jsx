import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import bg from "./assets/Background.png";
import arrow from "./assets/arrow-right.png";
import { Button } from "flowbite-react";
import CardResto from "./components/CardResto";
import Foot from "./components/Foot";

function App() {
  return (
    <>
      <Navigation />
      <div
        className="hero-landing"
        style={{
          backgroundImage: `url(${bg})`,
          height: "800px",
          display: "flex",
        }}
      >
        <div
          className="mini-hero ml-12"
          style={{ width: "550px", float: "left", marginTop: "220px" }}
        >
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            MISAL INI JUDUL <br />
            JUDUL LANJUTAN
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur. Faucibus nulla in facilisi
            placerat eget morbi. Purus pharetra ornare massa non molestie.
            Feugiat sapien a lectus morbi consequat in at. Nunc tincidunt
            facilisis aliquet sollicitudin et et tristique et.
          </p>
          <Button
            className="mr-12"
            style={{
              backgroundColor: "white",
              color: "#060606",
              borderRadius: "4px",
              height: "2.5rem",
              width: "200px",
            }}
          >
            Jelajahi Sekarang
            {/* <img src={{ arrow }} /> */}
          </Button>
        </div>
      </div>
      <div>
        <h1>Card Cok</h1>
        {/* <CardResto/> */}
      </div>
      <Foot/>
    </>
  );
}

export default App;
