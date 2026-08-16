import React, { useState } from "react";
import Logo from "../assets/belovedLogo.svg";
import "../styling/navbar.css";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const NAV_ITEMS = [
  { key: "mission", label: "OUR MISSION", href: "#mission" },
  { key: "services", label: "SERVICES", href: "#services" },
  { key: "team", label: "OUR TEAM", href: "#team" },
  { key: "contact", label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="navbar-container">
      <div className="navbar-main">
        <a href="#hero">
          <img className="logo" src={Logo} alt="Beloved Care logo" />
        </a>

        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="contactus">
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      <div className="mobile-container-links">
        <div className="navbar-mobile">
          <a href="#hero">
            <img className="logo" src={Logo} alt="Beloved Care logo" />
          </a>
          <Button
            icon={open ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setOpen(!open)}
            style={{ fontSize: "20px" }}
          />
        </div>

        <ul className={`navbar-links-mobile ${open ? "is-open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;