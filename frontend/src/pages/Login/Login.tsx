import React, { useState } from "react";
import styles from "./login.module.css";
import { httpClient } from "../../httpClient";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {
    try {
      const resp = await httpClient.post(
        "/login",
        { username: username, password: password },
        { timeout: 10000 }
      );
      alert("Вы успешно залогинились.");
      navigate("/")
    } catch (e) {
      alert(e);
      console.error(e);
    }
  };

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

        <button onClick={onLoginClick} className={styles.login_button}>
          login
        </button>
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
