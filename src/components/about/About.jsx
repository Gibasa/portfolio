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
        <img src="" alt="" />
      </div>
      <div className="socials">
        <a href="https://github.com/Gibasa" target="blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/gilberto-sa/" target="blank"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
        <a href="https://wa.me/5571994066099" target="blank"><FontAwesomeIcon className="icon" icon={faWhatsapp} /></a>
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
          <a href="https://drive.google.com/file/d/1PEWsGiHKGd6tqo6WswbgYDfY83ZzSkXP/view?usp=drive_link" target="blank">ENGLISH</a>
          <a href="https://drive.google.com/file/d/1F42p8vZe5o6qNfm6hRIypyuE8-hXOIy4/view?usp=drive_link" target="blank">PORTUGUÊS</a>
        </div>
      </div>
    </div>
  );
}

export default About;
