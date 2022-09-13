import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const StudentUpdate = () => {
  useEffect(() => {
    async function Getdata() {
      const response = await fetch(
        "http://localhost:8080/api/6319ccec7af16f0f8b0c4d9c"
      );
      const data = await response.json();
      SetStudents(data);
    }
    Getdata();
  }, []);

  const [students, SetStudents] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
  });

  const UpdateData = (e) => {
    SetStudents({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(students);
    e.preventDefault();
    fetch("http://localhost:8080/api/6319ccec7af16f0f8b0c4d9c", {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(students),
    })
      .then((response) => response.json())
      .then((data) => {
        swal({
          title: "Success!",
          text: "Update Successfully!",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className="Student__Form_Wrap">
        <form className="Student__main__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="Student__Form__input"
            placeholder="Enter Your First Name"
            required
            name="FirstName"
            onChange={UpdateData}
            value={students.FirstName}
          />
          <input
            type="text"
            className="Student__Form__input"
            placeholder="Enter Your Last Name"
            required
            name="LastName"
            onChange={UpdateData}
            value={students.LastName}
          />
          <input
            type="email"
            className="Student__Form__input"
            placeholder="Enter Your  Email"
            required
            name="email"
            onChange={UpdateData}
            value={students.Email}
          />
          <input
            type="text"
            className="Student__Form__input"
            placeholder="Enter Your Age"
            required
            onChange={UpdateData}
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
    </div>
  );
};

export default StudentUpdate;
