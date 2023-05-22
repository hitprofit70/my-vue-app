import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const DeliveryForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState([]);
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState([]);
  // const [localData, setLocalData] = useState([]);
  const navigator = useNavigate();
  

  // useEffect(() => {
  //   localStorage.setItem('firstName', JSON.stringify(localData));
  // }, [localData]);

  const sendDelivery = () => {
    if (!firstName || !lastName || !contactNo || !street || !country || !city || !postalCode) {
      toast.error("All the input are required.");
      return;
    }

    if (firstName && lastName && contactNo && street && country && city && postalCode) {
      localStorage.setItem('firstname', JSON.stringify(firstName));
      localStorage.setItem('lastname', JSON.stringify(lastName))
      localStorage.setItem('contactno', JSON.stringify(contactNo))
      localStorage.setItem('street', JSON.stringify(street))
      toast.success("Your address had updated successfully.")
      navigator("/payment");
      return;
  }
}

  return (
    <div className="container mt-5 mb-5">
      <div
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
          value={firstName} onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          style={{ width: "400px" }}
          className="shadow bg-body rounded"
          placeholder="Last Name"
          value={lastName} onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="number"
          className="shadow bg-body rounded"
          style={{ width: "810px", marginLeft: "40px" }}
          placeholder="Contact Mobile"
          value={contactNo} onChange={(e) => setContactNo(e.target.value)}
        />
        <input
          type="text"
          style={{ width: "400px", marginLeft: "40px" }}
          className="shadow bg-body rounded"
          placeholder="Street"
          value={street} onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="dropdown"
          style={{ width: "400px" }}
          className="shadow bg-body rounded"
          placeholder="Country/State"
          value={country} onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          style={{ width: "400px", marginLeft: "40px" }}
          className="shadow bg-body rounded"
          placeholder="City"
          value={city} onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          style={{ width: "400px" }}
          className="shadow bg-body rounded"
          placeholder="Postal Code"
          value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
        />
        <button className="payment-button mt-3" style={{ marginLeft: "40px" }} onClick={sendDelivery}>
          Save
        </button>
      </div>
    </div>
  );
};

export default DeliveryForm;
