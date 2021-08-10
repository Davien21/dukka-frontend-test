import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import CreateEmployee from "./../../pages/createEmployee/index";
import ViewEmployees from "./../../pages/viewEmployees/index";
import EmployeeProfile from "./../../pages/employeeProfile/index";
import { getEmployees } from "../../services/employees";

function Employees(props) {
  const [employees, setEmployees] = useState(getEmployees);
  

  return (
    <div>
      <Switch>
        <Route
          path="/employees/create"
          exact
          render={(props) => (
            <CreateEmployee
              {...props}
              employees={employees}
              onUpdateEmployees={setEmployees}
            />
          )}
        />
        <Route
          path="/employees/listings"
          exact
          render={(props) => <ViewEmployees {...props} employees={employees} />}
        />
        <Route
          path="/employees/listings/:id"
          exact
          render={(props) => (
            <EmployeeProfile {...props} employees={employees} />
          )}
        />
      </Switch>
    </div>
  );
}

export default Employees;
