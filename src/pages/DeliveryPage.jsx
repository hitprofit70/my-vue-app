import React from "react";

const DeliveryPage = () => {
  return (
    <div className="container mt-5">
      <div
        className="dleivery-form bg-secondary"
        style={{ width: "80%", height: "600px" }}
      >
        <input name="firstname" label="First Name" placeholder="John" />
        <input name="lastname" label="Last name" placeholder="Smith" />
        <input
          name="email"
          label="Email"
          placeholder="xyz@example.com"
          type="email"
        />

        <div className="group">
          <input
            width={100}
            name="street"
            label="Address"
            placeholder="122 Example St"
          />
          <div
            className="select"
            width={6}
            name="country"
            label="Select Country"
          />
        </div>

        <div className="group">
          <input
            width={6}
            name="town_city"
            label="Town/City"
            placeholder="Las Vegas"
          />
          <div
            className="select"
            width={6}
            label="County/State/Province/Territory"
            placeholder="Search ..."
            name="county_state"
          />
          <input
            width={4}
            type="number"
            name="postal_zip_code"
            label="Zip/Postal"
            placeholder="00000"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
