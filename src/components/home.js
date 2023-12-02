import React from "react";
import "../components/home.css";

const home = () => {
  return (
    <section className="section-1">
      <div className="text1">WELCOME TO MANAGE WISE!</div>
      <div className="text2">
        Empower your buisness with{" "}
        <span className="hlght-text">Strategic </span>
        insights
      </div>
      <div className="text3">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </div>
      <div className="text4">
        <button className="started-btn">Get Started</button>
        <button className="demo-btn">Watch Demo</button>
      </div>
    </section>
  );
};

export default home;
