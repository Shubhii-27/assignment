import React from "react";
import "./TopConsulting.css";

const certifications = [
  {
    img: "https://img.freepik.com/premium-vector/iso-certified-company-emblem-design_1135235-2279.jpg?semt=ais_hybrid&w=740&q=80",
    text: "ISO Certified Company",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbb7a9A_YBCGjW5bJqzgMHmDWVwpG0HeP7A&s",
    text: "Supported by NITI Aayog",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQEYBdNjnKLS4Q/company-logo_200_200/company-logo_200_200/0/1659523966730/acicrise_logo?e=2147483647&v=beta&t=eFvMOzxd7R9zjcnW0QBwK2rqvwsiXGReNFMezDwqGlo",
    text: "Supported by ACIC RISE",
  },
  {
    img: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/smstreet/media/media_files/W5cOkLDaOBwFhsoTrioW.jpg",
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