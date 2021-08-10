import React from "react";
import { getLoans } from "../../services/loans";
import _ from "lodash";
import LoanCard from "./../loanCard/index";

function LoanCardsTable(props) {
  let loans = getLoans();
  loans = _.groupBy(loans, "year");
  const years = Object.keys(loans).sort((a, b) => b - a);

  return (
    <div>
      <p className="row h5 my-4">LOAN RECORD</p>
      {years.map((year) => (
        <div key={year}>
          {year !== "2020" && (
            <div className="mb-3 row">
              <span className="pr-4 semi-bold">{year}</span>
              <hr className="col" />
            </div>
          )}

          {loans[year].map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default LoanCardsTable;
