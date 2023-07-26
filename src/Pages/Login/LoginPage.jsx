import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      !validateEmail(email) ||
      password.length < 8
    ) {
      setError("Password is less than 8 digits or email format is not correct");
    } else {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            setError("");
            handleLogin(data.token);
          } else {
            setError(data.message);
          }
        })
        .catch((error) => {
          setError("Error occurred while logging in");
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleInputChange = () => {
    setError("");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.loginHeading}>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleInputChange(); // Call the function to reset error
                }}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleInputChange(); // Call the function to reset error
                }}
                required
              />
            </div>
          </div>
          <button type="submit">Login</button>
          {error && (
            <p style={{ color: "#fff", textAlign: "center" }}>{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
