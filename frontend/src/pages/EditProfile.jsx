import React from 'react';
import bg from "../assets/bg-yellow.png";
import { Button, Card, TextInput } from "flowbite-react";
import Navigation2 from '../components/Navigation2';
import FooterResto from "../components/FooterResto";
import profilePicture from '../assets/profpic.png';

const Profile = () => {
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
        <Card style={{ width: "1200px", height: "680px", textAlign: "center" }}>
          <form className="flex flex-col gap-4">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src={profilePicture}
                alt="Profile Picture"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginBottom: "20px"
                }}
              />
              {/* <input type="file" /> */}
              <p className="text-2xl mb-4" style={{fontWeight: "bold"}}>Kanaya Dewi Purnamasari</p>
              <ul className="w-full text-sm font-medium ">
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 ">
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>Nama</span>
                  <TextInput
                    style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}
                    id="nama1"
                    placeholder="Masukkan nama kamu"
                    required
                    type="text"
                  />
                </li>
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 ">
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>Email</span>
                  <TextInput
                    style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}
                    id="email1"
                    placeholder="Masukkan email kamu"
                    type="email"
                  />                
                </li>
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 ">
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>Alamat</span>
                  <TextInput
                    style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}
                    id="alamat1"
                    placeholder="Masukkan alamat kamu"
                    type="textarea"
                  />                </li>
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 ">
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>Jenis Kelamin</span>
                  <select id="jk1" name="jeniskelamin" className="w-full p-2 py-3 text-sm border rounded-lg" style={{color: "#6B7280", backgroundColor: "#F9FAFB", borderColor: "lightgray"}}>
                    <option value="" disabled selected>Pilih jenis kelamin kamu</option>
                    <option value="laki-laki">L</option>
                    <option value="perempuan">P</option>
                  </select>              
                </li>
                <li className="w-full px-4 py-2 grid grid-cols-2 gap-4 ">
                  <span style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>Tanggal Lahir</span>
                  <TextInput
                    style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", color: "#6B7280" }}
                    id="tanggalLahir1"
                    placeholder="Masukkan tanggal lahir kamu"
                    type="date"
                  />                
                </li>
              </ul>
              <Button href="profile" className="mt-8 " style={{ backgroundColor: "#FFA90A", color: "white", width: "150px" }}>
                Simpan
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
