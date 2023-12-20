import React from "react";
import "./nav.css";
import logo from "../images/logo.png";

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="Logo" />
      <h1>Random Key Generator</h1>
    </div>
  );
}

export default Nav;
