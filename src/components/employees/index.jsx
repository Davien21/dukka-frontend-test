import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CreateEmployee from "./../../pages/createEmployee/index";
import ViewEmployees from "./../../pages/viewEmployees/index";
import EmployeeProfile from "./../../pages/employeeProfile/index";
import { getAllEmployees } from "../../services/employees";

function Employees(props) {
  const [employees, setEmployees] = useState(getAllEmployees);

  console.log(employees);
  return (
    <div>
      <Switch>
        <Route path="/employees/create" component={CreateEmployee} />
        <Route path="/employees/listings" exact component={ViewEmployees} />
        <Route
          path="/employees/listings/:id"
          exact
          component={EmployeeProfile}
        />
      </Switch>
    </div>
  );
}

export default Employees;
