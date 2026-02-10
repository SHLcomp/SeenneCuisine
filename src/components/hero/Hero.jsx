import React from "react";
import "./Hero.scss";
import img from "../../assets/food9.png";
import gsap from "gsap";

const Hero = () => {
  gsap.to(".hero .img img", {
    y: 30,
    rotation: 9,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  
  

  return (
    <div className="hero noise">
      <div className="text">
        <h1>Enjoy your meal at <span>Seenne Cuisine</span></h1>
        <p>Best fresh foods are made here with love just for your taste!</p>
        <div className="cta-cont">
          <button className="cta">View Our Menu</button>
        </div>
      </div>
      <div className="img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
