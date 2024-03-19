import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const hendleLogin = async () => {
    let result = await fetch("http://localhost:5001/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", result);
    if (result.name) {
      navigate("/");
    } else {
      alert("Enter Valid Details");
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        className="inputfield"
        placeholder="Enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        className="inputfield"
        placeholder="Enter Password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
        value={password}
      />
      <button onClick={hendleLogin} className="appButton" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
