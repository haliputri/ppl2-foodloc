import React from "react";
import { Button } from "flowbite-react";
import bg from "../assets/Background.png";
import { Link } from "react-router-dom";
// import arrow from "../components/assets/arrow-right.png";

const HeroLanding = () => {
  return (
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
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Cravings food around you? <br />
        </h1>
        <p className="mb-3">
          Foodloc memberikan kemudahan dalam mencari informasi makanan disekitar
          anda. Jelajahi keinginan anda dari mulai restoran, cafe dan jajanan
          menarik bersama kami.
        </p>
        <Link to="/restaurant">
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
        </Link>
      </div>
    </div>
  );
};

export default HeroLanding;
