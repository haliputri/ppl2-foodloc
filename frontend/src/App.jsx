import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import RestaurantDetail from './pages/RestaurantDetail'
import RestaurantPage from './pages/RestaurantPage'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

import ShowResto from './admin/ShowResto'
import CreateResto from './admin/CreateResto' 
import EditResto from './admin/EditResto'
import DeleteResto from './admin/DeleteResto'
import ListResto from './admin/ListResto'

// import ListMenu from './admin/ListMenu'
// import CreateMenu from './admin/CreateMenu' 
// import EditMenu from './admin/EditMenu'
import AdminRestaurantDetail from './admin/AdminRestaurantDetail'

import ListUser from './admin/user/ListUser'
import DetailUser from './admin/user/DetailUser'
import CreateUser from './admin/user/CreateUser'
import EditUser from './admin/user/EditUser'
import DeleteUser from './admin/user/DeleteUser'

import UserRestaurant from './pages/user/UserRestaurant'
import UserRestaurantDetail from './pages/user/UserRestaurantDetail'
import UserHome from './pages/user/UserHome'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      {/* <Route path='/restaurantdetail' element={<RestaurantDetail/>} /> */}
      <Route path='/restaurant/:id' element={<RestaurantDetail/>} />
      <Route path='/restaurant' element={<RestaurantPage/>} />
      <Route path='/profile/find/:username' element={<Profile/>} />
      <Route path='/profile/find/edit/:username' element={<EditProfile/>} />
      
      <Route path='/admin/' element={<ListResto/>} />
      <Route path='/admin/:id' element={<ShowResto/>} />
      <Route path='/admin/edit/:id' element={<EditResto/>} />
      <Route path='/admin/add' element={<CreateResto/>} />
      <Route path='/resto/delete/:id' element={<DeleteResto/>} />

      <Route path='/admin/restaurant/:id' element={<AdminRestaurantDetail/>} />

      <Route path='/user/' element={<ListUser/>} />
      <Route path='/user/:id' element={<DetailUser/>} />
      <Route path='/user/edit/:id' element={<EditUser/>} />
      <Route path='/user/add' element={<CreateUser/>} />
      <Route path='/user/delete/:id' element={<DeleteUser/>} />
      
      <Route path='/:username/restaurant' element={<UserRestaurant/>} />
      <Route path='/:username/restaurant/:id' element={<UserRestaurantDetail/>} />
      <Route path='/home/:username' element={<UserHome/>} />
      {/* <Route path='/admin/:id' element={<ShowResto/>} />  */}
      {/* <Route path='/admin/addresto' element={<CreateResto/>} /> */}
      {/* <Route path='/admin/editresto/:id' element={<EditResto/>} />  */}
      {/* <Route path='/admin/deleteresto/:id' element={<DeleteResto/>} /> */}
      {/* <Route path='/admin/menu/:id' element={<ListMenu/>} /> */}
      {/* <Route path='/addmenu' element={<CreateMenu/>} /> */}
      {/* <Route path='/admin/editmenu/:id' element={<EditMenu/>} /> */}
    </Routes>
  )
}

export default App