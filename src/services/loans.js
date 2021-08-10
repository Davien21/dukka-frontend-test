const store = require("../store/loans.json");

const getLoans = () => {
  return store;
};

module.exports = {
  getLoans,
};
