// Portfolio.js

import React from "react";
import "../css/Portfolio.scss";

const Portfolio = () => {
  console.log("Portfolio.js rendered");
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
      </header>
      <div className="container">
        <div className="portfolio-item">
          <h2>Project 1</h2>
          <p>This is a description of project 1.</p>
        </div>
        <div className="portfolio-item">
          <h2>Project 2</h2>
          <p>This is a description of project 2.</p>
        </div>
        {/* Add more portfolio items as needed */}
      </div>
      <footer>&copy; 2024 My Portfolio</footer>
    </div>
  );
};

export default Portfolio;
