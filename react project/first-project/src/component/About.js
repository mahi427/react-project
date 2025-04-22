import React from "react";
import AboutImage from "../assets/images/about.jpeg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span>us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImage} alt="" />
          </div>
          <div className="content">
            <h3>what makes our store special?</h3>
            <p>
              jhgrfwfvbherfbky3FW4gfwhbhfkwefqbgkiyqbbgbb3qgfwqibfqfiywgbfbwfbywgbifgbwebfqwguq3wghwbgkergber
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
