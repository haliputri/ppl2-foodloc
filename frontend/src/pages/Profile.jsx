import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import bg from "../assets/bg-yellow.png";
import { Button, Card} from "flowbite-react";
import Navigation2 from '../components/Navigation2';
import FooterResto from "../components/FooterResto";
import profilePicture from '../assets/profpic.png';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/users/login`)
    .then((response) => {
      setUser(response.id);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

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
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            </div>
          </form>
        </Card>
      </div>
      <FooterResto />
    </div>
  );
}

export default Profile;