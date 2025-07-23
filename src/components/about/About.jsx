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
        <a href="https://github.com/Gibasa" target="blank">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/gilberto-sa/" target="blank">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a href="https://wa.me/5571994066099" target="blank">
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
        </a>
      </div>
      <div className="about-text">
        <h1>GILBERTO SÁ</h1>
        <p>Hello, welcome! {"I'm"} a passionate Front-End Developer. </p>{" "}
        <p>
          {" "}
          With a strong focus on HTML, CSS, JavaScript, React, Styled
          Components, and Material UI, I’m committed to creating responsive,
          modern, and user-friendly websites and applications.{" "}
        </p>{" "}
        <p>
          {" "}
          My journey in Software Development is driven by the continuous pursuit
          of growth and learning. I thrive on new challenges and aim to deliver
          high-quality solutions that meet both user needs and business goals.{" "}
        </p>{" "}
        <p>
          {" "}
          {"Let's"} connect and explore how I can help bring your digital
          projects to life!
        </p>
      </div>
      <div
        className={`about-download ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="download">CV DOWNLOAD</div>
        <div className="links">
          <a
            href="https://drive.google.com/file/d/1Ujuv0gsBtH_k5Yvyp-r1co4P5-_bfB6_/view?usp=drive_link"
            target="blank"
          >
            ENGLISH
          </a>
          <a
            href="https://drive.google.com/file/d/17XPjWvLp5ahzCoxgTd2TDVeYXPUgjFHE/view?usp=drive_link"
            target="blank"
          >
            PORTUGUÊS
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
