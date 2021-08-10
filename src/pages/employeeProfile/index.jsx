import ProfileCard from "./../../components/profileCard/index";
import InvalidEmployee from "./../../components/invalidEmployee/index";
import LoanCardsTable from "./../../components/loanCardsTable/index";

function EmployeeProfile({ employees, match }) {
  const id = match.params.id;
  const employee = employees.find((employee) => employee.id === id);
  if (!employee) return <InvalidEmployee />;

  return (
    <div className="container-fluid">
      <ProfileCard employee={employee} />
      <LoanCardsTable />
    </div>
  );
}

export default EmployeeProfile;
