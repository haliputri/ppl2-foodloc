import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowResto = () => {
  const [restaurant, setResto] = useState([]);
  const [loading, setLoading] = useState(false);
  const { resto_id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/restaurants/${resto_id}`)
      .then((response) => {
        setResto(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Resto</h1>
      { loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{restaurant.resto_id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Nama</span>
            <span>{restaurant.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Address</span>
            <span>{restaurant.address}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">City</span>
            <span>{restaurant.city}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Phone Number</span>
            <span>{restaurant.phone_number}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Social Media</span>
            <span>{restaurant.social_media}</span>
          </div>
        </div>
      )

      }
      </div>
  )
}

export default ShowResto;
