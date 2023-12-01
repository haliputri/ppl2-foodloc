import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'


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
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create User</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[680px] p-4 mx-auto'>
      <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Username</label>
          <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Nama</label>
          <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Password</label>
          <input 
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          <label className='text-xl mr-4 text-gray-500'>Gender</label>
          <input 
          type="text" 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Birthdate</label>
          <input 
          type="date" 
          value={birthdate}
          onChange={(e) => setBirthDate(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Profile Image</label>
          {/* <input type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          /> */}
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveUser}>Save</button>
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default CreateUser
=======
export default CreateUser
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
