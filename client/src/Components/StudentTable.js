import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../src/App.css";
import { useNavigate } from "react-router-dom";
import "./style.css";
const StudentTable = () => {
  useEffect(() => {
    async function Getdata() {
      const response = await fetch("http://localhost:8080/api/all");
      const data = await response.json();
      SetStudents(data);
    }
    Getdata();
  }, []);
  const navigate = useNavigate();
  const routeChange = (id) => {
    console.log(id);
    let path = `/student/${id}`;
    navigate(path);
  };

  const [students, SetStudents] = useState([]);
  console.log(students);
  return (
    <table className="zui-table">
      <thead>
        <tr>
          <th>FirstName</th>
          <th>last Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item, key) => {
          return (
            <tr>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Email}</td>
              <td>{item.Address}</td>
              <td>
                <button onClick={() => routeChange(item._id)}>update</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;
