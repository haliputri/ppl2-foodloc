import React from 'react';
import bg from "../assets/bg-yellow.png";
import { Button, Card} from "flowbite-react";
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useState } from 'react';
import { Spinner } from "flowbite-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditResto = () => {
  const [name, setName] = useState('');                                                                                                                                                                                                                                       
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [social_media, setSocialMedia] = useState('');
  // const [resto_id, setRestoId] = useState('');
  const [rating, setRating] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const fileInputRef = useState('');

    const handleFileSelect = () => {
        // Trigger click on the hidden file input
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        // Handle the selected file here
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile.name);
        // You can perform additional actions with the selected file
    };

  useEffect(() => {
    axios.get(`http://localhost:8080/restaurants/${id}`)
    .then((response) => {
      setName(response.data.data.name);
      setAddress(response.data.data.address)
      setCity(response.data.data.city)
      setSocialMedia(response.data.data.social_media)
      setPhoneNumber(response.data.data.phone_number)
      setRating(response.data.data.rating)
      // setType(response.data.data.type)
      // setMin(response.data.data.min)
      // setMax(response.data.data.max)
      // setDay(response.data.data.day)
      // setOpen(response.data.data.open)
      // setClose(response.data.data.close)
      // setRestoId(response.data.setRestoId)
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console.');
      console.log(error);
    })
  }, []);
  const handleEditResto = () => {
    const data = {
      name,
      address,
      city,
      social_media,
      phone_number,
      rating,
      type,
      min,
      max,
      day,
      open,
      close,
      // resto_id,
    };
    setLoading(true);
    axios
     .put(`http://localhost:8080/restaurants/${resto_id}`, data)
     .then(() => {
      setLoading(false);
      navigate('/admin');
     })
     .catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console');n
      console.log(error);
     })
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {loading ? 
        <div className="flex flex-wrap gap-2" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}> 
        <Spinner color="warning" aria-label="Warning Extra large spinner example" size="xl"/> </div>
      : ''}
      
      <div style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
        <Card className='mb-4 md:mb-2 ' style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
          <form className='flex flex-col gap-4'>

          <div  style={{display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <Button color="warning" href="/admin" outline className=' text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900'>
              <HiOutlineArrowLeft  className="ml-2 h-5 w-5" />
            </Button>
            <h1 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "20px", fontWeight: "bold" }}>Edit Restaurant</h1>        
          </div>

          <div>
              <h2 className='sm:text-3xl md:text-4xl' style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>Cover Restaurant</h2>

              <div className="relative">
                  <img
                      style={{ width: '100%', maxWidth: '100px', height: 'auto', textAlign: 'center' }}
                      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                      alt="..."
                      className="group-hover:opacity-80 transition-opacity duration-300 cursor-pointer "
                      onClick={handleFileSelect}
                  />

                  <div
                      className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-black bg-opacity-50 text-white"
                      onClick={handleFileSelect}
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
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
              />
          </div>  

          <div style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <h2 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>Menu</h2>  
            <div className="flex gap-2" style={{ width: '100%', maxWidth: '100px', height: 'auto', textAlign: 'center' }}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />  
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />   
            {/* Add Photo Button */}
            <button
                  style={{ border: '2px solid #FFA90A' }}
                  className="bg-white text-black w-full hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={() => {
                      // Handle add photo logic here
                      console.log('Add Photo button clicked!');
                  }}
              >
                  <div className="flex flex-col items-center justify-center p-4 px-8 h-full">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#FFA90A" 
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                          />
                      </svg>
                      <p className="text-xs">Add Photo</p>
                  </div>
              </button>
            </div>
          </div> 
          </form>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Card className='md:mt-2' style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <h2 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>Restaurant Profile</h2>  
            <form className='flex flex-col gap-4'>
            <ul className='flex flex-row gap-4 w-full'>
              <li className="flex flex-col py-4 pr-8 gap-4">
                <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input 
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " />
                  <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Restaurant Name</label>
                </div> 
                <div
                    className="relative"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                        <select
                          id="type"
                          // value={type}
                          name="type"
                          // onChange={(e) => setType(e.target.value)}
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            width: "300px",
                            color: "#6B7280",
                          }}
                        >
                          <option value="" disabled selected> Restaurant Type</option>
                          <option value="Restaurant">Restaurant</option>
                          <option value="Cafe">Cafe</option>
                          <option value="Streetfood">Streetfood</option>
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
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Rating
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
                    type="number"
                    id="min"
                    // value={min}
                    // onChange={(e) => setMin(e.target.value)}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Minimal Price
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
                    type="number"
                    id="max"
                    // value={max}
                    // onChange={(e) => setMax(e.target.value)}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Maximal Price
                  </label>
                </div>
              </li>
              <li className="flex flex-col py-4 pr-8 gap-4">
                  <div
                      className="relative"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      <select
                            id="day"
                            name="day"
                            // value={day}
                            // onChange={(e) => setDay(e.target.value)}
                            className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",  
                              width: "200px",
                              maxWidth: "300px",
                              color: "#6B7280",
                            }}
                          >
                            <option value="" disabled selected> Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select> 
                        
                  </div>
             </li>
              <li className="flex flex-col py-4 pr-8 gap-4">
                  <div
                      className="relative"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                    <input
                      type="number"
                      id="open"
                      // value={open}
                      // onChange={(e) => setOpen(e.target.value)}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Open Hour
                    </label>
                  </div>
              </li>
              <li className="flex flex-col py-4 pr-8 gap-4">
                  <div
                      className="relative"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                    <input
                      type="number"
                      id="close"
                      // value={close}
                      // onChange={(e) => setClose(e.target.value)}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Close Hour
                    </label>
                  </div>
              </li>
            

            </ul>

            </form>
          </Card>
          <div
          className="flex flex-col  sm:flex-row gap-4"
          style={{ alignItems: "flex-start" }}
          >
          <Card  className='md:mt-2'  style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <h2 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>Restaurant Contact</h2>  
            <form className='flex flex-col gap-4'>
            <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input 
                type="text"
                id="social_media"
                value={social_media}
                onChange={(e) => setSocialMedia(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Social Media</label>
              </div>
              <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input 
                type="number" 
                id="phone_number"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Phone Number</label>
              </div>
            </form>
          </Card>
          <Card className='md:mt-2'   style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <h2 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>Restaurant Location</h2>  
            <form className='flex flex-col gap-4'>
              <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input 
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Address</label>
              </div>
              <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input 
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">City</label>
              </div>
            </form>
          </Card> 
          </div>
        </div>
        <form className='flex flex-col gap-4  mt-4  md:mt-4  ' style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
          <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button 
              className="mb-8 w-full text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900" 
              color="warning" 
              outline  
              style={{ backgroundColor: "white", color: "#FFA90A", height: '48px' }}
              onClick={handleEditResto}>
              Simpan
            </Button> 
          </div>
        </form> 
      </div>  
   
      
    </div>
  );
};

export default EditResto