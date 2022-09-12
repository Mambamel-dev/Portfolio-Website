import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">Here are my latest projects that I build.</p>
      </div>
      <div className="pl-list">
        {/* map the product data.js in each item into the Product Component */}
        {products.map((item) => (
          //pass the id,img and link of data.js inside the Product Component as props
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
