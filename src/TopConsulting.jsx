import React from "react";
import "./TopConsulting.css";

const certifications = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/ISO_9001_logo.png",
    text: "ISO Certified Company",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/NITI_Aayog_Logo.png",
    text: "Supported by NITI Aayog",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/ACIC_RISE_logo.png",
    text: "Supported by ACIC RISE",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Startup_India_Logo.png",
    text: "Supported by Startup India",
  },
];

const TopConsulting = () => {
  return (
    <section className="top-consulting">
      <div className="container">
        <h2>Top Digital Consulting Company</h2>
        <p>
          Makes360 is a results-driven digital agency founded in 2018, empowering
          300+ businesses across 10+ countries with web design, development, mobile
          app development, ERP, CRM, and marketing solutions. We deliver up to 2600%
          business growth, backed by a 30-day money-back guarantee.
        </p>

        <div className="certifications">
          {certifications.map((item, index) => (
            <div key={index} className="cert-item">
              <img src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopConsulting;