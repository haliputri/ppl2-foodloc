import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "../assets/Logo.svg";
import ProfileImage from "../assets/profpic.png"; 
import { Avatar, Dropdown } from 'flowbite-react';

const Navigation = () => {
  return (
    <Navbar fluid style={{ backgroundColor: '#FFA90A' }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={Logo} className="p-1 pl-12 mr-6 h-4 sm:h-9" alt="" />
      </Navbar.Brand>
      
 
      <Navbar.Collapse>
        <Navbar.Link href="restaurant">Restaurants</Navbar.Link>
      </Navbar.Collapse>
      <Dropdown
        label={<Avatar rounded />}
        arrowIcon={false}
        inline
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header> 
        <Dropdown.Divider />
        <Dropdown.Item> Sign out</Dropdown.Item>
      </Dropdown>
    </Navbar>
  );
};

export default Navigation;
