import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateResto = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [social_media, setSocialMedia] = useState('');
  const [rating, setRating] = useState('');
  const [resto_id, setRestoId] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveResto = () => {
    const data = {
      resto_id,
      name,
      address,
      city,
      social_media,
      phone_number,
      rating,
    };
    setLoading(true);
    axios
     .post('http://localhost:8080/restaurants', data)
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
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Resto</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[680px] p-4 mx-auto'>
      <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Resto Id</label>
          <input 
          type="text" 
          value={resto_id}
          onChange={(e) => setRestoId(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Address</label>
          <input type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>City</label>
          <input type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Sosmed</label>
          <input type="text" 
          value={social_media}
          onChange={(e) => setSocialMedia(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Telp</label>
          <input type="number" 
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Rating</label>
          <input type="number" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveResto}>Save</button>
      </div>
    </div>
  )
}

export default CreateResto