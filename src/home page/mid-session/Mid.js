import React from "react";
import mainphoto from "../../images/img1.png";
import "../mid-session/Mid.css";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import mail from "../../images/envelope.svg";
import cv from "../../images/cv-Nasiruhammed.pdf";

const Mid = () => {
  return (
    <div className="midsection">
      <div className="midtext">
        <p className="hello">Hello World, I am</p>
        <h1>
          Aimanos<span className="a">i</span>
        </h1>
        <p> Web developer | Designer | Freelancer</p>
        <div className="tags">
          <a href="mailto:nasaces360@gmail.com" target="_blank">
            <img src={mail} alt="" srcset="" />
          </a>
          <a href="https://twitter.com/nas_grey" target="_blank">
            <img src={twitter} alt="" srcset="" />
          </a>
          <a
            href="https://www.linkedin.com/in/nasiru-hammed-647473157/"
            target="_blank"
          >
            <img src={linkedin} alt="" srcset="" />
          </a>
          <a href="https://github.com/Aimanosi" target="_blank">
            <img src={github} alt="" srcset="" />
          </a>
        </div>
        <a href={cv}>
          <button type="button" class="btn btn-outline-dark lg py-3 px-5">
            Download CV
          </button>
        </a>
      </div>
      <div className="mainimage">
        <img src={mainphoto} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Mid;
