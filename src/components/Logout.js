import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Logout.css"
import { useAuth } from './AuthContext';

export default function Logout() {
  const navigate = useNavigate();
  const { dispatch } = useAuth();


  const handleClick = () => {
    dispatch({ type: "LOGOUT", payload: null });
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };
  return (
    <div className='logout-button'>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
