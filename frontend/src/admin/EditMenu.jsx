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

const EditMenu = () => {
  const [menu_name, setMenuName] = useState('');                                                                                                                                                                                                                                       
  const [variant, setVariant] = useState('');
  const [price, setPrice] = useState(''); 
  const [stock, setStock] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/restaurants${id}`)
    .then((response) => {
      setMenuName(response.data.menu_name);
      setVariant(response.data.variant);
      setPrice(response.data.price); 
      setStock(response.data.stock);
    })
    .catch((error) => {
      setLoading('An error happened, please check console.');
      console.log(error);
    });
  }, [])

  const handleEditMenu = () => {
    const data = {
      menu_name,
      variant,
      price,
      stock, 
    };
    setLoading(true);
    axios
     .put(`http://localhost:8080/restaurants${id}`, data)
     .then(() => {
      setLoading(false);
      navigate('/admin');
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
   
      <Card className='mt-8 mb-20' style={{ width: '100%', maxWidth: '800px', height: 'auto', textAlign: 'center' }}>
        <form className='flex flex-col gap-4'>
        <div className='mt-20 mb-8' style={{ display: 'flex', alignItems: 'center', marginTop: '20px',width: '100%', maxWidth: '800px', height: 'auto', textAlign: 'center' }}>
          <Button color="warning" href="/admin/menu/:id" outline className='text-white bg-yellow border border-transparent enabled:hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900'>
            <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
          </Button>
          <h1 className='text-2xl sm:text-3xl md:text-4xl ' style={{ marginLeft: '20px' }}>Edit Menu</h1>       
        </div>
        <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input 
            type="text"
            id="menu_name"
            value={menu_name}
            onChange={(e) => setMenuName(e.target.value)}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
          </div>
          <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input 
            type="text"
            id="variant"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Variant</label>
          </div>
          <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input 
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Price</label>
          </div> 
          <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input 
            type="number" 
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Stock</label>
          </div>
          <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button 
              className="mt-8 w-full" 
              style={{ backgroundColor: "#FFA90A", color: "white", height: '48px' }}
              onClick={handleEditMenu}>
              Simpan
            </Button> 
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EditMenu
