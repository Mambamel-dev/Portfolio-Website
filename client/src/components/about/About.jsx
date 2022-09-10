import React from "react";
import "./about.css";
import PFB from "../../img/PFB.jpg";
import Award from "../../img/Cert1.png";
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
          Hello My name is Mel Espiloy and I'm an aspiring web developer. I
          enjoy creating things on the internet. My interest in web development
          started back in 2021, when we created a website project for our
          thesis, since then I started to like build web projects including my
          personal website.
        </p>
        <p className="a-desc">
          Graduated of Bachelor of Science Major in Information Technology in
          University of Nueva Caceres
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Certification of Recognition</h4>
            <p className="a-award-desc">
              Dean lister for academic perfomance in Technical Professional
              Employment Program (TechPEP)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
