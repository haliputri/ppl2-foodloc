import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "../assets/Logo.svg";
import ProfileImage from "../assets/profpic.png"; 
import { Avatar, Dropdown } from 'flowbite-react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../backend/config";

const NavigationAdmin = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    // axios
    //   .get(`http://localhost:8080/users/login/find/${username}`)
    //   .then((response) => {
    //     const userData = response.data.data;
    //     setUser(userData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
      // });
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

  return (
    <Navbar fluid style={{ backgroundColor: '#FFA90A' }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={Logo} className="p-1 pl-12 mr-6 h-4 sm:h-9" alt="" />
      </Navbar.Brand>
      
 
      <Navbar.Collapse>
        <Navbar.Link href="#">Restaurants</Navbar.Link>
      </Navbar.Collapse>
      <Dropdown
        label={<Avatar rounded />}
        arrowIcon={false}
        inline
      >
        <Dropdown.Header>
          <span className="block text-sm">{user.name}</span>
          <span className="block truncate text-sm font-medium">{user.email}</span>
        </Dropdown.Header> 
        <Dropdown.Divider />
        {/* <Dropdown.Item href="admin"> Dashboard Admin</Dropdown.Item> */}
        <Link to="/login"><Dropdown.Item> Sign out</Dropdown.Item></Link>
      </Dropdown>
    </Navbar>
  );
};

export default NavigationAdmin;
