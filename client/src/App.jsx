import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Toggle from "./components/toggle/Toggle";
const App = () => {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
