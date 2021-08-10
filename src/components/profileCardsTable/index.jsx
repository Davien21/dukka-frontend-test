import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { deleteImage, editImage } from "../../images";
import Button from "../button";
import { toast } from "react-toastify";
function ProfileCardsTable({ employees, onDelete }) {
  const history = useHistory();
  return (
    <div className="container-fluid">
      {employees.map((employee) => (
        <motion.div
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          key={employee.id}
          className="pointer row border profile-card mb-3"
          onClick={() => history.push(`/employees/listings/${employee.id}`)}
        >
          <div className="col-sm-4 py-3 py-sm-0 pl-sm-0 ">
            <img src={employee.image} alt="" />
          </div>
          <div className="col-sm-8 details">
            <p>{employee.fullName}</p>
            <p>{employee.position}</p>
            <p>{employee.phoneNumber}</p>
            <p>{employee.email}</p>
          </div>
          <div className="action-btns">
            <Button
              onClick={(e) => {
                toast.error("This feature is currently not available");
                e.stopPropagation();
              }}
            >
              <img width={20} height={20} src={editImage} alt="" />
            </Button>
            <Button
              onClick={(e) => {
                onDelete(employee.id);
                e.stopPropagation();
              }}
            >
              <img width={20} height={20} src={deleteImage} alt="" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProfileCardsTable;
