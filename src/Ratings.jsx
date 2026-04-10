import React from "react";
import "./Ratings.css";

const ratingsData = [
  {
    name: "Google Reviews", rating: 4.9,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Trustpilot", rating: 4.5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopVFlM5JhFwhdMZGDxaPjrWhMBPJ3UGYGoQ&s"
  },
  {
    name: "Justdial", rating: 4.9,
    logo: "https://content.jdmagicbox.com/comp/def_content_category/justdial-branches/replace-just-dial-ltd-gotri-road-vadodara-search-engine-1gh6befeyj-picsart-aiimageenhancer-2--justdial-branches-3-rx9t1.jpg"
  },
  {
    name: "Glassdoor", rating: 4.9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0fUyFrf74QQsi7m6ONQFRnEc-JGPJtdbwA&s"
  },
  {
    name: "Clutch", rating: 5.0,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6n7XBEXA5VGmSC6hVphNjsJGSlVFfpX5RA&s"
  },
  {
    name: "GoodFirms", rating: 5.0,
    logo: "https://assets.goodfirms.co/static/img/goodfirms-social-share.jpg"
  },
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