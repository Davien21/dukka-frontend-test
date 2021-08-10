const { nanoid } = require("nanoid");
const store = require("../store/employees.json");

const storeError = (data, employees) => {
  let email = data.email.toLowerCase();
  const emailExists = employees.some((employee) => employee.email === email);

  const phoneExists = employees.some(
    (employee) => employee.phoneNumber === data.phoneNumber
  );

  if (emailExists || phoneExists)
    return {
      email: emailExists ? "This email already exists" : "",
      phoneNumber: phoneExists ? "This Phone Number already exists" : "",
    };
};

const createEmployee = (data, employees, updateEmployees) => {
  data.email = data.email.toLowerCase();
  data.id = nanoid(10);
  let id = Math.floor(Math.random() * 80);
  data.image = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  employees.unshift(data);
  updateEmployees(employees);
  return data;
};

const getEmployees = () => {
  return store;
};

module.exports = {
  createEmployee,
  storeError,
  getEmployees,
};
