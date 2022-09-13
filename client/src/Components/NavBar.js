import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Students">Students</Link> |{" "}
        </li>
        <li>
          <Link to="/">Expenses</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
