import React, { useRef } from "react";
import "./Login.css";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await login(credentials);
      history.push("/dashboard");
    } catch (err) {
      alert("Failed to login");
    }
  };

  return (
    <div className="login_form">
      <input type="email" ref={email} placeholder="E-mail" className="inputs" />
      <input
        type="password"
        ref={password}
        placeholder="password"
        className="inputs"
      />
      <button className="submit_button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
