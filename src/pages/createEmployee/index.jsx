import React from "react";
import CreateEmployeeForm from "./../../components/forms/createEmployee";

function CreateEmployee(props) {
  return (
    <div>
      <CreateEmployeeForm {...props} />
    </div>
  );
}

export default CreateEmployee;
