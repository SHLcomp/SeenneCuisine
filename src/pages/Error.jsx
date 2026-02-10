import React from "react";
import "./Error.scss";
import Navbar from "../components/navbar/Navbar";

const Error = () => {
  return (
    <div className="error">
        <Navbar />
      <div className="cont">
        <h1>Hello! This is Seenne.</h1>
        <h4>
          It looks like you are looking for a wrong path, or that has not been
          created yet :(
        </h4>
        <h4>Contact me for more information, thanks!</h4>
      </div>
    </div>
  );
};

export default Error;
