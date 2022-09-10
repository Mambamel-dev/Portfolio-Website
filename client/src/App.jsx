import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
