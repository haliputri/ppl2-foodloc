import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import bg from "../assets/bg-yellow.png";
import { Label, Button, Card, TextInput } from "flowbite-react";
import Navigation2 from "../components/Navigation2";
import FooterResto from "../components/FooterResto";
import profilePicture from "../assets/profpic.png";
import { API_BASE_URL } from "../../../backend/config";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { username: user } = useParams();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/users/login/find/${user}`)
      .then((response) => {
        const userData = response.data.data;
        setUsername(userData.username);
        setName(userData.name);
        setEmail(userData.email);
        setPassword(userData.password ? userData.password : "");
        setAddress(userData.address);
        setGender(userData.gender);
        setBirthDate(userData.birthdate);
        // setProfileImage(userData.profileImage);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console.");
        console.log(error);
      });
  }, []);

  const fileInputRef = useState('');

  const handleFileSelect = () => {
      // Trigger click on the hidden file input
      fileInputRef.current.click();
  };

  // const [ setProfileImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile.name);
    setProfileImage(selectedFile);
  };

  const handleUpdatedUser = () => {
    const originalDate = birthdate;
    const formattedDate = birthdate ? new Date(originalDate).toISOString().split('T')[0] : "";

    const data = {
      username,
      name,
      email,
      password: inputPassword == "" ? password : inputPassword,
      address,
      gender,
      birthdate:formattedDate,
      profileImage,
    };
    setLoading(true);
    axios
      .put(`${API_BASE_URL}/users/edit/${username}`, data)
      .then((result) => {
        console.log(result);
        navigate(`/profile/find/${result.data.username}`);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  };

  return (
    <div>
      <Navigation2 />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: "900px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "1200px", height: "800px", textAlign: "center" }}>
          <form className="flex flex-col gap-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="relative">
              <img
                src={profileImage != "" ? profileImage : `https://ui-avatars.com/api/?name=${name}`}
                alt="Profile Picture"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
                className="group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                onClick={handleFileSelect}
              />
              <div
                      className="  group-hover:flex absolute pt-16 inset-0 items-center justify-center bg-black bg-opacity-50 text-white"
                      onClick={handleFileSelect}
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%", 
                        alignItems: "center",
                        textAlign: "center",
                        alignContent: "center",
                      }}
                  >Ganti Foto
                      {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor" 
                          
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                          />
                      </svg> */}
                  </div>
                  {/* Hidden file input */}
              <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
              />
              </div>
              {/* <input type="file" /> */}
              <span
                className="pb-1 block"
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                Nama
              </span>
              <TextInput
                className="text-2xl mb-4"
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "300px",
                }}
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama kamu"
                required
                type="text"
              />
              {/* <p className="text-2xl mb-4" style={{ fontWeight: "bold" }}>
                {name}
              </p> */}
              <div>
                <ul className="flex w-full text-sm font-medium">
                  {/* <li className="py-4">
                    <span
                      className="pb-1 block"
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Nama
                    </span>
                    <TextInput
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "300px"
                      }}
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masukkan nama kamu"
                      required
                      type="text"
                    />
                  </li>
                  <li></li> */}
                </ul>
                <ul className="flex w-full text-sm font-medium">
                  <li className="py-4 pr-8">
                    <span
                      className="pb-1 block"
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Email
                    </span>
                    <TextInput
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "300px",
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email1"
                      placeholder="Masukkan email kamu"
                      type="email"
                    />
                  </li>
                  <li className="py-4">
                    <span
                      className="pb-1 block"
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Username
                    </span>
                    <TextInput
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "300px",
                      }}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="email1"
                      placeholder="Masukkan email kamu"
                      type="email"
                    />
                  </li>
                </ul>
                <ul className="flex w-full text-sm font-medium">
                  <li className="py-4 pr-8">
                    <span
                      className="pb-1 block"
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Jenis Kelamin
                    </span>
                    <select
                      id="jk1"
                      name="jeniskelamin"
                      className="w-full p-2 py-3 text-sm border rounded-lg"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "300px",
                        color: "#6B7280",
                      }}
                    >
                      <option value="" disabled selected>
                        Pilih jenis kelamin kamu
                      </option>
                      <option value="Pria">Pria</option>
                      <option value="Wanita">Wanita</option>
                    </select>
                  </li>
                  <li className="py-4">
                    <span
                      className="pb-1 block"
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Tanggal Lahir
                    </span>
                    <TextInput
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "300px",
                      }}
                      value={birthdate ? birthdate.split("T")[0] : ""}
                      onChange={(e) => setBirthDate(e.target.value)}
                      id="tanggalLahir1"
                      placeholder="Masukkan tanggal lahir kamu"
                      type="date"
                    />
                  </li>
                </ul>
                <ul className="flex w-full text-sm font-medium">
                  <li className="py-4 pr-8">
                    <span
                      className="pb-1 block"
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Alamat
                    </span>
                    <TextInput
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "300px",
                      }}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      id="alamat1"
                      placeholder="Masukkan alamat kamu"
                      type="textarea"
                    />
                  </li>
                  <li className="py-4">
                    <span
                      className="pb-1 block"
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      No. Telp
                    </span>
                    <TextInput
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "300px",
                      }}
                      // value={noTelp}
                      // onChange={(e) => setNoTelp(e.target.value)}
                      id="noTelp"
                      placeholder="Masukkan No. Telp"
                      type="textarea"
                    />
                  </li>
                </ul>
                <div
                  className="my-4"
                  style={{
                    width: "630px",
                    height: "1px",
                    backgroundColor: "#6B7280",
                  }}
                ></div>
                { password != "" &&
                  <ul className="flex w-full text-sm font-medium">
                    <li className="py-4 pr-8">
                      <span
                        className="pb-1 block"
                        style={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        Password
                      </span>
                      <TextInput
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          width: "300px",
                        }}
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                        id="alamat1"
                        placeholder="*****"
                        type="password"
                      />
                    </li>
                    <li className="py-4">
                      <span className="pb-6 block"></span>
                      <Button
                        href="#"
                        style={{
                          fontSize: "8px",
                          fontWeight: "normal",
                          backgroundColor: "#6B7280",
                          color: "white",
                          width: "150px",
                          height: "42px",
                        }}
                      >
                        Ganti Password
                      </Button>
                    </li>
                  </ul>
                }
              </div>

              <Button
                onClick={handleUpdatedUser}
                className="mt-8 "
                style={{
                  backgroundColor: "#FFA90A",
                  color: "white",
                  width: "150px",
                }}
              >
                Simpan
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <FooterResto />
    </div>
  );
};

export default EditProfile;
