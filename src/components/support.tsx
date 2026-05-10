import React from "react";
import bed1 from "../assets/shared-1.jpg";
import bed2 from "../assets/single-1.jpg";
import bed3 from "../assets/bed3.jpg";
import "../styling/support.css";

const Support = () => {
  return (
    <section id="services" className="services">
      <div className="right">
        <p className="section-label">What We Offer</p>
        <h2 className="section-override">
          Comprehensive, Personalized Support
        </h2>
        <p className="section-body-override">
          At Beloved Care, we provide comprehensive support tailored to each
          resident's unique needs — so families can rest easy knowing their
          loved one is in the right hands.
        </p>
        <div className="beds-img1">
          <img src={bed1} />
          <img src={bed2} />
        </div>
        {/* <div className="beds2">
          <img src={bed3} />
        </div> */}
      </div>
      <div className="services-list">
        <div className="service-item">
          <div className="service-icon">🛏️</div>
          <div className="service-text">Private Rooms - Available</div>
        </div>
        <div className="service-item">
          <div className="service-icon">🛏️</div>
          <div className="service-text">Shared Rooms - Available</div>
        </div>
        <div className="service-item">
          <div className="service-icon">♥</div>
          <div className="service-text">
            24/7 Personalized care & supervision
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">🚿</div>
          <div className="service-text">
            Assistance with activities of daily living
            <br />
            (Bathing, dressing,grooming, and mobility)
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">♿</div>
          <div className="service-text">
            Wheelchair-accessible bathrooms with handrails & walk-in shower
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">💊</div>
          <div className="service-text">Medication assistance & reminders</div>
        </div>
        <div className="service-item">
          <div className="service-icon">🍽</div>
          <div className="service-text">
            Home-cooked, nutritious meals made daily
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">🥗</div>
          <div className="service-text">Special dietary accommodations</div>
        </div>
        <div className="service-item">
          <div className="service-icon">🎯</div>
          <div className="service-text">
            Daily activites to promote socialization and mental stimulation
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">🧺</div>
          <div className="service-text">Housekeeping & laundry services</div>
        </div>
        <div className="service-item">
          <div className="service-icon">🏥</div>
          <div className="service-text">
            Coordination with healthcare providers
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">🧠</div>
          <div className="service-text">
            10+ years experience in Alzheimer's, dementia & hospice care
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
