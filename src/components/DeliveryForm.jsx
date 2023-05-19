import React from "react";

const DeliveryForm = () => {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="text-center">Personal Information</h4>
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
      </form>
    </div>
  );
};

export default DeliveryForm;
