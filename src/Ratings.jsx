import React from "react";
import "./Ratings.css";

const ratingsData = [
  { name: "Google Reviews", rating: 4.9, logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Trustpilot", rating: 4.5, logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Trustpilot_logo.svg" },
  { name: "Justdial", rating: 4.9, logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Justdial_logo.png" },
  { name: "Glassdoor", rating: 4.9, logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Glassdoor_logo.svg" },
  { name: "Clutch", rating: 5.0, logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Clutch_Logo.png" },
  { name: "GoodFirms", rating: 5.0, logo: "https://upload.wikimedia.org/wikipedia/en/4/45/GoodFirms_Logo.png" },
];

const Ratings = () => {
  return (
    <section className="ratings-section">
      <div className="ratings-header">
        <h2>Rated & Trusted by Top Platforms</h2>
        <p>Recognized for excellence, we’re a top-rated choice across leading platforms. See why businesses and users trust us for quality and innovation.</p>
      </div>
      <div className="ratings-cards">
        {ratingsData.map((item, index) => (
          <div className="rating-card" key={index}>
            <img src={item.logo} alt={item.name} />
            <div className="rating-score">{item.rating}</div>
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < Math.floor(item.rating) ? "filled" : i < item.rating ? "half" : ""}>
                  ★
                </span>
              ))}
            </div>
            <div className="rating-name">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ratings;