import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [dropdown, setDropdown] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LEFT */}
        <div className="nav-left">
          <div className="logo">
            <img
              src="https://www.makes360.com/img/makes360-logo-white.png"
              alt="logo"
              height="33"
            />
          </div>

          {/* NAV LINKS */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

            <li onClick={() => setActive("Home")} className={active==="Home" ? "active-link" : ""}>
              Home
            </li>

            {/* ABOUT DROPDOWN */}
            <li
              className="dropdown"
              onMouseEnter={() => setDropdown("about")}
              onMouseLeave={() => setDropdown(null)}
            >
              <span onClick={() => setActive("About")} className={active==="About" ? "active-link" : ""}>
                About
              </span>

              <ul className={`dropdown-menu ${dropdown==="about" ? "show" : ""}`}>
                <li>Our Team</li>
                <li>Company</li>
              </ul>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="dropdown"
              onMouseEnter={() => setDropdown("services")}
              onMouseLeave={() => setDropdown(null)}
            >
              <span onClick={() => setActive("Services")} className={active==="Services" ? "active-link" : ""}>
                Services
              </span>

              <ul className={`dropdown-menu ${dropdown==="services" ? "show" : ""}`}>
                <li>Web Development</li>
                <li>App Development</li>
              </ul>
            </li>

            <li onClick={() => setActive("Industry")} className={active==="Industry" ? "active-link" : ""}>
              Industry
            </li>

            <li onClick={() => setActive("Contact")} className={active==="Contact" ? "active-link" : ""}>
              Contact
            </li>

           

          </ul>
        </div>

        {/* RIGHT */}
        <div className="nav-right">

          <div className="trial-btn desktop-btn">
            <button>Free Trial</button>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;