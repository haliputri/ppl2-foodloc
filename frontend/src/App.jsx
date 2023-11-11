import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import RestaurantDetail from './pages/RestaurantDetail'
import RestaurantPage from './pages/RestaurantDetail'

import ShowResto from './admin/ShowResto'
import CreateResto from './admin/CreateResto'
// import EditResto from './admin/EditResto'
import DeleteResto from './admin/DeleteResto'
import ListResto from './admin/ListResto'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/restaurantdetail' element={<RestaurantDetail/>} />
      {/* <Route path='/restaurant/:id' element={<RestaurantDetail/>} /> */}
      <Route path='/restaurant' element={<RestaurantPage/>} />
      
      <Route path='/admin/' element={<ListResto/>} />
      <Route path='/admin/:id' element={<ShowResto/>} />
      {/* <Route path='/admin/edit/:id' element={<EditResto/>} /> */}
      <Route path='/admin/add' element={<CreateResto/>} />
      <Route path='/admin/delete/:id' element={<DeleteResto/>} />
    </Routes>
  )
}

export default App
