import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
function Navbar() {
  const { token, logout } = useAuth();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };
  return (
    <div className="navbar">
      <div className="title">
        <h1>My App</h1>
      </div>

      {token ? (
        <div>
          <Link to="/dashboard/mysnippets">
            <button className="options">My Snippets</button>
          </Link>
          <button className="options" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="options">Login</button>
          </Link>
          <Link to="/signup">
            <button className="options">SignUp</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
