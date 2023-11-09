import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Logout.css"

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };
  return (
    <div className='logout-button'>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
