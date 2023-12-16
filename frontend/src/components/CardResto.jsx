import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
("use client");
import { Card } from "flowbite-react";
import food1 from "../assets/food-1.png";
import { Link } from "react-router-dom";

const CardResto = () => {
  const [restaurants, setResto] = useState([]);
  // const { resto_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants`)
      // axios.get(`http://localhost:8080/restaurants/${resto_id}`)
      .then((response) => {
        setResto(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const firstThreeRestaurants = restaurants.slice(0, 3);

  return (
    <div className="flex mb-16 ml-8 ">
      {firstThreeRestaurants.map((restaurant) => (
        <Link to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
          <Card
            key={restaurant._id} // Pastikan key unik untuk setiap elemen dalam array
            className="mr-24"
            style={{ width: "250px" }}
            href="#"
            imgAlt=""
            imgSrc={restaurant.logo || food1}
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
  );
};

export default CardResto;
