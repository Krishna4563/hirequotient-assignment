// home.js
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "../components/home.css";
import dashboardImg from "../assets/dashboard-screenshot.jpg";

const Home = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.querySelector(".section-1");
      const dashboardImgDiv = document.querySelector(".dashboard-img-div");

      const section1Top = section1.getBoundingClientRect().top;
      const dashboardImgTop = dashboardImgDiv.getBoundingClientRect().top;

      if (section1Top < window.innerHeight / 1.5) {
        section1.style.opacity = 1;
        section1.style.transform = "translateY(0)";
      }

      // Check scroll direction
      const currentScrollTop = window.scrollY;
      setScrollDirection(currentScrollTop > window.scrollY ? "up" : "down");

      // Apply effect to dashboard-img only when scrolling down
      if (
        scrollDirection === "down" &&
        dashboardImgTop < window.innerHeight / 1.5
      ) {
        dashboardImgDiv.style.opacity = 1;
        dashboardImgDiv.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return (
    <Element name="section-1" className="section-1">
      <div className="text1">
        <span className="hand-wave">👋</span>WELCOME TO MANAGE WISE!
      </div>
      <div className="text2">
        Empower your business with
        <span className="hlght-text"> Strategic </span>
        insights
      </div>
      <div className="text3">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </div>
      <div className="text4">
        <div className="home-btns-div">
          <button className="started-btn">Get Started</button>
          <button className="demo-btn">Watch Demo</button>
        </div>
      </div>

      <div className="dashboard-img-div">
        <img src={dashboardImg} alt="img-1" className="dashboard-img" />
      </div>
    </Element>
  );
};

export default Home;
