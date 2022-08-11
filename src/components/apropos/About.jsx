import React from "react";
import "./about.scss";
import { Today } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="about-personal-info">
        <div className="info">
          <div className="info-section">
            <div className="info-item-container">
              <div className="item-info">
                <p>
                  Birthday : <span>10 september 1999</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Age : <span>23</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Email : <span>mohamedalimrad3@gmail.com</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Degree : <span>Licence</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Phone : <span>+216 27 914 561 / +216 56 813 222</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Freelance : <span>Available</span>
                </p>
              </div>
            </div>
            <div className="btn-about">
              <Link className="link" to="/contact">
                <button>Contact me</button>
              </Link>
              <a
                className="link"
                href="cv/cv-med-ali-FR.pdf"
                download="cv-med-ali-FR"
              >
                <button>Download CV </button>
              </a>
            </div>
          </div>
          <div className="about-skills">
            <h1>Skills</h1>
            <div className="skill-item">
              <div className="text">
                <h5>HTML5 / CSS3 / SCSS</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>JavaScript &nbsp; / &nbsp;TypeScript</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>React js &nbsp; / &nbsp;Redux</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>Angular</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>Node Js &nbsp; / &nbsp; Express</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>Php / Symfony</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>Flutter / Dart</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>MySQL &nbsp; / &nbsp; Mongo DB &nbsp; / &nbsp; Firebase</h5>
              </div>
              <div className="progress">
                <div className="in-progress"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-resume">
          <div className="education">
            <h2>Education</h2>
            <div className="education-section">
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2021
                </h3>
                <h4 className="timeline-title">
                  FULL-STACK JS Bootcamp (GOMYCODE)
                </h4>
                <p class="timeline-text">Create web pages with HTML and CSS.</p>
                <p className="timeline-text">
                  {" "}
                  Create and maintain a complete website:
                </p>
                <p className="timeline-text">- Front: React Js , React Redux</p>
                <p className="timeline-text">
                  {" "}
                  - Back: Node Js ,Rest API, MongoDB, Mongoose, Express
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2019-2022
                </h3>
                <h4 className="timeline-title"> ISG Gabes (Tunisia)</h4>
                <p class="timeline-text">
                  Bachelor's degree in business computing, business information
                  system specialty
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2019
                </h3>
                <h4 className="timeline-title">
                  Ibn khaldoun metouia high school Gabes (Tunisie){" "}
                </h4>
                <p class="timeline-text">
                  Scientific baccalaureat: Mathematical
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
