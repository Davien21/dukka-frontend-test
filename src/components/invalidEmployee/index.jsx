import React from "react";
import { missingPerson } from "../../images";

function InvalidEmployee(props) {
  return (
    <div className="d-flex flex-column mx-auto justify-content-center align-items-center">
      <img height={200} src={missingPerson} alt="" />
      <span className="h5 mt-4">Invalid Employee</span>
    </div>
  );
}

export default InvalidEmployee;
