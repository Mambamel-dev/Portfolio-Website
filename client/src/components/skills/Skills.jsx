import React from "react";
import Html from "../../img/html-5.png";
import Css from "../../img/css-3.png";
import Js from "../../img/js.png";
import Bootstrap from "../../img/bootstrap.png";
import Figma from "../../img/figma.png";
import ReactJs from "../../img/react.png";
import Mongodb from "../../img/mongodb.png";
import Express from "../../img/express.png";
import Node from "../../img/nodejs.png";
import "./skills.css";
import BackToTopButton from "../backToTopButton/BackToTopButton";
const Skills = () => {
  return (
    <div className="s">
      <div className="s-title">My Skills</div>

      <div className="s-wrapper">
        <img src={Html} alt="" className="s-icon" />
        <img src={Css} alt="" className="s-icon" />
        <img src={Js} alt="" className="s-icon" />
        <img src={Bootstrap} alt="" className="s-icon" />
        <img src={Figma} alt="" className="s-icon" />
        <img src={ReactJs} alt="" className="s-icon" />
        <img src={Mongodb} alt="" className="s-icon" />
        <img src={Express} alt="" className="s-icon" />
        <img src={Node} alt="" className="s-icon" />
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Skills;
