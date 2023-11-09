import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username:"",
        password: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e)=>{
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("Form submitted with data:", formData);
      const { username, password } = formData;
      if(username && password){
        // Check if a user with the same username already exists
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUsers.some((user) => user.username === username);

        if(userExists){
          setErrorMessage("Username already exists. Please choose a different one.");
        }else{
          // Create a new user object
          const newUser = {
            ...formData,
          };

          existingUsers.push(newUser);
          localStorage.setItem("users", JSON.stringify(existingUsers));
          setErrorMessage("Registration successful!");

          navigate("/registration-success");
        }

      }else{
        setErrorMessage("Please fill in the fields!");
      }
    }
  return (
    <div className='registration-form'>
      <h2>Registration</h2>
      <div>
        {errorMessage}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>firstName:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>lastName:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
