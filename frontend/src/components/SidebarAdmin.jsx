("use client");
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiUser, HiViewBoards } from 'react-icons/hi';
import { Avatar } from 'flowbite-react';

const SidebarAdmin = () => {
   return ( 
    <Sidebar aria-label="Sidebar with logo branding example">
      <Avatar img="/images/people/profile-picture-5.jpg" rounded>
      <div className="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Administrator</div>
      </div>
      </Avatar> 

      <Sidebar.Items>
        <Sidebar.ItemGroup> 
          <Sidebar.Item href="/admin" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item> 
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item> 
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SidebarAdmin;