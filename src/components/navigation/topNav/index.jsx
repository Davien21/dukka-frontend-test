import React from "react";
import { NavLink } from "react-router-dom";

function TopNav(props) {
  return (
    <div className="d-none d-md-block">
      <ul className="row">
        <li>
          <NavLink
            className="nav-item nav-link col-auto"
            to="/employees/create"
          >
            Add Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item nav-link col-auto"
            to="/employees/listings"
          >
            View Employees
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TopNav;
