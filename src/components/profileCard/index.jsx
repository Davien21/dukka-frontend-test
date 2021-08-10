function ProfileCard({ employee }) {
  return (
    <>
      <p className="row h5 mb-4">EMPLOYEE PROFILE</p>

      <div className="row border profile-card mb-3">
        <div className="col-4 pl-0">
          <img src={employee.image} alt="" />
        </div>
        <div className="col details">
          <p>{employee.fullName}</p>
          <p>{employee.position}</p>
          <p>{employee.phoneNumber}</p>
          <p>{employee.email}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
