import React from "react";

const DeliveryForm = () => {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="text-center">Personal Information</h4>
      <form
        className="delivery-form shadow bg-body rounded"
        style={{ width: "900px", height: "300px", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="text"
          style={{ width: "400px", marginLeft: "40px"}}
          className="bg-light shadow bg-body rounded mt-5"
          placeholder="First Name"
        />
        <input type="text" style={{ width: "400px"}} className="shadow bg-body rounded" placeholder="Last Name" />
        <input
          type="number"
          className="shadow bg-body rounded"
          style={{ width: "810px", marginLeft: "40px"}}
          placeholder="Contact Mobile"
        />
        <input type="text" style={{ width: "400px", marginLeft: "40px"}} className="shadow bg-body rounded" placeholder="Street" />
        <input
          type="dropdown"
          style={{ width: "400px"}}
          className="shadow bg-body rounded"
          placeholder="Country/State"
        />
        <input type="text" style={{ width: "400px", marginLeft: "40px"}} className="shadow bg-body rounded" placeholder="City" />
        <input type="number" style={{ width: "400px"}} className="shadow bg-body rounded" placeholder="Postal Code" />
      </form>
    </div>
  );
};

export default DeliveryForm;
