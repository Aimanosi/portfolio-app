import React from "react";
import "../navbar/Navbar.css";
import headshot from "../../images/img2.png";
import cv from "../../images/cv-Nasiruhammed.pdf";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname: newlocation } = useLocation();
  const anotherlocation = newlocation.split("/");
  console.log(anotherlocation);

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Nas<span className="a">.</span>
          </a>
          <div className="imagediv">
            <img src={headshot} alt="" />
          </div>

          <a
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </a>
          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link
                  className={anotherlocation[1] === "" ? "active" : ""}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={anotherlocation[1] === "Portfolio" ? "active" : ""}
                  aria-current="page"
                  to="/Portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={anotherlocation[1] === "Resume" ? "active" : ""}
                  to="/Resume"
                >
                  Resume
                </Link>
              </li>
              <li class="nav-item">
                <Link to={cv}>
                  <button
                    type="button"
                    class="btn btn-outline-dark lg py-2 px-3"
                  >
                    Download CV
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
