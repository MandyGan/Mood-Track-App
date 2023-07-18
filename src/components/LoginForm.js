import React, { useState } from "react";
import { APP_STATES } from "../utils/constants";
import Button from "@mui/joy/Button";
import "./LoginForm.css";

export const LoginForm = ({ setCurrentScreen, setIsLoggedIn }) => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = inputs;
    // Get the user data from localStorage
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const user = users.find(
        (user) => user.name === name && user.password === password
      );
      if (user) {
        setCurrentScreen(APP_STATES.home);
        setIsLoggedIn(true);
      } else {
        console.log("user do not exist ");
      }
    } else {
      console.log("please register");
    }
  };
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [fieldName]: value,
      };
    });
  };

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="name"
            id="name"
            onChange={handleChange}
            value={inputs.name}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            onChange={handleChange}
            value={inputs.password}
          />
        </div>
        <div className="submit-group">
          <Button type="submit" size="md" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
