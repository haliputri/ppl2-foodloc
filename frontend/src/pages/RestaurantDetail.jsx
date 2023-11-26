import React from 'react'
import { Button, Card, Checkbox, Footer, Label, TextInput } from "flowbite-react";
import Navigation from "../components/Navigation";
import FooterResto from "../components/FooterResto";

const RestaurantDetail = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h2> Restaurants </h2>
      </div>
      <FooterResto />
    </div>
  )
}

export default RestaurantDetail
