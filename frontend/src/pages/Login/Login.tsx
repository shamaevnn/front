import React, { useState } from "react";
import styles from "./login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.login}>
      <h1>Login to shmail</h1>
      <div className={styles.form}>
        <div className={styles.username}>
          <input
            value={username}
            placeholder="input username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className={styles.password}>
          <input
            value={password}
            placeholder="input password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button className={styles.login_button}>login</button>
        <button
          onClick={() => {
            setUsername("");
            setPassword("");
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};
