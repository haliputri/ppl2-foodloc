import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdAdd, MdOutlineDelete } from "react-icons/md";
import { Checkbox, Table, Button, Modal } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import Sidenav from "../../components/Sidenav"; 
import NavigationAdmin from "../../components/NavigationAdmin"; 
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const ListUser = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
    const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <NavigationAdmin /> 
    <div className="p-4 flex">
      <Sidenav />
      <div className="mx-4 w-full">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
        >
          <Breadcrumb.Item href="#">User List</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex justify-between items-center mb-4 my-2">
          <Button
            href="user/add"
            style={{ backgroundColor: "#FFA90A", color: "white" }}
            className="border"
          >
            <MdAdd
              className=" text-2xl"
              style={{ height: "18", color: "white" }}
            />{" "}
            Tambah Data
          </Button>
        </div>
        {loading ? (
          <div
          className="flex flex-wrap gap-2"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
          }}
        >
          <Spinner
            color="warning"
            aria-label="Warning Extra large spinner example"
            size="xl"
          />{" "}
        </div>
        ) : (
          <React.Fragment>
            <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Password</Table.HeadCell> 
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Delete</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {users.map((user, index) => (
                  <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{index + 1}</Table.Cell> 
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user.username}
                  </Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.password}</Table.Cell> 
                  <Table.Cell>
                    <Link
                      to={` user/edit/${users._id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                      <a 
                        className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                        onClick={() => setOpenModal(true)}
                      >
                        Delete
                      </a> 
                      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                        <Modal.Header />
                        <Modal.Body>
                          <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                              Are you sure you want to delete this product?
                            </h3>
                            <div className="flex justify-center gap-4">
                              <Button color="failure" onClick={() => setOpenModal(false)}>
                                {"Yes, I'm sure"}
                              </Button>
                              <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                  </Table.Cell>
                </Table.Row>
              ))} 
              </Table.Body>
            </Table> 
            </div>
            

            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                className="mt-8 mb-8"
                layout="table"
                currentPage={currentPage}
                totalPages={100}
                onPageChange={onPageChange}
                showIcons
              />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
    </div>
  );
};

export default ListUser ;