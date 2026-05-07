import React from "react";
import "../styling/mission.css";

const Mission = () => {
  return (
    <section id="mission">
      <div className="mission-grid-left">Images will go here</div>
      <div className="mission-grid-right">
        <div className="mission-img"></div>
        <div>
          <p className="mission-label">Our Mission</p>
          <h2 className="mission-h2">Compassionate Care, Every Single Day</h2>
          <p className="mission-body">
            At Beloved Care, our mission is to provide compassionate, dignified,
            and personalized care in a warm, home-like environment where every
            resident feels valued, respected, and truly Beloved. As a
            woman-owned business founded by a caring mother and daughter, we are
            committed to nurturing the physical, emotional, and social
            well-being of each individual entrusted to our care.
          </p>
          <div className="vision-card">
            <p className="vision-label">Our Vision</p>
            <p>
              To create a nurturing residential community where every senior
              feels safe, and deeply cared for. A true home where compassion
              guides every interaction and families have complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
