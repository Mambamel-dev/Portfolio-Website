import React from "react";
import "./product.css";

// props from  the Produclist Component
const Product = ({ img, link, title, desc }) => {
  return (
    <div className="main-p">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
        <h2 className="p-title">{title}</h2>
        <p className="p-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Product;
