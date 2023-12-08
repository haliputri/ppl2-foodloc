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
import Sidenav from "../components/Sidenav";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ListResto = () => {
  const [restaurants, setResto] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [restoIdDelete, setRestoIdDelete] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/restaurants")
      .then((response) => {
        setResto(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDeleteResto = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/restaurants/${restoIdDelete}`)
      .then(() => {
        setLoading(false);
        navigate("/admin");
        window.location.reload(); // Reload the page
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  };

  // // Pagination Logic
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);

  // // Change page
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div className="p-4 flex">
      <Sidenav />
      <div className="mx-4 w-full">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
        >
          <Breadcrumb.Item href="#">Restaurant List</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex justify-between items-center mb-4 my-2">
          <Button
            href="admin/add"
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
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Address</Table.HeadCell>
                <Table.HeadCell>City</Table.HeadCell>
                <Table.HeadCell>Social Media</Table.HeadCell>
                <Table.HeadCell>Phone Number</Table.HeadCell>
                <Table.HeadCell>Rating</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Delete</span>
                </Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                {restaurants.map((restaurant, index) => (
                  <Table.Row
                    key={restaurant._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <Link to={`${restaurant._id}`}>
                        {restaurant.name}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{restaurant.address}</Table.Cell>
                    <Table.Cell>{restaurant.city}</Table.Cell>
                    <Table.Cell>{restaurant.social_media}</Table.Cell>
                    <Table.Cell>{restaurant.phone_number}</Table.Cell>
                    <Table.Cell>{restaurant.rating}</Table.Cell>
                    <Table.Cell>
                      <Link
                        to={`edit/${restaurant._id}`}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                        onClick={(response) => {setRestoIdDelete(restaurant._id); setOpenModal(true)}}
                      >
                        Delete
                      </a>
                      <Modal
                        show={openModal}
                        size="md"
                        onClose={() => setOpenModal(false)}
                        popup
                      >
                        <Modal.Header />
                        <Modal.Body>
                          <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                              Are you sure you want to delete this product?
                            </h3>
                            <div className="flex justify-center gap-4">
                              <Button
                                color="failure"
                                onClick={() => {
                                  handleDeleteResto();
                                  setOpenModal(false);
                                }}
                              >
                                {"Yes, I'm sure"}
                              </Button>
                              <Button
                                color="gray"
                                onClick={() => setOpenModal(false)}
                              >
                                No, cancel
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </Table.Cell>
                  </Table.Row>
                ))}

                {/* 
            {restaurants.map((restaurant, index) => ()
            <Table.Row key={restaurant._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <a href="/admin/detail/:id">{restaurant.name}</a>
              </Table.Cell>
              <Table.Cell>{restaurant.address}</Table.Cell>
              <Table.Cell>{restaurant.city}</Table.Cell>
              <Table.Cell>{restaurant.social_media}</Table.Cell>
              <Table.Cell>{restaurant.phone_number}</Table.Cell>
              <Table.Cell>{restaurant.rating}</Table.Cell>
              <Table.Cell>
                <a href="/admin/edit/:id" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
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
            {/* <Pagination
        totalItems={restaurants.length}
        itemsPerPage={itemsPerPage}
        onChange={handlePageChange}
        activePage={currentPage}
        /> */}

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
  );
};

export default ListResto;
