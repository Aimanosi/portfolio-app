import React from "react";
import "../mainbody/Mainbody.css";
import desktop from "../../images/desktop1.jpg";
import desktop2 from "../../images/desktop2.jpg";
import desktop3 from "../../images/desktop3.jpg";
import desktop4 from "../../images/desktop4.jpg";
import guess from "../../images/guessmynumber.PNG";
import audiophile from "../../images/audiophile.png";
import port from "../../images/port.PNG";
import toDoapp from "../../images/to-do-app.PNG";

const mainbody = () => {
  return (
    <div>
      <h1 className="resume-title">
        PORTFOLI<span className="a">O</span>
      </h1>

      <div className="personal">
        <section className="first-cards">
          <div class="card">
            <img src={audiophile} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>AUDIOPHILE APP</h5>
              <p class="card-text">
                {" "}
                <i> E-commerce</i>
              </p>
              <p>HTML, CSS, React.js, </p>
              <a
                href="https://audiophile-project-henna.vercel.app/"
                target="_blank"
              >
                Visit website
              </a>
            </div>
          </div>

          <div class="card">
            <img src={toDoapp} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>TO-DO-APP</h5>
              <p class="card-text">
                {" "}
                <i>simple personal app</i>
              </p>
              <p>HTML, CSS, Js, </p>
              <a href="https://to-do-app-psi-one.vercel.app/" target="_blank">
                Visit website
              </a>
            </div>
          </div>

          <div class="card">
            <img src={desktop} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>ROOM PROJECT</h5>
              <p class="card-text">
                {" "}
                <i> Furniture and life style</i>
              </p>
              <p>HTML, CSS, JavaScript</p>
              <a href="https://room-web-aimanosi.vercel.app/" target="_blank">
                Visit website
              </a>
            </div>
          </div>

          <div class="card">
            <img src={port} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>MY PORTFOLIO</h5>
              <p class="card-text">
                {" "}
                <i> Personal</i>
              </p>
              <p>HTML, CSS, JavaScript</p>
              <a
                href="https://portfolio-app-ecru-phi.vercel.app/"
                target="_blank"
              >
                Visit website
              </a>
            </div>
          </div>

          <div class="card">
            <img src={desktop4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>COUNT DOWN TIMER</h5>
              <p class="card-text">
                {" "}
                <i>Launching soon page</i>
              </p>
              <p>HTML, CSS, JavaScript</p>
              <a href="https://timer-lake.vercel.app/" target="_blank">
                Visit website
              </a>
            </div>
          </div>
          <div class="card">
            <img src={desktop3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>NASIMS</h5>
              <p class="card-text">
                {" "}
                <i>Finance and investmment</i>
              </p>
              <p>HTML, CSS, Bootstrap</p>
              <a href="#">Visit website</a>
            </div>
          </div>

          <div class="card">
            <img src={desktop2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>MEET</h5>
              <p class="card-text">
                <i>Social app</i>
              </p>
              <p>React JS</p>
              <a href="meet-web-page.vercel.app">Visit website</a>
            </div>
          </div>
          <div class="card">
            <img src={guess} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>GUESS MY NUMBER GAME</h5>
              <p class="card-text">
                {" "}
                <i>Guess game</i>
              </p>
              <p>HTML, CSS, JavaScript</p>
              <a href="#">Visit website</a>
            </div>
          </div>

          <div class="card">
            <img src={desktop4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>COUNT DOWN TIMER</h5>
              <p class="card-text">
                {" "}
                <i>Launching soon page</i>
              </p>
              <p>HTML, CSS, JavaScript</p>
              <a href="">Visit website</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default mainbody;
