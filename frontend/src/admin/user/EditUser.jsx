import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'

const EditUser = () => {
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
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${id}`)
    .then((response) => {
      setUsername(response.data.username);
      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setAddress(response.data.address);
      setGender(response.data.gender);
      setBirthDate(response.data.birthdate);
      setProfileImage(response.data.profileImage);
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console.');
      console.log(error);
    })
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleUpdatedUser = () => {
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
    axios.put(`http://localhost:8080/users/${id}`, data)
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
      <h1 className='text-3xl my-4'>Edit User</h1>
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
          <input type="file" 
          value={profileImage}
          onChange={handleFileChange}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleUpdatedUser}>Save</button>
      </div>
    </div>
  )
} 

<<<<<<< HEAD
export default EditUser
=======
export default EditUser
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
