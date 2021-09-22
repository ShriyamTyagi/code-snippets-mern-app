import React, { useRef } from "react";
import "./Signup.css";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function SignUp() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const { signup } = useAuth();
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    const userinfo = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await signup(userinfo);
      history.push("/dashboard");
    } catch (err) {
      alert("Failed to login");
    }
  };

  return (
    <div className="signup_form">
      <input
        type="text"
        ref={name}
        placeholder="Enter Name"
        className="inputs"
        required
      />
      <input
        type="email"
        ref={email}
        placeholder="E-mail"
        className="inputs"
        required
      />
      <input
        type="password"
        ref={password}
        placeholder="password"
        className="inputs"
        required
      />
      <button className="submit_button" onClick={handleSignup}>
        SignUp
      </button>
    </div>
  );
}

export default SignUp;
