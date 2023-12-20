import React from "react";
import "./nav.css";
import logo from "../images/logo.png";

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="Logo" />
      <h1 className="vis">Random Key Generator</h1>
      <h2 className="hid">RKG</h2>
    </div>
  );
}

export default Nav;
