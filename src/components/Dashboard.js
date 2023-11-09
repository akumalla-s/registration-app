import React from 'react';
import Logout from './Logout';
import "../css/Dashboard.css";
import { useAuth } from './AuthContext';

export default function Dashboard() {
  const { state: { user } } = useAuth();

  return (
    <div>
      <h2 className='dashboard-title'>Your Information</h2>
      {user && (
        <div className='userdata'>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>State: {user.state}</p>
          <p>Country: {user.country}</p>
          <p>Zip Code: {user.zipCode}</p>
        </div>
      )}
      <br/>
      <div>
        <Logout />
      </div>
    </div>
  );
}
