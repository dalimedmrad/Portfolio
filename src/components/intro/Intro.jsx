import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Frontend Developer 💻",
        " Backend Developer 🌐",
        "Designer 📱",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/dali.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohamed ali mrad</h1>
          <h4>
            Motivated junior web developer looking for a role as full-stack web
            developer . Passionate about building first-class web applications.
          </h4>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <Link className="link" to="/about">
          <img src="assets/down.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
