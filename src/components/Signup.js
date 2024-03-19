import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5001/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div className="signup">
      <h1>Register</h1>
      <input
        className="inputfield"
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter name"
      />
      <input
        className="inputfield"
        value={email}
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter email"
      />
      <input
        className="inputfield"
        value={password}
        onChange={(e) => {
          setPass(e.target.value);
        }}
        type="password"
        placeholder="Enter password"
      />
      <button onClick={collectData} className="appButton" type="button">
        Signup
      </button>
    </div>
  );
};

export default Signup;
