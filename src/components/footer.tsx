import React from "react";
import "../styling/footer.css";

const Footer = () => {
  return (
    <footer>
      <span className="footer-text">
        © 2025 Beloved Care · <br className="br" /> Residential Care Facility
        for the Elderly · Anaheim, CA
      </span>
      <span className="footer-text">
        Lic # 306006741 ·
        <a href="mailto:belovedcare.co@gmail.com">belovedcare.co@gmail.com</a>
      </span>
    </footer>
  );
};
export default Footer;
