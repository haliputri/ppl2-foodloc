import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'

const DetailUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/users/${id}`)
    .then((response) => {
      setUser(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, [])
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4">User Detail</h1>
      { loading? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Profile Image</span>
            <span>{user.profileImage}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{user._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Username</span>
            <span>{user.username}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Name</span>
            <span>{user.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Password</span>
            <span>{user.password}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Gender</span>
            <span>{user.gender}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Birthdate</span>
            <span>{user.birthdate}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Gender</span>
            <span>{user.address}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailUser
