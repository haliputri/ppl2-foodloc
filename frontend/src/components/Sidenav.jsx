'use client';
import React from 'react'
import Foodloc from "../assets/FoodLoc.png";
import { Sidebar } from 'flowbite-react';
import { HiArrowSmLeft, HiUser, HiViewBoards } from 'react-icons/hi';

const Sidenav = () => {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/">
            <img src={ Foodloc } alt="" />
          </Sidebar.Item>
          <Sidebar.Item href="/admin" icon={HiViewBoards} >
            Restaurants
          </Sidebar.Item>
          <Sidebar.Item href="/user" icon={HiUser}>
            Users
          </Sidebar.Item> 
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.ItemGroup> 
          <Sidebar.Item href="/login" icon={HiArrowSmLeft}> 
            Sign Out
          </Sidebar.Item>  
        </Sidebar.ItemGroup>
    </Sidebar>
  );
}
export default Sidenav;