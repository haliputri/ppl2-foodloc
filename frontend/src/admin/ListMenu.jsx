import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from "flowbite-react";
import { Pagination } from 'flowbite-react';
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdAdd , MdOutlineDelete } from 'react-icons/md'
import { Checkbox, Table, Button } from 'flowbite-react';
import { Breadcrumb } from 'flowbite-react';

const ListMenu = () => {
    const [restaurants, setResto] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);


    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:8080/restaurants')
            .then((response)=> {
                setResto(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);


  return (
    <div className='p-4'>
      <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <Breadcrumb.Item href="#" >Restaurant List</Breadcrumb.Item>
        <Breadcrumb.Item href="#" >Detail Restaurant</Breadcrumb.Item>
        {/* <Breadcrumb.Item href="#" >{restaurant.name}</Breadcrumb.Item> */}
      </Breadcrumb>

      <div className='flex justify-between items-center  mb-4 mt-8'>
        <h1 className='text-3xl'>Menu</h1>
        <Button  href="/addmenu" style={{ backgroundColor: "#FFA90A", color: "white"  }} className='border'>
          <MdAdd  className=' text-4xl' style={{ height:'24' , color:'white' }} /> Tambah Data
        </Button> 
      </div>

      {loading ? (
        <div className="flex flex-wrap gap-2" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}> 
        <Spinner color="warning" aria-label="Warning Extra large spinner example" size="xl"/> </div>
      ) : (
        <React.Fragment>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Menu</Table.HeadCell>
            <Table.HeadCell>Variant</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Stock</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>1</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Milkshake Strawberry 
              </Table.Cell>
              <Table.Cell>Large</Table.Cell>
              <Table.Cell>25000</Table.Cell>
              <Table.Cell>50</Table.Cell> 
              <Table.Cell>
                <a href="/admin/editmenu/:id" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                  Delete
                </a>
              </Table.Cell>
            </Table.Row>


            {/* <Table.Row key={restaurant._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {restaurant.menu_name} 
              </Table.Cell>
              <Table.Cell>{restaurant.variant}</Table.Cell>
              <Table.Cell>{restaurant.price}</Table.Cell>
              <Table.Cell>{restaurant.stock}</Table.Cell> 
              <Table.Cell>
                <a href="/admin/editmenu/:id" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                  Delete
                </a>
              </Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>

        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination className="mt-8 mb-8" layout="table" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
        </div>
      </React.Fragment>
      )
    }
    </div>
  );
};

export default ListMenu
