import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentTable from "./StudentTable";
import swal from "sweetalert";
import "../../src/App.css";

const AllStudent = () => {
  const [students, SetStudents] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
  });

  const UpdateData = (e) => {
    SetStudents(...{ [e.target.name]: e.target.value });
  };
  console.log(students);
  const RegisterData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/post", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(students),
    })
      .then((response) => response.json())
      .then((data) => {
        swal({
          title: "Success!",
          text: "regsitered Successfully!",
          icon: "success",
          button: "Ok",
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="Student__Form_Wrap">
        <form className="Student__main__form" onSubmit={RegisterData}>
          <input
            type="text"
            className="Student__Form__input"
            placeholder="Enter Your First Name"
            required
            name="FirstName"
            onChange={(e) =>
              SetStudents({ ...students, FirstName: e.target.value })
            }
            value={students.FirstName}
          />
          <input
            type="text"
            className="Student__Form__input"
            placeholder="Enter Your Last Name"
            required
            name="LastName"
            onChange={(e) =>
              SetStudents({ ...students, LastName: e.target.value })
            }
            value={students.LastName}
          />
          <input
            type="email"
            className="Student__Form__input"
            placeholder="Enter Your  Email"
            required
            name="email"
            onChange={(e) =>
              SetStudents({ ...students, Email: e.target.value })
            }
            value={students.Email}
          />
          <input
            type="text"
            className="Student__Form__input"
            placeholder="Enter Your Address"
            required
            onChange={(e) =>
              SetStudents({ ...students, Address: e.target.value })
            }
            name="Address"
            value={students.Address}
          />
          <button
            className="Student__Form__Button"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="Students__Form__details">
        <span>Student details</span>
        <StudentTable />
      </div>
    </>
  );
};

export default AllStudent;
