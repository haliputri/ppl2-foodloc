import React from 'react';
'use client';
import { Card } from 'flowbite-react';
import food1 from '../assets/food-1.png';


const CardResto = () => {
  return (
    <Card
      className="max-w-sm ml-4 mr-4"
      href="#"
      imgAlt=""
      imgSrc={food1}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Jatinangor House
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
         Sukasari
        </p>
      </p>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          4.9
        </p>
      </h5>
    </Card>
  )
}

export default CardResto
