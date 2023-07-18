import React, { useState } from "react";
import { APP_STATES } from "../utils/constants";
import Button from "@mui/joy/Button";
import "./RegisterForm.css";

export const RegisterForm = ({ setCurrentScreen, setIsRegistered }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = inputs;
    const storedUsers = localStorage.getItem("users");
    let users = [];
    if (storedUsers.length !== 0) {
      const existingUser = users.find((user) => user.name === name);
      if (existingUser) {
        console.log("User existed, please log in");
        setCurrentScreen(APP_STATES.login);
        setIsRegistered(true);
      }
      const newUser = { name, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setCurrentScreen(APP_STATES.login);
      setIsRegistered(true);
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
    <div className="register-form-container">
      <h1>Register</h1>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            onChange={handleChange}
            value={inputs.email}
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
        <Button type="submit" size="md" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};
