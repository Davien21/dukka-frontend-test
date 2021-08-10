import React from "react";
import { calendarImage } from "../../images";

function LoanCard({ loan }) {
  return (
    <div key={loan.id} className="row mb-4 loan-card border">
      <div className="col-auto px-4 py-3 month">
        <div className="text-center justify-content-center">
          <img width={15} height={15} src={calendarImage} alt="" />
          <span className="d-block">{loan.month}</span>
        </div>
      </div>
      <div className="col">
        <div className="mt-1">
          BORROWED: ₦{loan.borrowed}
        </div>
        <hr className="my-2" />
        <div className="mb-1">
          RECEIVABLE: ₦{loan.receivable}
        </div>
      </div>
    </div>
  );
}

export default LoanCard;
