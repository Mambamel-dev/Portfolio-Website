import React from "react";
import "./intro.css";
import Me from "../../img/Profile3.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello My name is</h2>
          <h1 className="i-name">Mel Espiloy</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI / UX Designer</div>
              <div className="i-title-item">Video Editor</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">Frontend Developer</div>
            </div>
          </div>
          <div className="i-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            similique tenetur facere perspiciatis doloremque adipisci quo
            reprehenderit accusamus accusantium natus!
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
