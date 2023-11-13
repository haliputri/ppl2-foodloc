import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "../assets/Logo.svg";
import ProfileImage from "../assets/profpic.png"; 

const Navigation = () => {
  return (
    <Navbar fluid style={{ backgroundColor: '#FFA90A' }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={Logo} className="p-1 pl-12 mr-6 h-4 sm:h-9" alt="" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <img
          src={ProfileImage}
          className="mr-12 rounded-full" // Menggunakan rounded-full untuk membuat gambar lingkaran
          alt="Profile Picture"
          style={{
            width: '40px', // Sesuaikan ukuran gambar profil sesuai kebutuhan
            height: '40px',
            objectFit: 'cover', // Untuk memastikan gambar tidak terlalu terdistorsi
          }}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="restaurant">Restaurants</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
