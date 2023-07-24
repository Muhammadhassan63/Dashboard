// LoginPage.jsx
import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
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
          <div className={styles.dashboardLink}>
        {isFormValid && (
          <Link to="/dashboard" className={styles.dashboardLink} >Go to Dashboard</Link>
        )}
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
