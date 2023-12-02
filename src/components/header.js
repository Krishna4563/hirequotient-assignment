import React from "react";
import "../components/header.css";
import Logo from "../assets/logo.png";

const header = () => {
  return (
    <section className="header-section">
      <div className="logo-div">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="company-name">ManageWise</h1>
      </div>

      <div className="navbar-div">
        <p className="navbar-element">Features</p>
        <p className="navbar-element">FAQ</p>
        <p className="navbar-element">Pricing</p>
        <p className="navbar-element">Testimonials</p>
      </div>

      <a
        href="https://templatesunit.lemonsqueezy.com/checkout"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="template-btn">Buy Template</button>
      </a>
    </section>
  );
};

export default header;
