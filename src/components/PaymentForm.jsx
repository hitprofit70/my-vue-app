import React from "react";

const PaymentForm = () => {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="text-center">
        Payment Details
      </h4>
      <form
        className="delivery-form shadow bg-body rounded"
        style={{ width: "900px", height: "250px", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="text"
          style={{ width: "400px", marginLeft: "20px"}}
          className="shadow bg-body rounded mt-5"
          placeholder="Name on Card"
        />
        <input type="number" style={{ width: "400px", marginLeft: "20px"}} className="shadow bg-body rounded" placeholder="Card Number" />
        <input type="number" style={{ width: "400px", marginLeft: "20px"}} className="shadow bg-body rounded" placeholder="Security Code" />
        <input
          type="date"
          style={{ width: "400px", marginLeft: "20px"}}
          className="shadow bg-body rounded"
        />
        <button className="payment-button mt-3">Complete Purchase</button>
      </form>
    </div>
  );
};

export default PaymentForm;
