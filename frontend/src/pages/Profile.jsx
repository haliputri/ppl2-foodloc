<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import bg from "../assets/bg-yellow.png";
import { Button, Card} from "flowbite-react";
import Navigation2 from '../components/Navigation2';
import FooterResto from "../components/FooterResto";
import profilePicture from '../assets/profpic.png';

const Profile = () => {
  const [user, setUser] = useState([]);
  const id = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/users/login/${id}`)
    .then((response) => {
      setUser(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import bg from "../assets/bg-yellow.png";
import { Button, Card } from "flowbite-react";
import Navigation2 from "../components/Navigation2";
import FooterResto from "../components/FooterResto";
import profilePicture from "../assets/profpic.png";
import { format } from "date-fns";

const Profile = () => {
  const [user, setUser] = useState({});
  const [birthdate, setBirthDate] = useState("");
  const { username } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/login/find/${username}`)
      .then((response) => {
        setUser(response.data.data);

        const originalDate = response.data.data.birthdate;
        // Check if the originalDate is a valid ISO string
        const formattedDate = format(new Date(originalDate), "yyyy-MM-dd");
        setBirthDate(formattedDate);

        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0

  return (
    <div>
      <Navigation2 />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: "682px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "1200px", height: "600px", textAlign: "center" }}>
          <form className="flex flex-col gap-4">
<<<<<<< HEAD
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
=======
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
              <img
                src={profilePicture}
                alt="Profile Picture"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <p className="text-2xl mb-4" style={{fontWeight: "bold"}}>{user._id}</p>
              <ul className="w-full text-sm font-medium ">
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100" style={{ }}>
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>Email</span>
                  <span style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>{user._id}</span>
                </li>
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100" style={{ }}>
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>Alamat</span>
                  <span style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>Jatinangor</span>
                </li>
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100" style={{ }}>
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>Jenis Kelamin</span>
                  <span style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>P</span>
                </li>
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100" style={{ }}>
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>Tanggal Lahir</span>
                  <span style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>20 Mei 2003</span>
                </li>
              </ul>
              <Button href="editprofile" className="mt-8" style={{ backgroundColor: "#FFA90A", color: "white", width: "150px" }}>
                Edit Profile
              </Button>      
=======
              <p className="text-2xl mb-4" style={{ fontWeight: "bold" }}>
                {user.name}
              </p>
              <ul className="w-full text-sm font-medium ">
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Email
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {user.email}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Alamat
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {user.address}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Jenis Kelamin
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {user.gender}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Tanggal Lahir
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {birthdate}
                  </span>
                </li>
              </ul>
              <Button
                href={`edit/${user.username}`}
                className="mt-8"
                style={{
                  backgroundColor: "#FFA90A",
                  color: "white",
                  width: "150px",
                }}
              >
                Edit Profile
              </Button>
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
            </div>
          </form>
        </Card>
      </div>
      <FooterResto />
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0

export default Profile;
