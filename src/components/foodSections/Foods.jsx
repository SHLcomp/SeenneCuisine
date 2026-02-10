import React, { useState } from "react";
import foods from "../../data/foods";
import "./Foods.scss";
import img1 from "../../assets/extras1.png";
import img2 from "../../assets/extras2.png";
import img3 from "../../assets/extras3.png";
import img4 from "../../assets/extras4.png";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
gsap.registerPlugin(ScrollTrigger);

const Foods = () => {
  const [activeMenu, setActiveMenu] = useState("All");
  const menuList = [
    "All",
    ...new Set(foods.map((item) => item.menu.toLocaleLowerCase())),
  ];
  const newData = foods.filter((food) =>
    activeMenu === "All" ? true : food.menu.toLocaleLowerCase() === activeMenu,
  );

  // animations GSAP

  useGSAP(() => {
    gsap.to(".cont .img", {
      scrollTrigger: {
        trigger: ".cont",
        start: "top 80%",
        scrub: true,
      },
      rotateZ: 90,
    });

    gsap.to(".extraLeft img", {
      scrollTrigger: {
        trigger: ".foods",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
      },
      x: -100,
      y: 50,
      rotate: 180,
      stagger: 0.1,
      ease: "none",
    });

    gsap.to(".extraRight img", {
      scrollTrigger: {
        trigger: ".foods",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
      },
      x: 100,
      y: -50,
      rotate: 180,
      stagger: 0.1,
      ease: "none",
    });
  });

  return (
    <div className="foods">
      <div className="filtering">
        {/* <h1>Our Menu</h1> */}
        <ul>
          {menuList.map((menu, i) => (
            <li
              key={i}
              onClick={() => setActiveMenu(menu)}
              className={`tag ${activeMenu === menu ? "active" : ""}`}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>

      <div className="extras">
        <div className="top">
          <div className="left extraLeft">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="right extraRight">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="bottom">
          <div className="left extraLeft">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="right extraRight">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>

      <div className="cont">
        {newData.map((item) => {
          return (
            <div className="food-item">
              <div className="img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>

      <a href="#">Check Menu</a>
    </div>
  );
};

export default Foods;
