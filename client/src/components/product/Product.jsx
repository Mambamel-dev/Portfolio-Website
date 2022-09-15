import React, { useContext } from "react";
import "./product.css";
import { ThemeContext } from "../../context";
import BackToTopButton from "../backToTopButton/BackToTopButton";
// props from  the Produclist Component
const Product = ({ img, link, title, desc }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ border: darkMode && "none" }} className="main-p">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
        <h2
          style={{
            color: darkMode && "#fff",
          }}
          className="p-title"
        >
          {title}
        </h2>
        <p className="p-desc">{desc}</p>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Product;
