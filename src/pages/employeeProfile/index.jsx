import ProfileCard from "./../../components/profileCard/index";
import LoanCardsTable from "./../../components/loanCardsTable/index";
import NotFound from "./../../components/notFound/index";

function EmployeeProfile({ employees, match }) {
  const id = match.params.id;
  const employee = employees.find((employee) => employee.id === id);
  if (!employee) return <NotFound message="This employee does not exist" />;

  return (
    <div className="container-fluid">
      <ProfileCard employee={employee} />
      <LoanCardsTable />
    </div>
  );
}

export default EmployeeProfile;
