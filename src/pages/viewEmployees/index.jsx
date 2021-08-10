import React, { useState } from "react";
import ProfileCardsTable from "./../../components/profileCardsTable/index";
import Pagination from "./../../components/pagination/index";
import { paginate } from "../../utils/paginate";
import NotFound from "./../../components/notFound/index";

function ViewEmployees({ employees, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const movies = paginate(employees, currentPage, pageSize);
  if (!employees.length) return <NotFound message="There are no employees" />;
  return (
    <div>
      <p className="h5 mb-4">EMPLOYEES</p>
      <ProfileCardsTable employees={movies} onDelete={onDelete} />
      <Pagination
        itemsCount={employees.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ViewEmployees;
