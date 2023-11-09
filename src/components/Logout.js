import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
