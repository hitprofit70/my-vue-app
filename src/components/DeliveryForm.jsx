import React from "react";
import { Link } from "react-router-dom";

const DeliveryForm = () => {
  return (
    <div className="container mt-5 mb-5">
      <form
        className="delivery-form shadow bg-body rounded"
        style={{
          width: "900px",
          height: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h4 className="text-center">Personal Information</h4>
        <input
          type="text"
          style={{ width: "400px", marginLeft: "40px" }}
          className="bg-light shadow bg-body rounded mt-5"
          placeholder="First Name"
        />
        <input
          type="text"
          style={{ width: "400px" }}
          className="shadow bg-body rounded"
          placeholder="Last Name"
        />
        <input
          type="number"
          className="shadow bg-body rounded"
          style={{ width: "810px", marginLeft: "40px" }}
          placeholder="Contact Mobile"
        />
        <input
          type="text"
          style={{ width: "400px", marginLeft: "40px" }}
          className="shadow bg-body rounded"
          placeholder="Street"
        />
        <input
          type="dropdown"
          style={{ width: "400px" }}
          className="shadow bg-body rounded"
          placeholder="Country/State"
        />
        <input
          type="text"
          style={{ width: "400px", marginLeft: "40px" }}
          className="shadow bg-body rounded"
          placeholder="City"
        />
        <input
          type="number"
          style={{ width: "400px" }}
          className="shadow bg-body rounded"
          placeholder="Postal Code"
        />
        <Link to="/payment">
        <button className="payment-button mt-3" style={{ marginLeft: "40px" }}>
          Save
        </button>
        </Link>
      </form>
    </div>
  );
};

export default DeliveryForm;
