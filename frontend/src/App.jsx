import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import RestaurantDetail from './pages/RestaurantDetail'
import RestaurantPage from './pages/RestaurantDetail'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

import ShowResto from './admin/ShowResto'
import CreateResto from './admin/CreateResto' 
import EditResto from './admin/EditResto'
import DeleteResto from './admin/DeleteResto'
import ListResto from './admin/ListResto'

import ListMenu from './admin/ListMenu'
import CreateMenu from './admin/CreateMenu' 
import EditMenu from './admin/EditMenu'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/restaurantdetail' element={<RestaurantDetail/>} />
      {/* <Route path='/restaurant/:id' element={<RestaurantDetail/>} /> */}
      <Route path='/restaurant' element={<RestaurantPage/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/editprofile' element={<EditProfile/>} />
      
      <Route path='/admin/' element={<ListResto/>} />
      <Route path='/admin/:id' element={<ShowResto/>} /> 
      <Route path='/admin/addresto' element={<CreateResto/>} />
      <Route path='/admin/editresto/:id' element={<EditResto/>} /> 
      <Route path='/admin/deleteresto/:id' element={<DeleteResto/>} />
      
      <Route path='/admin/menu/:id' element={<ListMenu/>} />
      <Route path='/addmenu' element={<CreateMenu/>} />
      <Route path='/admin/editmenu/:id' element={<EditMenu/>} />
    </Routes>
  )
}

export default App
