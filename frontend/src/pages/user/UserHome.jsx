import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation2 from "../../components/Navigation2";
import HeroLanding from "../../components/HeroLanding";
import FooterResto from "../../components/FooterResto";
import CardResto from "../../components/CardResto";
import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../../backend/config";

const UserHome = () => {
  const [restaurants, setResto] = useState([]);
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/restaurants`)
      .then((response) => {
        setResto(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/users/login/find/${username}`)
      .then((response) => {
        const userData = response.data.data;
        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const firstThreeRestaurants = restaurants.slice(0, 3);

  return (
    <div>
      <Navigation2 />
      <HeroLanding />
      <div className="m-24 ">
        <h4
          class="text-2xl font-bold dark:text-white mb-8 ml-8"
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
        <div className="flex flex-col items-center">
        <Button
          href={`/${user.username}/restaurant`}
          className="mr-12 text-2xl font-semibold font-Lato"
          style={{
            backgroundColor: "white",
            border: "2px solid #FFA90A",
            color: "#FFA90A",
            borderRadius: "20px",
            height: "50px",
            width: "230px",
          }}
        >
          Selengkapnya
          {/* <img src={{ arrow }} /> */}
        </Button>
        </div>
      </div>
      <FooterResto />
    </div>
  );
};

export default UserHome;
