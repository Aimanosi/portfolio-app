import React from "react";
import "../personal-cv/Personalcv.css";
import headshot from "../../images/img2.png";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import mail from "../../images/envelope.svg";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { BsBootstrapFill, BsJustify } from "react-icons/bs";
import { VscDebugAll } from "react-icons/vsc";
import { DiResponsive } from "react-icons/di";

const Personalcv = () => {
  return (
    <div>
      <h1 className="resume-title01">
        RESUM<span className="a">E</span>
      </h1>
      <div className="cv">
        <div className="personalcv">
          <img src={headshot} alt="" srcset="" />
          <h2>Nasiru Hammed A.</h2>
          <h5>Web Developer | Architect</h5>
          <div className="tags">
            <a href="#">
              <img src={mail} alt="" srcset="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" srcset="" />
            </a>
            <a href="#">
              <img src={linkedin} alt="" srcset="" />
            </a>
            <a href="#">
              <img src={github} alt="" srcset="" />
            </a>
          </div>
          <h4>BIO</h4>
          <p>
            Web developer student with experience in Html, Css, JavaScript,
            React and Node.js. Passionate about web development and excited to
            learn more, Skilled in problem solving and working independently.
          </p>
        </div>
        <div className="second-side">
          <h1 className="resume-title">
            RESUM<span className="a">E</span>
          </h1>

          <div className="cvmain">
            <section className="cvtext">
              <div className="cvtitle">
                <h4>EDUCATION </h4>
              </div>
              <div className="cvdescription">
                <h5>Tech Accent Creatives</h5>
                <p>
                  lagos, Nigeria <br /> Full stack web development
                </p>

                <h5>Bells University of Technology</h5>
                <p>
                  Ogun, Nigeria <br /> Bsc. Architecture, 2021
                </p>

                <h5>Federal polytechnic Auchi</h5>
                <p>
                  Edo, Nigeria <br /> HND. Architecture, 2017
                </p>
              </div>
            </section>
            <section className="cvtext">
              <div className="cvtitle">
                <h4>EXPERIENCE</h4>
              </div>
              <div className="cvdescription">
                <div className="workplace">
                  <h5> Web developement student</h5>
                  <h6>Tech Accent Creatives</h6>
                </div>

                <p>July 29 - till date</p>
                <p>
                  Participate in the design, development and deployment of
                  web-based user interfaces, Create cross-browser, fully
                  functional web pages using HTML and CSS and React.js, Created
                  landing pages, dashboards, and online applications using
                  JavaScript, HTML, and CSS, built server side applications
                  using Node.js, MongoDB and Mongoose
                </p>

                <div className="workplace">
                  <h5> Architect</h5>
                  <h6>Ry Projects</h6>
                </div>

                <p>Jan 2018 - April 2022</p>
                <p>
                  Preparation or architectural drawings, working drawings and
                  presentation drawings, Assisted in initial project research
                  and outlining project schedule and task, Supervised
                  construction site, Visualizing 3D renders of proposed spaces.
                </p>

                <div className="workplace">
                  <h5>Intern</h5>
                  <h6>DIC projects</h6>
                </div>

                <p>Jan 2016 - Dec 2017</p>
                <p>
                  Preparation and coordination of the details of architectural
                  projects which includes building specification and dimensions,
                  Assisted in initial project research and outlining project
                  schedule and task, Supervised construction site, Visualizing
                  3D renders of proposed spaces
                </p>

                <div className="workplace">
                  <h5>Intern</h5>
                  <h6>Linesmith design associate</h6>
                </div>

                <p>Jan 2015 - Dec 2016</p>
                <p>
                  Preparation of complete working and presentation drawing in
                  AutoCAD and Revit Architecture, Completion of construction
                  documents, Assisted in the reviews of project proposal, Site
                  supervision.
                </p>

                <div className="workplace">
                  <h5>Intern</h5>
                  <h6>Team design Africa</h6>
                </div>

                <p>Jan 2015 - Dec 2016</p>
                <p>
                  Preparation of complete working and presentation drawing in
                  AutoCAD and Revit Architecture, Completion of construction
                  documents, Assisted in the reviews of project proposal, Site
                  supervision.
                </p>
              </div>
            </section>
            <section className="cvtext">
              <div className="cvtitle">
                <h4>SKILLS</h4>
              </div>
              <div className="skills">
                <p>
                  HTML5
                  <FaHtml5
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>

                <p>
                  CSS
                  <SiCss3
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>
                <p>
                  JavaScript
                  <SiJavascript
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>

                <p>
                  React js{" "}
                  <FaReact
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />{" "}
                </p>
                <p>
                  debugging{" "}
                  <VscDebugAll
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>

                <p>
                  Git{" "}
                  <FaGitSquare
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>

                <p>
                  Node js{" "}
                  <FaNodeJs
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>

                <p>
                  Responsive design{" "}
                  <DiResponsive
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>
                <p>
                  Express js{" "}
                  <SiExpress
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>
                <p>
                  MongoDB{" "}
                  <SiMongodb
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>
                <p>
                  bootstrap{" "}
                  <BsBootstrapFill
                    style={{
                      color: "black",
                      width: "100px",
                      fontSize: "4rem",
                    }}
                  />
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalcv;
