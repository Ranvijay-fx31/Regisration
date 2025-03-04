// src/components/AuthForm.js
import React, { useState } from "react";
import "./styles.css";

/**
 * Authentication form component that handles both login and registration
 */
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Form field validation check
  const isFormValid = () => {
    const { email, password, name } = formData;
    return email && password && (isLogin || name);
  };

  // Toggle between login and registration modes
  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Reset form data when switching modes
    setFormData({ name: "", email: "", password: "" });
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert("All fields are required");
      return;
    }
    
    const actionType = isLogin ? "Logged in" : "Registered";
    alert(`${actionType} successfully!`);
  };

  // Determine the button and heading text based on current mode
  const actionText = isLogin ? "Login" : "Register";
  const toggleText = isLogin 
    ? "Don't have an account? Register" 
    : "Already have an account? Login";

  return (
    <div className="auth-container">
      <h2>{actionText}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">{actionText}</button>
      </form>
      <p onClick={toggleMode} className="toggle-text">
        {toggleText}
      </p>
    </div>
  );
};

export default AuthForm;