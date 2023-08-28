import "./About.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className="about">
      <div className="side-bar"></div>
      <div className="avatar">
        <div className="avatar-bar top"></div>
        <img src="/images/PERFIL-GIBA.png" alt="" />
        <div className="avatar-bar bottom"></div>
      </div>
      <div className="socials">
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <FontAwesomeIcon className="icon" icon={faWhatsapp} />
      </div>
      <div className="about-text">
        <h1>GILBERTO SÁ</h1>
        <p>Hello, welcome! {"I'm"} a Front-end development enthusiast. </p>{" "}
        <p>
          {" "}
          My journey in the world of Software Development is driven by the
          continuous pursuit of growth and improvement.{" "}
        </p>{" "}
        <p>
          {" "}
          I possess skills in Html, Css, Javascript, Python, Vue.js, React,
          Node, and MySQL. Eager to embrace new challenges and keep learning.{" "}
        </p>{" "}
        <p> {"Let's"} connect!</p>
      </div>
      <div
        className={`about-download ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="download">CV DOWNLOAD</div>
        <div className="links">
          <a href="">ENGLISH</a>
          <a href="">PORTUGUÊS</a>
        </div>
      </div>
    </div>
  );
}

export default About;
