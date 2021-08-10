import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateEmployee from "./../../pages/createEmployee/index";
import ViewEmployees from "./../../pages/viewEmployees/index";
import EmployeeProfile from "./../../pages/employeeProfile/index";
import { getEmployees } from "../../services/employees";
import NotFound from "./../notFound/index";

function Employees(props) {
  const [employees, setEmployees] = useState(getEmployees);
  const handleDelete = (id) => {
    const originalEmployees = employees;
    const newEmployees = originalEmployees.filter(
      (employee) => employee.id !== id
    );
    setEmployees(newEmployees);
  };

  return (
    <>
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
        <Redirect to="/not-found" component={NotFound} />
      </Switch>
    </>
  );
}

export default Employees;
