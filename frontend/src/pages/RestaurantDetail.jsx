import React from 'react'
import { Button, Card, Checkbox, Footer, Label, TextInput } from "flowbite-react";
import Navigation from "../components/Navigation";
import logo from "../assets/kfc.png";
import FooterResto from "../components/FooterResto";

const RestaurantDetail = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h2 class="m-20 text-gray-D9D9D9 md:text-3xl lg:text-4xl dark:text-white"> Restaurants / 
        <span class="text-orange-FFA90A">  KFC
        </span> 
        </h2>
        <img
        src={logo}
        style {{
          position: "absolute",
          top: "70px",
        }}/>
      </div>
    </div>
  )
}

export default RestaurantDetail
