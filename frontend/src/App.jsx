import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import RestaurantDetail from './pages/RestaurantDetail'
import RestaurantPage from './pages/RestaurantDetail'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Maps from './pages/Maps'

import ShowResto from './admin/ShowResto'
import CreateResto from './admin/CreateResto'
import EditResto from './admin/EditResto'
import DeleteResto from './admin/DeleteResto'
import ListResto from './admin/ListResto'

import ShowUser from './admin/user/ShowUser'
import DetailUser from './admin/user/DetailUser'
import CreateUser from './admin/user/CreateUser'
import EditUser from './admin/user/EditUser'
import DeleteUser from './admin/user/DeleteUser'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/restaurantdetail' element={<RestaurantDetail/>} />
      {/* <Route path='/restaurant/:id' element={<RestaurantDetail/>} /> */}
      <Route path='/restaurant' element={<RestaurantPage/>} />
      <Route path='/profile/:id' element={<Profile/>} />
      <Route path='/editprofile' element={<EditProfile/>} />
      <Route path='/maps' element={<Maps/>} />
      
      <Route path='/admin/' element={<ListResto/>} />
      <Route path='/admin/:resto_id' element={<ShowResto/>} />
      <Route path='/admin/edit/:resto_id' element={<EditResto/>} />
      <Route path='/admin/add' element={<CreateResto/>} />
      <Route path='/admin/delete/:resto_id' element={<DeleteResto/>} />

      <Route path='/user/' element={<ShowUser/>} />
      <Route path='/user/:id' element={<DetailUser/>} />
      <Route path='/user/edit/:id' element={<EditUser/>} />
      <Route path='/user/add' element={<CreateUser/>} />
      <Route path='/user/delete/:id' element={<DeleteUser/>} />
    </Routes>
  )
}

export default App