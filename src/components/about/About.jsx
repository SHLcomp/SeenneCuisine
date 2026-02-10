import React from "react";
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="txt">
        <span className="cursive">Special Moments</span>
        <h1>About Us</h1>
      </div>
      <div className="container">
        <div className="div img-cont">
          <img src="https://images.pexels.com/photos/35290638/pexels-photo-35290638.jpeg" alt="" />
        </div>
        <div className="info div">
            <span className="cursive">Taste Perception</span>
            <h1>Tradition & Modern</h1>
            <p>At <span>Seenne Cuisine</span> we create special dishes made by experts chefs...</p>
            <button className="cta">Read More</button>
        </div>
        <div className="div img-cont">
          <img src="https://images.pexels.com/photos/5490140/pexels-photo-5490140.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
