import React from "react";
import "../styling/hero.css";
import Logo from "../assets/belovedLogo.svg";
import welcome from "../assets/welcome.jpg";
import growth from '../assets/growth.png';
import caredFor from '../assets/caredfor.png';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-info">
            <img className="logo-hero" src={Logo} alt="Beloved Care logo" />
            <span className="divider">|</span>
            <p>Residential Care Facility for the Elderly</p>
          </div>

          <h1 className="hero-h1">
            Where Every
            <br />
            Resident Is Treated 
            <br />
            <em>Like Family</em>
          </h1>

          <p className="hero-sub">
            Find peace of mind and comfort at Beloved Care, where your loved
            one is truly at home — surrounded by warmth, dignity, and
            genuine compassion.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <img className="hero-img" src={welcome} alt="Welcome to Beloved Care" />
            <img className="growth-badge" src={growth} alt="A hand nurturing a growing leaf" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;