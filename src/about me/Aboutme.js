import React from "react";
import headshot from "../../images/img2.png";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import mail from "../../images/envelope.svg";
const Aboutme = () => {
  return (
    <div>
      <div className="personaldata">
        <img src={headshot} alt="" srcset="" />
        <h3>Nasiru Hammed A.</h3>
        <h6>Web Developer | Architect</h6>
        <div className="tags">
          <a href="mailto:nasaces360@gmail.com">
            <img src={mail} alt="" srcset="" />
          </a>
          <a href="https://twitter.com/nas_grey">
            <img src={twitter} alt="" srcset="" />
          </a>
          <a href="https://www.linkedin.com/in/nasiru-hammed-647473157/">
            <img src={linkedin} alt="" srcset="" />
          </a>
          <a href="https://github.com/Aimanosi">
            <img src={github} alt="" srcset="" />
          </a>
        </div>
        <p>
          I am a positive, enthusiastic and competent Web Developer who, over
          some months, has built up a diverse range of skills, qualities and
          attributes that guarantee I will perform highly in this role. I have
          experience working both alone and as part of a team on often
          time-sensitive, challenging web development projects that require
          outstanding creative and technical capabilities and the ability to
          ensure all work is optimized across a wide range of platforms.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
