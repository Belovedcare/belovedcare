import React, { useState } from "react";
import Logo from "../assets/belovedLogo.svg";
import "../styling/navbar.css";
import { Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items: MenuItem[] = [
    { key: "mission", label: <a href="#mission">OUR MISSION</a> },
    { key: "services", label: <a href="#services">SERVICES</a> },
    { key: "team", label: <a href="#team">OUR TEAM</a> },
    { key: "contact", label: <a href="#contact">CONTACT</a> },
  ];
  return (
    <section className="navbar-container">
      <div className="navbar-main">
        {/* <div className="nav-logo"> */}
          <a href="#hero">
            <img className="logo" src={Logo} />
          </a>
        {/* </div> */}
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
      </div>

      <div className="mobile-contaier-links">
        <div className="navbar-mobile">
          <div className="nav-logo">
            <a href="#hero">
              <img className="logo" src={Logo} />
            </a>
          </div>
          <div style={{ position: "relative" }}>
            <Button
              icon={<MenuOutlined />}
              onClick={() => setOpen(!open)}
              style={{ fontSize: "20px" }}
            />
          </div>
        </div>

        {open && (
          <div>
            <ul className="navbar-links-mobile">
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
