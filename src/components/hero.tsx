import React from "react";
import "../styling/hero.css";
import house from "../assets/house.jpg";
import welcome from "../assets/welcome.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 className="hero-h1">
          Where Every
          <br />
          Resident Is Treated
          <br />
          <em>Like Family</em>
        </h1>
        <p className="hero-sub">
          Find peace of mind and comfort at Beloved Care, where your loved one
          is truly at home — surrounded by warmth, dignity, and genuine
          compassion.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="img-container">
          <div className="img-item">
            <img src={house} alt="Residential Care" />
          </div>
          <p className="hero-h2">Residential Care Facility for the Elderly</p>

          <div className="img-2 img-item">
            <img src={welcome} alt="Welcome" />
          </div>
        </div>
      </div>

      <div className="container-small">
        <p className="hero-h2">Residential Care Facility for the Elderly</p>
        <h1 className="hero-h1">
          Where Every Resident Is Treated
          <br />
          <em>Like Family</em>
        </h1>
        <p className="hero-sub">
          Find peace of mind and comfort at Beloved Care, where your loved one
          is truly at home — surrounded by warmth, dignity, and genuine
          compassion.
        </p>

        <div className="img-container">
          <div className="img-2">
            <img src={house} alt="Residential Care" />
          </div>

          <div className="img-2">
            <img src={welcome} alt="Welcome" />
          </div>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
