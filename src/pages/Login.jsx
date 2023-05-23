import React, { useState } from "react";
import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const sendLogin = () => {};

  const register = () => {
    navigator("/register");
  };

  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
        <form
          action=""
          className="login-form shadow bg-body rounded"
          style={{
            width: "450px",
            height: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "20px",
          }}
        >
          <div className="profile-logo text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-person-circle mt-4 mb-3"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div className="">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="passw"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="row text-center mt-2">
            <div className="col">Remember me</div>
            <div className="col">Forget Password?</div>
          </div>
          <button className="login-button mt-3" onClick={sendLogin}>
            Login
          </button>
          <button className="login-button mt-3" onClick={register}>
            Register
          </button>
        </form>
      </div>
      <Floor />
    </div>
  );
};

export default Login;
