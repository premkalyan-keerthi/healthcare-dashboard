import React, { useState } from "react";
import "./Navbar.css";
// import logo from "../images/techcare.svg";
// import overview from "../images/overview.svg";
// import patients from "../images/Patients.svg";
// import moreoptions from "../images/moreoptions.svg";
// import schedule from "../images/schedule.svg";
// import transactions from "../images/transactions.svg";
// import message from "../images/message.svg";
// import senior_woman_dr from "../images/senior_woman_dr.png";
// import settings from "../images/settings.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/"); // Default active link

  const navLinks = [
    { name: "Overview", icon: "/images/home.png", link: "/" },
    { name: "Patients", icon: "/images/Patients.svg", link: "/patients" },
    { name: "Schedule", icon: "/images/calendar.png", link: "/schedule" },
    { name: "Message", icon: "/images/chat_bubble.png", link: "/message" },
    {
      name: "Transactions",
      icon: "/images/credit_card.png",
      link: "/transactions",
    },
  ];

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/">
          <img
            src="/images/techcare.png"
            alt="TechCare Logo"
            className="logo-image"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`nav-item ${activeLink === link.link ? "active" : ""}`}
            onClick={() => handleClick(link.link)}
          >
            <div className="nav-link">
              <img src={link.icon} alt={link.name} className="nav-icon" />
              <span className="nav-text">{link.name}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Doctor Info Section */}
      <div className="doctor-info">
        <img
          src="/images/senior_woman.png"
          alt="Dr. Jose Simmons"
          className="doctor-avatar"
        />
        <p className="doctor-name">
          Dr. Jose Simmons <br />
          <span>(General Practitioner)</span>
        </p>
      </div>

      {/* Settings and More Options */}
      <div className="nav-settings">
        <img src="/images/settings.png" alt="Settings" className="nav-icon" />
        <img
          src="/images/more_vert.png"
          alt="More Options"
          className="nav-icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
