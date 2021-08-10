import { motion } from "framer-motion";
import { CloseButton } from "./../../closeButton/index";
import { NavLink } from "react-router-dom";

const slideIn = {
  left: "0",
  transition: { duration: 0.5 },
};

const slideOut = {
  left: "-140%",
  transition: { duration: 0.5 },
};

function SideBar({ isOpen, onCloseSideBar }) {
  return (
    <motion.div
      initial={slideOut}
      animate={isOpen ? slideIn : slideOut}
      className="side-nav"
    >
      <CloseButton toggle={onCloseSideBar} />
      <ul>
        <li>
          <NavLink className="nav-item nav-link" to="/employees/create">
            Add new Employee
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item nav-link" to="/employees/listings">
            View Employees
          </NavLink>
        </li>
        <li>
          <a
            rel="nofollow noreferrer"
            href="https://github.com/Davien21/dukka-frontend-test"
            className="nav-item nav-link"
            target="_blank"
          >
            Open in Github
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export default SideBar;
