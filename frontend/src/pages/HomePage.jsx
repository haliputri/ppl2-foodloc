import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import HeroLanding from "../components/HeroLanding";
import FooterResto from "../components/FooterResto";
import CardResto from "../components/CardResto";

const HomePage = () => {
  const [restaurants, setResto] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/restaurants")
      .then((response) => {
        setResto(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const firstThreeRestaurants = restaurants.slice(0, 3);

  return (
    <div>
      <Navigation />
      <HeroLanding />
      <div className="mt-24 mb-24">
        <h4
          class="text-2xl font-bold dark:text-white mb-8"
          style={{ color: "#FFA90A" }}
        >
          Restaurants
        </h4>
        <div className="flex mb-16">
          <CardResto />
          {/* {firstThreeRestaurants.map((restaurant) => (
            <CardResto
              key={restaurant.resto_id} // Make sure to provide a unique key for each item in the array
            />
          ))} */}
        </div>
        {/* <div className="flex mb-16">
          <CardResto />
          <CardResto />
          <CardResto />
        </div> */}
      </div>
      <FooterResto />
    </div>
  );
};

export default HomePage;
