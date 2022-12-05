import React from "react";
import "../footer/Footer.css";
import email from "../../images/envelope.svg";
import phone from "../../images/telephone.svg";
import location from "../../images/geo-alt-fill.svg";

const Footer = () => {
  return (
    <div className=" footer">
      <h2>Contact</h2>
      <div className="p-info">
        <h6>Email</h6>
        <img src={email} alt="" srcset="" />
        <p>nasaces360@gmail.com</p>
      </div>
      <div className="p-info ">
        <h6 className="contact">Contact</h6>
        <img src={phone} alt="" srcset="" />
        <p>+234-9082-7160-40</p>
      </div>
      <div className="p-info">
        <h6>Location</h6>
        <img src={location} alt="" srcset="" />
        <p>Lagos, Nigeria</p>
      </div>
    </div>
  );
};

export default Footer;
