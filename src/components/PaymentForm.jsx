import React from "react";

const PaymentForm = () => {
  return (
    <div className="container">
      <form
        className="delivery-form shadow bg-body rounded"
        style={{ width: "900px", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="text"
          className="bg-light outline"
          placeholder="First Name"
        />
        <input type="text" className="bg-light" placeholder="Last Name" />
        <input
          type="number"
          className="bg-light"
          style={{ width: "810px" }}
          placeholder="Contact Mobile"
        />
        <input type="text" className="bg-light" placeholder="Street" />
        <input
          type="dropdown"
          className="bg-light"
          placeholder="Country/State"
        />
        <input type="text" className="bg-light" placeholder="City" />
        <input type="number" className="bg-light" placeholder="Postal Code" />
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default PaymentForm;
