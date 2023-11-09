import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Registration.css"

export default function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [displayMessage, setDisplayMessage] = useState("");

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const validateForm = () => {
    let errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameregex = /^[a-zA-Z0-9_-]{4,20}$/;
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    const addressRegex = /^[a-zA-Z0-9\s]+$/;
    const canadianZipCode = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;

    // Validate firstName
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    } else if (!nameRegex.test(formData.firstName.trim())) {
      errors.firstName = "Invalid name format";
    }

    // Validate lastName
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    } else if (!nameRegex.test(formData.lastName.trim())) {
      errors.lastName = "Invalid name format";
    }

    // Validate username
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (!usernameregex.test(formData.username.trim())) {
      errors.username = "Invalid username";
    }

    // Validate password
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 4) {
      errors.password = "Password must be at least 4 characters long";
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Invalid email";
    }

    // Validate phoneNumber
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!phoneNumberRegex.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = "Invalid Phone Number";
    }

    // Validate address
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    } else if (!addressRegex.test(formData.address.trim())) {
      errors.address = "Invalid Address";
    }

    // Validate City
    if (!formData.city.trim()) {
      errors.city = "City is required";
    } else if (!nameRegex.test(formData.city.trim())) {
      errors.city = "Invalid City";
    }

    // Validate State
    if (!formData.state.trim()) {
      errors.state = "State is required";
    } else if (!nameRegex.test(formData.state.trim())) {
      errors.state = "Invalid State";
    }

    // Validate Country
    if (!formData.country.trim()) {
      errors.country = "Country is required";
    } else if (!nameRegex.test(formData.country.trim())) {
      errors.country = "Invalid Country";
    }

    // Validate ZipCode
    if (!formData.zipCode.trim()) {
      errors.zipCode = "ZipCode is required";
    } else if (!canadianZipCode.test(formData.zipCode.trim())) {
      errors.zipCode = "Invalid ZipCode";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({...formErrors, [name]:""});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    const { username } = formData;
    if (validateForm()) {
      // Check if a user with the same username already exists
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = existingUsers.some(
        (user) => user.username === username
      );

      if (userExists) {
        setDisplayMessage(
          "Username already exists. Please choose a different one."
        );
      } else {
        // Create a new user object
        const newUser = {
          ...formData,
        };

        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        setDisplayMessage("Registration successful!");

        navigate("/registration-success");
      }
    } else {
      setDisplayMessage("Please fill in the fields!");
    }
  };
  return (
    <div className="registration-form">
      <h2 className="registration-title">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">firstName:</label>
          <input
            className="input"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.firstName && <span>{formErrors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="lastName">lastName:</label>
          <input
            className="input"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.lastName && <span>{formErrors.lastName}</span>}
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.username && <span>{formErrors.username}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            className="input"
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            className="input"
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.address && <span>{formErrors.address}</span>}
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            className="input"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.city && <span>{formErrors.city}</span>}
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            className="input"
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.state && <span>{formErrors.state}</span>}
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            className="input"
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.country && <span>{formErrors.country}</span>}
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            className="input"
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>
        <div className="error">
          {formErrors.zipCode && <span>{formErrors.zipCode}</span>}
        </div>
        <div>
          {displayMessage}
        </div>
        <input type="submit" value="Register" onClick={handleSubmit} />
      </form>
    </div>
  );
}
