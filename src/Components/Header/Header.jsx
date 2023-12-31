import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="Header">
      <img src={Logo} alt="noPhoto" className="logo"></img>
      <ul className="Header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testomonial</li>
      </ul>
    </div>
  );
}

export default Header;
