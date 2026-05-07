import React from "react";
import "../styling/connect.css";

const Connect = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <p className="connect-label">Get in Touch</p>
        <h2 className="connect-h2">
          We'd Love to Welcome
          <br />
          Your Family
        </h2>
        <div>
          <p className="contact-intro">
            We invite you to contact Beloved Care to learn more about our home
            and the personalized services we provide. We would be honored to
            answer your questions and schedule a private tour so you can
            experience our warm, welcoming environment firsthand.
          </p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-info-label">Phone</div>
              <div className="contact-info-val">
                (714) 333-6281
                <br />
                (714) 458-1478
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉</div>
            <div>
              <div className="contact-info-label">Email</div>
              <div className="contact-info-val">belovedcare.co@gmail.com</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-info-label">Address</div>
              <div className="contact-info-val">
                937 N Iroquois Ave
                <br />
                Anaheim, CA 92801
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🪪</div>
            <div>
              <div className="contact-info-label">License</div>
              <div className="contact-info-val"># 306006741</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
