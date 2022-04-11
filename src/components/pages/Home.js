import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:5000/getCollectors`);
    setUser(result.data);
  };

  const deleteUser = async CollectorID => {
    await axios.delete(`http://localhost:5000/deleteCollector/${CollectorID}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Active</th>
              <th scope="col">Name | Code</th>
              <th scope="col">Aging Bucket</th>
              <th scope="col">Program Bucket</th>
              <th scope="col">Finance Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.CollectorID}>
                <th scope="row">{user.CollectorID}</th>
                <td></td>
                <td>{user.FirstName} {user.LastName} | {user.CollectorCode}</td>
                <td></td>
                <td></td>
                <td>{user.FinanceCompany}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${user.CollectorID}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.CollectorID}`}
                  >
                    Edit
                  </Link>
                  <Link to='/'
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.CollectorID)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
