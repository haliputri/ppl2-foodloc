import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import Logo from "../assets/Logo.svg";
import ProfileImage from "../assets/profpic.png"; 
import { Avatar, Dropdown } from 'flowbite-react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";


const Navigation = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/login/find/${username}`)
      .then((response) => {
        const userData = response.data.data;
        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Navbar fluid style={{ backgroundColor: '#FFA90A' }}>
      <Link to={`/home/${user.username}`}>
      <img src={Logo} className="p-1 pl-12 mr-6 h-4 sm:h-9" alt="" />
      </Link>
      
 
      <Navbar.Collapse>
        <Link to={`/${user.username}/restaurant`} style={{  color:"#374151" }}>Restaurants</Link>
      </Navbar.Collapse>
      <Dropdown
        label={<Avatar rounded />}
        arrowIcon={false}
        inline
      >
        <Dropdown.Header>
          <Link to={`/profile/find/${username}`}>
          <span className="block text-sm">{user.name}</span>
          <span className="block truncate text-sm font-medium">{user.email}</span>
          </Link>
        </Dropdown.Header> 
        <Dropdown.Divider />
        <Dropdown.Item>
          <Link to={`/login`}>Sign out</Link>
        </Dropdown.Item>
      </Dropdown>
    </Navbar>
  );
};

export default Navigation;
