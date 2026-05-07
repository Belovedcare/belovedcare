import React from "react";
import Alexia from "../assets/Alexia_Nava.jpg";
import Marisa from "../assets/Marisa_Portrait.jpg";
import "../styling/team.css";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="team-content">
        <p className="support-label">Who We Are</p>
        <h2 className="support-h2">
          A Mother &amp; Daughter Team
          <br />
          Built on Love
        </h2>
        <p className="support-body">
          We founded Beloved Care with one simple vision — to create the kind of
          home we would want for our own loved ones. A place filled with warmth,
          patience, dignity, and genuine compassion.
        </p>
      </div>
      <div className="team-grid">
        <div className="team-info">
          <div>
            <img className="portrait-img" src={Marisa} alt="portrait" />
          </div>
          <div className="team-card">
            <div className="team-avatar">M</div>
            <div>
              <div className="team-role">Administrator</div>
              <div className="team-name">Marisa Alonzo Nava</div>
              <div className="team-phone">(714) 333-6281</div>
            </div>
          </div>
        </div>
        <div className="team-info">
          <div>
            <img className="portrait-img img2" src={Alexia} alt="portrait" />
          </div>
          <div className="team-card">
            <div className="team-avatar">A</div>
            <div>
              <div className="team-role">Director</div>
              <div className="team-name">Alexia Nava</div>
              <div className="team-phone">(714) 458-1478</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
