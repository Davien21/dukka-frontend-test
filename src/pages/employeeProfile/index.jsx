import ProfileCard from "./../../components/profileCard/index";
import { missingPerson } from "../../images";

function EmployeeProfile({ employees, match }) {
  const id = match.params.id;
  const employee = employees.find((employee) => employee.id === id);
  if (!employee)
    return (
      <div className="d-flex flex-column mx-auto justify-content-center align-items-center">
        <img height={200} src={missingPerson} alt="" />
        <span className="h5 mt-4">Invalid Employee</span>
      </div>
    );
  return (
    <div className="container-fluid">
      <p className="row h5 mb-4">EMPLOYEE PROFILE</p>
      <ProfileCard employee={employee} />
      <p className="row h5 my-4">LOAN RECORD</p>
    </div>
  );
}

export default EmployeeProfile;
