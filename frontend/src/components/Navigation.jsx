import React from "react";
("use client");
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navigation = () => {
  return (
    <Navbar fluid style={{ backgroundColor: "#FFA90A" }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={Logo} className="p-1 pl-12 mr-6 h-4 sm:h-9" alt=""/>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/login">
          <Button
            className="mr-12"
            style={{
              backgroundColor: "white",
              color: "#060606",
              borderRadius: "4px",
              height: "2.5rem",
              width: "120px",
            }}
          >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Restaurants</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
