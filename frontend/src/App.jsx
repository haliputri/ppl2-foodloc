import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import RestaurantDetail from './pages/RestaurantDetail'
import RestaurantPage from './pages/RestaurantDetail'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/restaurant/:id' element={<RestaurantDetail/>} />
      <Route path='/restaurant' element={<RestaurantPage/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/editprofile' element={<EditProfile/>} />
    </Routes>
  )
}

export default App
