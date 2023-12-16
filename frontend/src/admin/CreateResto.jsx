import React from "react";
import bg from "../assets/bg-yellow.png";
import { Button, Card } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useState, useRef } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { daysInWeek, setDay, setDayOfYear } from "date-fns";
import { API_BASE_URL } from "../../../backend/config";

const CreateResto = () => {
  const [restoImage, setRestoImage] = useState("");
  const [menuImage, setMenuImage] = useState("");
  const [resto_id, setRestoId] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [social_media, setSocialMedia] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [min_price, setMin] = useState("");
  const [max_price, setMax] = useState("");
  const [day, setDay] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");


  const navigate = useNavigate();

  //CHANGE PHOTO : RESTO N MENU
  const fileInputRef = useRef("");
  const handleFileSelect = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };
  const handleRestoImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile.name);
    setRestoImage(selectedFile);
  };
  const handleMenuImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile.name);
    setMenuImage(selectedFile);
  };

  //SCHEDULE
  const [schedules, setSchedules] = useState([
    { day: "", open: "", close: "" },
  ]);
  const handleAddSchedule = () => {
    // Add a new empty schedule to the list
    setSchedules([...schedules, { day: "", open: "", close: "" }]);
  };
  const handleDayChange = (index, value) => {
    // Update the day for the specific schedule
    const newSchedules = [...schedules];
    newSchedules[index].day = value;
    setSchedules(newSchedules);
  };
  const handleOpenChange = (index, value) => {
    // Update the open hour for the specific schedule
    const newSchedules = [...schedules];
    newSchedules[index].open = value;
    setSchedules(newSchedules);
  };
  const handleCloseChange = (index, value) => {
    // Update the close hour for the specific schedule
    const newSchedules = [...schedules];
    newSchedules[index].close = value;
    setSchedules(newSchedules);
  };

  //SAVE RESTO
  const handleSaveResto = () => {
    const data = {
      restoImage,
      menuImage,
      name,
      address,
      city,
      social_media,
      phone_number,
      rating,
      category,
      min_price,
      max_price,
      day,
      open,
      close,
      latitude,
      longitude,
    };
    setLoading(true);
    axios
      .post(`${API_BASE_URL}/restaurants`, data)
      .then(() => {
        setLoading(false);
        navigate("/admin");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  };

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

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          textAlign: "center",
        }}
      >
        <Card
          className="mb-4 md:mb-2 "
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            textAlign: "center",
          }}
        >
          <form className="flex flex-col gap-4">
            <div
              className="mt-20 mb-8"
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
                Create Restaurant
              </h1>
            </div>
            <div>
              <h2
                className="sm:text-3xl md:text-4xl"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Cover Restaurant
              </h2>

              <div className="relative">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    textAlign: "center",
                  }}
                  src={
                    restoImage != ""
                      ? restoImage
                      : `https://flowbite.com/docs/images/carousel/carousel-1.svg?name=${name}`
                  }
                  alt="restaurant image"
                  className="group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  onClick={handleFileSelect}
                />
                <div
                  className="  group-hover:flex absolute pt-9 inset-0 items-center justify-center bg-black bg-opacity-50 text-white"
                  onClick={handleFileSelect}
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  Ganti Foto
                </div>
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleRestoImageChange}
              />
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                height: "auto",
                textAlign: "center",
              }}
            >
              <h2
                className="sm:text-3xl md:text-4xl "
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Menu
              </h2>
              <div className="relative">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    textAlign: "center",
                  }}
                  src={
                    menuImage != ""
                      ? menuImage
                      : `https://flowbite.com/docs/images/carousel/carousel-1.svg?name=${name}`
                  }
                  alt="restaurant image"
                  className="group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  onClick={handleFileSelect}
                />
                <div
                  className="  group-hover:flex absolute pt-9 inset-0 items-center justify-center bg-black bg-opacity-50 text-white"
                  onClick={handleFileSelect}
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  Ganti Foto
                </div>
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleMenuImageChange}
              />
              {/* <div
                className="flex gap-2"
                style={{
                  width: "100%",
                  maxWidth: "100px",
                  height: "auto",
                  textAlign: "center",
                }}
              >  */}

              {/* <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                {/* Add Photo Button */}
              {/* <button
                  style={{ border: "2px solid #FFA90A" }}
                  className="bg-white text-black w-full hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={() => {
                    // Handle add photo logic here
                    console.log("Add Photo button clicked!");
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
                </button>  */}
              {/* </div> */}
            </div>
          </form>
        </Card>

        <div
          className="flex flex-col mb-2 sm:flex-row gap-2"
          style={{ alignItems: "flex-start" }}
        >
          <Card
            style={{
              width: "100%",
              maxWidth: "1200px",
              height: "auto",
              textAlign: "center",
            }} 
          >
            <h2
              className="sm:text-3xl md:text-4xl "
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Restaurant Profile
            </h2>
            <form className="flex flex-col gap-4">
              <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <input
                  type="text"
                  id="name"
                  value={resto_id}
                  onChange={(e) => setRestoId(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Restaurant ID
                </label> */}
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
                  Restaurant Name
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
                <select
                  id="type"
                  value={category}
                  name="type"
                  onChange={(e) => setCategory(e.target.value)}
                  className="block px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "46px",
                    justifyContent: "flex-start",
                    color: "#6B7280",
                  }}
                >
                  <option value="" disabled selected>
                    {" "}
                    Restaurant Type
                  </option>
                  <option value="restaurants">Restaurant</option>
                  <option value="cafes">Cafe</option>
                  <option value="jajanan">Jajanan UMKM</option>
                </select>
              </div>
              <h2
              className="sm:text-3xl md:text-4xl mt-4"
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Restaurant Rating
            </h2>
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
              <h2
              className="sm:text-3xl md:text-4xl mt-4"
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Price
            </h2>
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
                  value={min_price}
                  onChange={(e) => setMin(e.target.value)}
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
                  value={max_price}
                  onChange={(e) => setMax(e.target.value)}
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
            </form>
          </Card>
          <Card
            style={{
              width: "100%",
              maxWidth: "1200px",
              height: "auto",
              textAlign: "center",
            }}
          >
            <h2
              className="sm:text-3xl md:text-4xl "
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Restaurant Location
            </h2>
            <form className="flex flex-col gap-4 justify-between">
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
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  City
                </label>
              </div>
              <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="number"
                  id="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Latitude
                </label>
              </div>
              <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="number"
                  id="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Longitude
                </label>
              </div>
              <div
                className="relative"
                style={{
                display: "flex",
                flexDirection: "column",
                }}
              >
                <h2 className="pb-4 text-orange-FFA90A text-sm dark:text-white font-bold font-['Lato']">
                  {" "}
                  Locations{" "}
                </h2>
                <div className="Maps flex items-center w-full justify-center ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253492.9684735126!2d107.53117671354208!3d-6.911203057753583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c532e567b41b%3A0xace4df8df0c30c3!2sHeyHo*21%20Eatery!5e0!3m2!1sen!2sid!4v1699849948074!5m2!1sen!2sid"
                    width="100%"
                    height="220px"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </form>
          </Card>
          
        </div>
        <div
          className="flex flex-col  sm:flex-row gap-2"
          style={{ alignItems: "flex-start" }}
        >
          <Card
            style={{
              width: "100%",
              maxWidth: "1200px",
              // height: "800px",
              textAlign: "center",
            }}
          >
            <h2
              className="sm:text-3xl md:text-4xl "
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Restaurant Schedule
            </h2>
            {schedules.map((schedule, index) => (
              <form key={index} className="gap-4">
                <div className="flex flex-row gap-4">
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
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="px-2.5 py-2 sm:w-20 md:w-40 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        height: "48px",
                        // width: "200px",
                        maxWidth: "300px",
                        color: "#6B7280",
                      }}
                    >
                      <option value="" disabled selected>
                        {" "}
                        Day
                      </option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
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
                      id="open"
                      value={open}
                      onChange={(e) => setOpen(e.target.value)}
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
                      value={close}
                      onChange={(e) => setClose(e.target.value)}
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
                </div>
              </form>
            ))}
            <Button
              className="mt-4 w-full text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
              style={{
                backgroundColor: "#FFA90A",
                color: "white",
                height: "48px",
              }}
              onClick={handleAddSchedule}
            >
              Add Schedule
            </Button>
          </Card>
          <Card
            style={{
              width: "100%",
              maxWidth: "1200px",
              height: "auto",
              textAlign: "center",
            }}
            className="sm:pb-4"
          >
            <h2
              className="sm:text-3xl md:text-4xl "
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Restaurant Contact
            </h2>
            <form className="flex flex-col gap-4">
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
                  id="social_media"
                  value={social_media}
                  onChange={(e) => setSocialMedia(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Social Media
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
                  id="phone_number"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Phone Number
                </label>
              </div>
            </form>
          </Card>
          
        </div>
        <form
          className="flex flex-col gap-4  mt-4  md:mt-4  "
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            textAlign: "center",
          }}
        >
          <div
            className="relative"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              className="mb-8 w-full text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
              color="warning"
              outline
              style={{
                backgroundColor: "white",
                color: "#FFA90A",
                height: "48px",
              }}
              onClick={handleSaveResto}
            >
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateResto;
