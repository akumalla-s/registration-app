import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import "../css/Dashboard.css"

export default function Dashboard() {
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find the logged-in user in the existingUsers array based on the username
    const loggedInUserInfo = existingUsers.find(u => u.username === loggedInUser);

    if(loggedInUserInfo){
      setLoggedInUserData(loggedInUserInfo);
    }
  }, []);

  return (
    <div>
      <h2 className='dashboard-title'>Your Information</h2>
      {loggedInUserData && (
        <div className='userdata'>
          <p>First Name: {loggedInUserData.firstName}</p>
          <p>Last Name: {loggedInUserData.lastName}</p>
          <p>Email: {loggedInUserData.email}</p>
          <p>Phone Number: {loggedInUserData.phoneNumber}</p>
          <p>Address: {loggedInUserData.address}</p>
          <p>City: {loggedInUserData.city}</p>
          <p>State: {loggedInUserData.state}</p>
          <p>Country: {loggedInUserData.country}</p>
          <p>Zip Code: {loggedInUserData.zipCode}</p>
        </div>
      )}
      <br/>
      <div>
        <Logout />
      </div>
    </div>
  )
}
