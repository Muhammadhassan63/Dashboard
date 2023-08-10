import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { sha512 } from "js-sha512";
import { adminEmail,adminPassword } from "../../credentials";


const LoginPage = ({handleLoginProp}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = () => {
    setError("");
  };

  const handleLogin = () => {
    const hashedEmail = sha512(email);
    const hashedPassword = sha512(password);
    if (hashedEmail === adminEmail && hashedPassword === adminPassword) {
      handleLoginProp();

    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.loginHeading}>Login Page</h1>
        <form>
          <div className={styles.formField}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          {error && (
            <p style={{ color: "#fff", textAlign: "center" }}>{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
