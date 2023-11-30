import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import Navigation from "../components/Navigation";
import HeroLanding from "../components/HeroLanding";
import FooterResto from "../components/FooterResto";
import CardResto from "../components/CardResto";
import { Button } from "flowbite-react";
import food1 from "../assets/food-1.png";
import { Link } from "react-router-dom";

const RestaurantPage = () => {
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

  // Function to split the restaurants into chunks of size 3
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Split the restaurants into chunks of size 3
  const restaurantChunks = chunkArray(restaurants, 3);

  return (
    <div>
      <Navigation />
      <div className="m-24 ">
        <h4
          class="text-2xl font-bold dark:text-white mb-8 ml-8"
          style={{ color: "#FFA90A" }}
        >
          Restaurants
        </h4>
        {restaurantChunks.map((chunk, index) => (
          <div key={index} className="flex mb-16 ml-8">
            {chunk.map((restaurant) => (
              <Link to={`${restaurant.resto_id}`} key={restaurant.resto_id}>
                <Card
                  key={restaurant.resto_id}
                  className="mr-24"
                  style={{ width: "250px" }}
                  href="#"
                  imgAlt=""
                  imgSrc={food1}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {restaurant.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {restaurant.address}
                  </p>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {restaurant.rating}
                  </h5>
                </Card>
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col items-center"></div>
      </div>
      <FooterResto />
    </div>
  );
};

export default RestaurantPage;
