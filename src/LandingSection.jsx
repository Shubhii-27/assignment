import React from "react";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="container">

        {/* Left Side */}
        <div className="info-section">
          <h1>
            Grab <span>36% OFF</span><br />
            Start Your Project in 2 Hours!
          </h1>

          <p>
            Trusted by 300+ businesses, Makes360 delivers custom web, app &
            marketing solutions backed by real results.
          </p>

          {/* External Reload Images */}
          <div className="certifications">
            <img src="https://source.unsplash.com/100x50/?certificate&sig=1" alt="" />
            <img src="https://source.unsplash.com/100x50/?google,logo&sig=2" alt="" />
            <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=100&h=50&fit=crop" alt="" />
          </div>

          <p className="rating">
            ⭐ 4.9/5 on Google | 350+ Clients Served | 100+ Projects Completed
          </p>

          <button className="download-btn">
            Download Brochure (PDF)
          </button>
        </div>

        {/* Right Side Form */}
        <div className="form-section">
          <h3>Get free quotations for our services ✎</h3>

          <form>
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Email Id *" required />
            <input type="tel" placeholder="Contact Number *" required />

            <select>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Other</option>
            </select>

            <textarea
              placeholder="Tell us more about your need & goal"
              required
            ></textarea>

            <div className="recaptcha">
              <input type="checkbox" /> I'm not a robot
            </div>

            <button type="submit" className="quote-btn">
              Get Free Quote
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default LandingSection;