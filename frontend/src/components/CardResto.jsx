import React, { useEffect, useState } from 'react';
import axios from "axios";
// import { useParams } from "react-router-dom";
'use client';
import { Card } from 'flowbite-react';
import food1 from '../assets/food-1.png';


const CardResto = () => {
  const [restaurants, setResto] = useState([]);
  // const { resto_id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/restaurants/")
    // axios.get(`http://localhost:8080/restaurants/${resto_id}`)
    .then((response) => {
      setResto(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  const firstThreeRestaurants = restaurants.slice(0, 3);

  return (
    <div className="flex mb-16">
      {firstThreeRestaurants.map((restaurant) => (
        <Card
          key={restaurant.resto_id} // Pastikan key unik untuk setiap elemen dalam array
          className="max-w-sm ml-4 mr-4"
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
      ))}
    </div>
  )
}

export default CardResto
