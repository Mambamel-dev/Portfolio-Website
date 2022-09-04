import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
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
        {/* map the product data.js in each item into the Product Component */}
        {products.map((item) => (
          //pass the id,img and link of data.js inside the Product Component as props
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
