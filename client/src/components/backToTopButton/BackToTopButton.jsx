import React from "react";
import { useEffect, useState } from "react";
import "./backToTopButton.css";
const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    //event listener on scroll
    window.addEventListener("scroll", () => {
      //if scroll by 100px appear the backToTopButton
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, [backToTopButton]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="b-buttons">
      {backToTopButton && (
        <button
          className="fas fa-chevron-double-up"
          onClick={scrollUp}
        ></button>
      )}
    </div>
  );
};

export default BackToTopButton;
