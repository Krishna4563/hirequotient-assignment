import React from "react";
import "../components/features.css";
import featuresImg1 from "../assets/features-img-1.webp";
import featuresImg2 from "../assets/features-img-2.png";
import featuresImg3 from "../assets/features-img-3.png";
import featuresImg4 from "../assets/features-img-4.png";

const Section2 = () => {
  return (
    <section className="section-2">
      <div className="sc2-text1">
        <span className="fire-icon">🔥</span>PREMIER FEATURES
      </div>
      <div className="sc2-text2">
        Discover our product's
        <span className="sc2-hlght-text"> Capabilities </span>
      </div>
      <div className="sc3-text3">
        Don't settle for mediocrity - embrace the future of management with
        Manage Wise.
      </div>

      <div className="features-div-main1">
        <div className="main1-left">
          <p className="main1-left-text">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </p>
        </div>

        <div className="main1-right">
          <img src={featuresImg1} alt="img1" className="features-img1" />

          <div className="features-img1-content">
            <h1 className="features-img1-text1">Smart Task Management</h1>
            <p className="features-img1-text2">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
      </div>

      <div className="features-div-main2">
        <div className="main2-div1">
          <img src={featuresImg2} alt="img1" className="features-img1" />

          <div className="features-img2-content">
            <h1 className="features-img2-text1">Smart Task Management</h1>
            <p className="features-img2-text2">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>

        <div className="main2-div2">
          <img src={featuresImg3} alt="img1" className="features-img1" />

          <div className="features-img2-content">
            <h1 className="features-img2-text1">Smart Task Management</h1>
            <p className="features-img2-text2">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>

        <div className="main2-div3">
          <img src={featuresImg4} alt="img1" className="features-img1" />

          <div className="features-img2-content">
            <h1 className="features-img2-text1">Smart Task Management</h1>
            <p className="features-img2-text2">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
