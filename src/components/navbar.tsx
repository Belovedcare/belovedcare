import React from "react";
import Logo from "../assets/belovedLogo.svg";
import "../styling/navbar.css";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <div className="nav-logo">
        <a href="#hero">
          <img className="logo" src={Logo} />
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#mission">OUR MISSION</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#team">OUR TEAM</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div className="contactus">
        <a href="#contact">Contact Us</a>
      </div>
    </section>
  );
};

export default Navbar;
