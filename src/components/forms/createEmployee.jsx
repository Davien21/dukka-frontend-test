import { toast } from "react-toastify";
import Form from "./index";
import Joi from "joi-browser";
import { createEmployee, storeError } from "../../services/employees.js";

class CreateEmployeeForm extends Form {
  state = {
    data: {
      fullName: "",
      phoneNumber: "",
      email: "",
      position: "",
      salary: "",
    },
    errors: {},
  };

  schema = {
    id: Joi.string(),
    fullName: Joi.string().required().label("Full Name"),
    phoneNumber: Joi.string().required().label("Phone Number"),
    email: Joi.string().email().required().label("Email Address"),
    position: Joi.string().required().label("Position"),
    salary: Joi.number().integer().min(0).required().label("Salary"),
  };

  async componentDidMount() {}

  async openEmployeePage(id) {
    this.props.history.push(`/employees/listings/${id}`);
  }

  doSubmit = () => {
    const { employees, onUpdateEmployees } = this.props;
    const employee = { ...this.state.data };
    let errors = storeError(employee, employees);

    if (errors) return this.setState({ errors });
    const newEmployee = createEmployee(employee, employees, onUpdateEmployees);

    toast.success("Employee Profile was Created Successfully", {
      onClose: () => this.openEmployeePage(newEmployee.id),
      autoClose: 3000,
    });
  };

  render() {
    return (
      <div>
        <p className="h5 mb-4">CREATE EMPLOYEE PROFILE</p>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("fullName", "Full Name *")}
          {this.renderInput("phoneNumber", "Phone Number *")}
          {this.renderInput("email", "Email *")}
          {this.renderInput("position", "Position *")}
          {this.renderInput("salary", "Salary *")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CreateEmployeeForm;
