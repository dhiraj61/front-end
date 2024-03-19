import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <img
        className="logo"
        alt="logo"
        src="https://yt3.googleusercontent.com/ytc/AIdro_kMDpr53L7RLMKSikyHT94VLzaimZ4U69xpGKYuGA=s900-c-k-c0x00ffffff-no-rj"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to={"/"}>Product</Link>
          </li>
          <li>
            <Link to={"/add"}>Add</Link>
          </li>
          <li>
            <Link to={"/update"}>Update</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/login"} onClick={logout}>
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
