import React from "react";
import Form from "./index";
import Joi from "joi-browser";

class CreateEmployeeForm extends Form {
  state = {
    data: {
      fullName: "",
      phoneNumber: "",
      email: "",
      position: "",
      salary: "",
    },
    employees: [],
    errors: {},
  };

  schema = {
    id: Joi.string(),
    fullName: Joi.string().required().label("Full Name"),
    phoneNumber: Joi.string().required().label("Phone Number"),
    email: Joi.string().email().required().label("Email Address"),
    position: Joi.string().required().label("Position"),
    salary: Joi.string().required().label("Salary"),
  };

  async componentDidMount() {}

  doSubmit = async () => {
    const employee = { ...this.state.data };
    console.log(employee);
    // this.props.history.push("/employees");
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
