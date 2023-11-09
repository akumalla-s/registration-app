import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Login({onRegisterClick}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  const handleLogin = (username, password)=>{
    const storedUser = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUser.some((user)=>user.username === username && user.password === password);

    if(userExists){
      localStorage.setItem("loggedInUser", JSON.stringify(username));
      navigate('/dashboard');
    }else{
      alert("Invalid Username or Password. Please try again")
    }

  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      
      <Link onClick={onRegisterClick} to="/register">
        Register
      </Link>

    </div>
  )
}
