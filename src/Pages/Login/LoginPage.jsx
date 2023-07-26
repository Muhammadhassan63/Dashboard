import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      !validateEmail(email) ||
      password.length < 8
    ) {
      alert("Invalid email or password. Please enter valid credentials.");
    } else {
      navigate("/home");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
