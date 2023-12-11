import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Dropdown } from "flowbite-react";
import Navigation from "../components/Navigation";
import HeroLanding from "../components/HeroLanding";
import FooterResto from "../components/FooterResto";
import CardResto from "../components/CardResto";
import { Button } from "flowbite-react";
import food1 from "../assets/food-1.png";
import { Link } from "react-router-dom";
import star from '../assets/star.svg';

const RestaurantPage = () => {
  const [restaurants, setResto] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button3Clicked, setButton3Clicked] = useState(false);
  const [button4Clicked, setButton4Clicked] = useState(false);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [button5Clicked, setButton5Clicked] = useState(false);
  const [button6Clicked, setButton6Clicked] = useState(false);
  const [button7Clicked, setButton7Clicked] = useState(false);
  const [button8Clicked, setButton8Clicked] = useState(false);
  const [button9Clicked, setButton9Clicked] = useState(false);

  const handleClickRating = (buttonNumber) => {
    setButton5Clicked(false);
    setButton6Clicked(false);
    setButton7Clicked(false);
    setButton8Clicked(false);
    setButton9Clicked(false);

    switch (buttonNumber) {
      case 1:
        setButton5Clicked(true);
        break;
      case 2:
        setButton6Clicked(true);
        break;
      case 3:
        setButton7Clicked(true);
        break;
      case 4:
        setButton8Clicked(true);
        break;
      case 5:
        setButton9Clicked(true);
        break;
    }
  }

  const handleMinInputChange = (event) => {
    const min = event.target.value;
    setMinValue(min);
  
    // Deselect price buttons when input is manually changed
    setButton1Clicked(false);
    setButton2Clicked(false);
    setButton3Clicked(false);
    setButton4Clicked(false);
  };
  
  const handleMaxInputChange = (event) => {
    const max = event.target.value;
    setMaxValue(max);
  
    // Deselect price buttons when input is manually changed
    setButton1Clicked(false);
    setButton2Clicked(false);
    setButton3Clicked(false);
    setButton4Clicked(false);
  };

  const handleClickPrice = (buttonNumber) => {
    // Reset the state of all buttons
    setButton1Clicked(false);
    setButton2Clicked(false);
    setButton3Clicked(false);
    setButton4Clicked(false);

    // Set the state of the clicked button
    switch (buttonNumber) {
      case 1:
        setButton1Clicked(true);
        setMinValue('0');
        setMaxValue('30000');
        break;
      case 2:
        setButton2Clicked(true);
        setMinValue('30000');
        setMaxValue('70000');
        break;
      case 3:
        setButton3Clicked(true);
        setMinValue('70000');
        setMaxValue('150000');
        break;
      case 4:
        setButton4Clicked(true);
        setMinValue('150000');
        setMaxValue('');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/restaurants")
      .then((response) => {
        setResto(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to split the restaurants into chunks of size 3
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Split the restaurants into chunks of size 3
  const restaurantChunks = chunkArray(restaurants, 3);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCheckboxChange = (item) => {
    const updatedSelection = [...selectedItems];
    const index = updatedSelection.indexOf(item);

    if (index === -1) {
      updatedSelection.push(item);
    } else {
      updatedSelection.splice(index, 1);
    }

    setSelectedItems(updatedSelection);
  };

  return (
    <div>
      <body>
        <Navigation />
        <div className="m-24 ">
          <div className="flex items-center justify-between mb-4">
            <h4
              class="text-2xl font-bold dark:text-white mb-4 ml-8"
              style={{ color: "#FFA90A" }}
            >
              Restaurants
            </h4>
            <form className="flex">
              <div className="relative inline-block text-left">
                <Button onClick={toggleDropdown} className="items-center py-2.5 px-2.5 font-medium text-center border border-yellow-300 rounded-s-lg hover:bg-gray-200">
                  <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="orange">
                    <path stroke="orange" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m1 1 4 4 4-4" />
                  </svg>
                </Button>
                {dropdownVisible && (
                  <div className="origin-top-right absolute center-0 mt-2   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" style={{ width: "256px" }} >
                    <div className="py-1">
                      <h6 class="mx-4 text-sm font-medium text-yellow-400">
                        Tipe
                      </h6>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes("Item 1")}
                          onChange={() => handleCheckboxChange("Item 1")}
                          className="mx-4"
                        />
                        Restoran
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes("Item 2")}
                          onChange={() => handleCheckboxChange("Item 2")}
                          className="mx-4"
                        />
                        Cafe
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes("Streetfood")}
                          onChange={() => handleCheckboxChange("Streetfood")}
                          className="mx-4"
                        />
                        Streetfood
                      </label>
                      <h6 class="mt-4 mx-4 mb-2 text-sm font-medium text-yellow-400">
                        Harga
                      </h6>
                      <div className="my-2 mx-4">
                        <div className="flex justify-between w-full items-center">
                          <input
                            type="text"
                            placeholder="Min"
                            value={minValue}
                            onChange={handleMinInputChange}
                            style={{
                              width: '45%',
                              borderRadius: '5px',
                              borderColor: "#FFA90A",
                            }}
                          ></input>
                          <hr style={{ height: '2px', width: '12px', margin: '0', border: '1.5px solid orange' }} />
                          <input
                            type="text"
                            placeholder="Max"
                            value={maxValue}
                            onChange={handleMaxInputChange}
                            style={{
                              width: '45%',
                              borderRadius: '5px',
                              borderColor: "#FFA90A",
                            }}
                          ></input>
                        </div>
                        <div className='flex my-2 justify-between'>
                          <Button
                            onClick={() => handleClickPrice(1)}
                            style={{
                              backgroundColor: button1Clicked ? '#FFA90A' : '#fee6b9',
                              color: button1Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginRight: '3px'
                            }}
                          >
                            0 - 30K
                          </Button>
                          <Button
                            onClick={() => handleClickPrice(2)}
                            style={{
                              backgroundColor: button2Clicked ? '#FFA90A' : '#fee6b9',
                              color: button2Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginLeft: '3px'
                            }}
                          >
                            30K - 70K
                          </Button>
                        </div>
                        <div className='flex my-2 justify-between'>
                          <Button
                            onClick={() => handleClickPrice(3)}
                            style={{
                              backgroundColor: button3Clicked ? '#FFA90A' : '#fee6b9',
                              color: button3Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginRight: '3px'
                            }}
                          >
                            70K -150K
                          </Button>
                          <Button
                            onClick={() => handleClickPrice(4)}
                            style={{
                              backgroundColor: button4Clicked ? '#FFA90A' : '#fee6b9',
                              color: button4Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginLeft: '3px'
                            }}
                          >
                            150K+
                          </Button>
                        </div>
                      </div>
                      <h6 class="mt-4 mx-4 mb-2 text-sm font-medium text-yellow-400">
                        Rating
                      </h6>
                      <div className="mx-4">
                        <div className='flex my-2 justify-between'>
                          <Button
                            onClick={() => handleClickRating(1)}
                            style={{
                              backgroundColor: button5Clicked ? '#FFA90A' : '#fee6b9',
                              color: button5Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginRight: '3px'
                            }}
                          >
                            <span style={{ marginRight: '1px' }}>1</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill={button5Clicked ? "white" : "orange"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </Button>
                          <Button
                            onClick={() => handleClickRating(2)}
                            style={{
                              backgroundColor: button6Clicked ? '#FFA90A' : '#fee6b9',
                              color: button6Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginLeft: '3px'
                            }}
                          >
                            <span style={{ marginRight: '1px' }}>2</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill={button6Clicked ? "white" : "orange"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </Button>
                        </div>
                        <div className='flex my-2 justify-between'>
                          <Button
                            onClick={() => handleClickRating(3)}
                            style={{
                              backgroundColor: button7Clicked ? '#FFA90A' : '#fee6b9',
                              color: button7Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginRight: '3px'
                            }}
                          >
                            <span style={{ marginRight: '1px' }}>3</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill={button7Clicked ? "white" : "orange"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </Button>
                          <Button
                            onClick={() => handleClickRating(4)}
                            style={{
                              backgroundColor: button8Clicked ? '#FFA90A' : '#fee6b9',
                              color: button8Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginLeft: '3px'
                            }}
                          >
                            <span style={{ marginRight: '1px' }}>4</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill={button8Clicked ? "white" : "orange"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </Button>
                        </div>
                        <div className='flex my-2 justify-between'>
                          <Button
                            onClick={() => handleClickRating(5)}
                            style={{
                              backgroundColor: button9Clicked ? '#FFA90A' : '#fee6b9',
                              color: button9Clicked ? 'white' : 'gray',
                              fontFamily: 'Lato',
                              fontWeight: 'bold',
                              width: '50%',
                              marginRight: '3px'
                            }}
                          >
                            <span style={{ marginRight: '1px' }}>5</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill={button9Clicked ? "white" : "orange"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative w-full">
                <input type="search" style={{ height: "48px" }} id="search-dropdown" class=" text-sm border border-yellow-300" placeholder="Search Restaurants..." />
                <button type="submit" class="absolute top-0 p-2 text-sm font-medium h-full text-white bg-orange-400 rounded-e-lg">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          {restaurantChunks.map((chunk, index) => (
            <div key={index} className="flex mb-16 ml-8">
              {chunk.map((restaurant) => (
                <Link to={`${restaurant.resto_id}`} key={restaurant.resto_id}>
                  <Card
                    key={restaurant.resto_id}
                    className="mr-24"
                    style={{ width: "250px" }}
                    href="#"
                    imgAlt=""
                    imgSrc={food1}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {restaurant.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {restaurant.address}
                    </p>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {restaurant.rating}
                    </h5>
                  </Card>
                </Link>
              ))}
            </div>
          ))}
          <div className="flex flex-col items-center"></div>
        </div>
        <FooterResto />
      </body>
    </div>
  );
};

export default RestaurantPage;
