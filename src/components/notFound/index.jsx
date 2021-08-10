import React from "react";
import { missingPerson } from "../../images";

function NotFound({ message }) {
  return (
    <div className="d-flex flex-column mx-auto justify-content-center align-items-center">
      <img height={200} src={missingPerson} alt="" />
      <span className="h5 mt-4">{message || "404 - Page Not Found"}</span>
    </div>
  );
}

export default NotFound;
