import React, {useState} from "react";
import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import toast from 'react-hot-toast';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendRegister = () => {
    if (!firstName || !lastName || !contactNo || !email || !password || !confirmPassword) {
      toast.error("All the input are required.");
      return;
    }
  }

  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
      <div
          className="login-form shadow bg-body rounded"
          style={{
            width: "450px",
            height: "550px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "20px",
          }}
        >
          <div className="text-center">
           <h2 className="">Register</h2>
          </div>
          <div className="mt-5">
          <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
                <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
                <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Contact Number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
                <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="login-button mt-5" onClick={sendRegister}>
            Register
          </button>
        </div>
      </div>
      <Floor />
    </div>
  );
};

export default Register;
