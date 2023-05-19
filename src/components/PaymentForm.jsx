import React from "react";

const PaymentForm = () => {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="text-center">
        Payment Details
      </h4>
      <form
        className="delivery-form shadow bg-body rounded"
        style={{ width: "900px", height: "200px", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="text"
          className="bg-light outline"
          placeholder="First Name"
        />
        <input type="text" className="bg-light" placeholder="Card Number" />
        <input type="text" className="bg-light" placeholder="Security Code" />
        <input
          type="date"
          className="bg-light"
          placeholder="Expiration Date"
        />
        <button className="payment-button">Complete Purchase</button>
      </form>
    </div>
  );
};

export default PaymentForm;
