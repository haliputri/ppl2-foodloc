import React  from "react";
import axios from "axios";
import bg from "../assets/bg-yellow.png";
import { Button, Card} from "flowbite-react";
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useState } from 'react';
import { Spinner } from "flowbite-react"; 
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { API_BASE_URL } from "../../../backend/config";

const ShowResto = () => {
  const [restaurant, setResto] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/restaurants/${id}`)
      .then((response) => {
        setResto(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])
  
  return (
    <div className="p-4" 
    style={{
      backgroundImage: `url(${bg})`,
      height: "800px",
      display: "flex", 
    }}> 

      { loading ? 
        <div className="flex flex-wrap gap-2" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}> 
        <Spinner color="warning" aria-label="Warning Extra large spinner example" size="xl"/> </div>
      : ''}
        <div style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
        <Card className='pb-12' style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
          <form className='flex flex-col gap-4'>
          <div  style={{display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
            <Button color="warning" href="/admin" outline className=' text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900'>
              <HiOutlineArrowLeft  className="ml-2 h-5 w-5" />
            </Button>
            <h1 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "20px", fontWeight: "bold" }}>Show Restaurant</h1>        
          </div>
          <div style={{ display: 'flex', gap: '60px' }}>
            <div>
              <div>
                <h2 className='sm:text-3xl md:text-4xl' style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>Cover Restaurant</h2>
                <div className="relative">
                  <img
                      style={{ width: '100%', maxWidth: '200px', height: 'auto', textAlign: 'center' }}
                      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                      alt="..."
                      className="group-hover:opacity-80 transition-opacity duration-300 cursor-pointer "
                   />

                  <div
                      className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-black bg-opacity-50 text-white"
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
            </div>   
            <div style={{ width: '100%', maxWidth: '1200px', height: 'auto', textAlign: 'center' }}>
              <h2 className='sm:text-3xl md:text-4xl ' style={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>Menu</h2>  
              <div className="flex gap-2" style={{ width: '100%', maxWidth: '100px', height: 'auto', textAlign: 'center' }}>
                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />  
                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />   
              </div>
            </div> 
           </div>
            
            
          <ul className="w-full text-sm font-medium ">
            <h2 className='sm:text-3xl md:text-4xl' style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>Detail Restaurant</h2>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Id
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {restaurant.resto_id}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Nama
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {restaurant.name}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Address
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {restaurant.address}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    City
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {restaurant.city}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Phone Number
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {restaurant.phone_number}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Social Media
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {restaurant.social_media}
                  </span>
                </li>
          </ul>
          </div>
          
          </form>
        </Card> 
        </div>

         
      </div>
  )
}

export default ShowResto;