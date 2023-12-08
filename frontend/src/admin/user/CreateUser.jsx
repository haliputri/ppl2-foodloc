import React from "react";
import bg from "../../assets/bg-yellow.png";
import { Button, Card } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const fileInputRef = useState('');

  // const handleFileSelect = () => {
  //     // Trigger click on the hidden file input
  //     fileInputRef.current.click();
  // };

  // const handleFileChange = (event) => {
  //     // Handle the selected file here
  //     const selectedFile = event.target.files[0];
  //     console.log('Selected File:', selectedFile.name);
  //     // You can perform additional actions with the selected file
  // }; 

  const handleSaveUser = () => {
    const data = {
      username,
      name,
      email,
      password,
      address,
      gender,
      birthdate,
      profileImage,
    }; 
    setLoading(true);
    axios.post('http://localhost:8080/users', data)
    .then(() => {
      setLoading(false);
      navigate('/user');
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
     })
  }
  

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {loading ? (
        <div
          className="flex flex-wrap gap-2"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
          }}
        >
          <Spinner
            color="warning"
            aria-label="Warning Extra large spinner example"
            size="xl"
          />{" "}
        </div>
      ) : (
        ""
      )} 

      <div style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
        <Card className='mb-4 md:mb-2 ' style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
        <form className="flex flex-col gap-4">
          <div
            className="mt-20  "
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              width: "100%",
              maxWidth: "800px",
              height: "auto",
              textAlign: "center",
            }}
          >
            <Button
              color="warning"
              href="/admin"
              outline
              className="text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
            >
              <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
            </Button>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl "
              style={{ marginLeft: "20px" }}
            >
              Create User
            </h1>
          </div>
          <div> 
              <h2 className='sm:text-3xl md:text-4xl' style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>User Picture </h2>

              <div className="relative">
                  <img
                      style={{ width: '100%', maxWidth: '100px', height: 'auto', textAlign: 'center' }}
                      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                      alt="..."
                      className="group-hover:opacity-80 transition-opacity duration-300 cursor-pointer "
                      // onClick={handleFileSelect}
                  />

                  <div
                      className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-black bg-opacity-50 text-white"
                      // onClick={handleFileSelect}
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-10 w-10"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                          />
                      </svg>
                  </div>
              </div>

              {/* Hidden file input */}
              <input
                  type="file"
                  // ref={fileInputRef}
                  style={{ display: 'none' }}
                  // onChange={handleFileChange}
              />
          </div> 
        </form> 
        </Card>
        <div className="flex flex-col  sm:flex-row gap-4" style={{alignItems: 'flex-start'}}>
          <Card className='md:mt-2' style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <h2 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}> Profile</h2>  
            <form className='flex flex-col gap-4'>
              <div
              className="relative"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Nama Lengkap
              </label>
              </div>
              <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Username
                </label>
              </div>
              <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
            </form>
          </Card> 
          <Card  className='md:mt-2  pb-16'  style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <h2 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>Information</h2>  
            <form className='flex flex-col gap-4'>
            <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column", 
                }}
              >
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                > 
                  Address
                </label>
              </div>
              <div
                className="relative" 
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Gender
                </label>
                <select
                      id="jk1"
                      name="jeniskelamin"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      
                    >
                      <option value="" disabled selected>
                        Pilih jenis kelamin kamu
                      </option>
                      <option value="Pria">Pria</option>
                      <option value="Wanita">Wanita</option>
                    </select>

                
              </div>
              <div
                className="relative" 
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="date"
                  id="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Birth Date
                </label>
              </div> 
            </form>
          </Card>
        </div>
        <form className='flex flex-col gap-4  mt-4  md:mt-4  ' style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
          <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button 
              className="mb-8 w-full text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900" 
              color="warning" 
              outline  
              style={{ backgroundColor: "white", color: "#FFA90A", height: '48px' }}
              onClick={handleSaveUser}
            >
              Simpan
            </Button>
          </div>
        </form>  
      </div>
    </div> 
  )
}

export default CreateUser
