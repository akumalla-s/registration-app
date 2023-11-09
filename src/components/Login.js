import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ onRegisterClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  const handleLogin = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUser.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify(username));
      navigate("/dashboard");
    } else {
      setErrorMsg("Invalid Username or Password. Please try again");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="error">
        {errorMsg}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="input"
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" onClick={handleSubmit}/>
      </form>
      <div>
        <span>Don't have an account?</span>
        <Link onClick={onRegisterClick} to="/register">
          Register here
        </Link>
      </div>
    </div>
  );
}
