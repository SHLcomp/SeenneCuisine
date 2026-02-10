import React, { useEffect } from "react";
import "./Navbar.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [chosenLink, setChosenLink] = useState("Home");
  let locate = useLocation();

  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    switch (locate.pathname) {
      case "/":
        setChosenLink("Home");
        break;
      case "/menu":
        setChosenLink("Menu");
        break;
      case "/about":
        setChosenLink("About");
        break;
      case "/contact":
        setChosenLink("Contact");
        break;
      default:
        setChosenLink("");
    }
  }, [locate.pathname]);
  return (
    <nav>
      <h1>Seenne <i onClick={()=>setMobile(prev => !prev)} className="fa-solid fa-bars i"></i></h1>
      <ul className={mobile === true ? "mobile" : ""}>
        <Link to={"/"} className="a">
          <li className={chosenLink === "Home" ? "active" : " "}>Home</li>
        </Link>
        <Link to={"/menu"} className="a">
          <li className={chosenLink === "Menu" ? "active" : " "}>Menu</li>
        </Link>
        <Link to={"/about"} className="a">
          <li className={chosenLink === "About" ? "active" : " "}>About Us</li>
        </Link>
        <Link to={"/contact"} className="a">
          <li className={chosenLink === "Contact" ? "active" : " "}>Contact</li>
        </Link>
      </ul>
      <Link to={"/contact"} className="a"><h4>Contact</h4></Link>
    </nav>
  );
};

export default Navbar;
