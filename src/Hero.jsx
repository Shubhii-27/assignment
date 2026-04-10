

import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const texts = ["Increase Your", "Business Growth", "By 2600%"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // --- REVEAL ANIMATION ---
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 200);
    });
  }, []);

  // --- TYPEWRITER EFFECT ---
  useEffect(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + "\n");
          setTextIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, textIndex, texts]);

  return (
    <section className="hero">
      {/* LEFT SECTION */}
      <div className="hero-left">
        <p className="hero-tag reveal">Idea • Development • Branding</p>

        <h1 className="reveal typewriter">
          {displayText.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line.split(" ").map((word, j) => (
                <span
                  key={j}
                  className={i === 2 ? "highlight" : ""}
                >
                  {word}{" "}
                </span>
              ))}
              <br />
            </React.Fragment>
          ))}
        </h1>

        <p className="hero-desc reveal">
          Makes360 is a leading digital consulting company in India since 2018.
          We provide full stack digital services to grow your business faster.
        </p>

        <div className="hero-buttons reveal">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Free Consultation</button>
        </div>
      </div>

      {/* RIGHT SECTION WITH ZOOM-IN + FLOAT */}
      <div className="hero-right reveal zoom-in">
        <img
          className="hero-img animate-img"
          src="https://www.makes360.com/img/home/makes360-team.png"
          alt="Makes360"
        />
      </div>
    </section>
  );
};

export default Hero;