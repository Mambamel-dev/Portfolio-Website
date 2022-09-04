import React from "react";
import "./productList.css";
import Product from "../product/Product";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Mel</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error,
          aperiam non atque architecto nulla, repellendus perspiciatis, mollitia
          a quibusdam velit eveniet sit! Fugit quibusdam reprehenderit harum a
          id illum.
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
