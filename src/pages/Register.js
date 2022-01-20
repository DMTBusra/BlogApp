import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import React from "react";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.email);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="form-container">
      <div className="form">
        <h1>REGISTER</h1>
        <label htmlFor="email" className="form-label display-4">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email address..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="form-label display-4">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="button"
          className="btn"
          value="Register"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
