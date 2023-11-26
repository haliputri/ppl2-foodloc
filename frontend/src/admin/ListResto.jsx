import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Sidenav from "../components/Sidenav";

const ListResto = () => {
  const [restaurants, setResto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/restaurants")
      .then((response) => {
        setResto(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex">
      <Sidenav />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Restaurants List</h1>
          <Link to="add">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Name</th>
                <th className="border border-slate-600 rounded-md">Address</th>
                <th className="border border-slate-600 rounded-md">City</th>
                <th className="border border-slate-600 rounded-md">
                  Social Media
                </th>
                <th className="border border-slate-600 rounded-md">
                  Phone Number
                </th>
                <th className="border border-slate-600 rounded-md">Rating</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant, index) => (
                <tr key={restaurant._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {restaurant.name}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {restaurant.address}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {restaurant.city}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {restaurant.social_media}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {restaurant.phone_number}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {restaurant.rating}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`${restaurant.resto_id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`edit/${restaurant.resto_id}`}>
                        <AiOutlineEdit className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`delete/${restaurant.resto_id}`}>
                        <MdOutlineDelete className="text-2xl text-red-800" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ListResto;