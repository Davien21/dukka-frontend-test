import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import CreateEmployee from "./../../pages/createEmployee/index";
import ViewEmployees from "./../../pages/viewEmployees/index";
import EmployeeProfile from "./../../pages/employeeProfile/index";
import { getEmployees } from "../../services/employees";

function Employees(props) {
  const [employees, setEmployees] = useState(getEmployees);
  const handleDelete = (id) => {
    let willDelete = window.confirm(
      "Are you sure you wish to remove this employee?"
    );
    if (!willDelete) return;
    const originalEmployees = employees;
    const newEmployees = originalEmployees.filter(
      (employee) => employee.id !== id
    );
    setEmployees(newEmployees);
  };

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
          render={(props) => (
            <ViewEmployees
              {...props}
              employees={employees}
              onDelete={handleDelete}
            />
          )}
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
