import React from "react";
import "./about.css";
import PFB from "../../img/PFB.jpg";
import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={PFB} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          dolore!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          blanditiis mollitia quam ducimus excepturi nulla itaque nam asperiores
          cum neque unde facere soluta maiores harum in molestiae magni, commodi
          saepe.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              mollitia facere, atque totam quos maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
