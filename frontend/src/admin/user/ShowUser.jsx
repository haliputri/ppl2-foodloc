import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Sidenav from "../../components/Sidenav";

const ShowUser = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="flex">
      <Sidenav />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Users List</h1>
          <Link to="add">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">username</th>
                <th className="border border-slate-600 rounded-md">email</th>
                <th className="border border-slate-600 rounded-md">password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {user.username}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {user.email}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {user.password}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`${user._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`edit/${user._id}`}>
                        <AiOutlineEdit className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`delete/${user._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-800" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShowUser;
