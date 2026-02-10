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
        <h2>Front-End React Developer | EU Citizen | Remote-Ready</h2>
        <p>
          Building High-Performance Web Experiences for Global Businesses.
        </p>
        <p>
          I specialize in creating modern, responsive, and SEO-optimized web applications
          that drive results. With a strong focus on React, Tailwind, and Supabase,
          I help companies and clients turn their digital vision into reality.
        </p>
        <p>
          Whether you need a high-converting landing page, a complex web app, or
          automation/integration services, I deliver quality code and exceptional user experiences.
        </p>

        <div className="cta-container">
          {/* We can use a simple anchor tag for now, or a Link if using router later */}
          <a href="https://wa.me/5571994066099" target="_blank" rel="noreferrer" className="cta-button primary">
            Contact Me
          </a>
        </div>
      </div>
      <div
        className={`about-download ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="download">CV DOWNLOAD</div>
        <div className="links">
          <a
            href="https://drive.google.com/file/d/1T3MGyOyrtdr1fL1b2pB-jClMb3EiRolK/view?usp=sharing"
            target="blank"
          >
            ENGLISH
          </a>
          <a
            href="https://drive.google.com/file/d/1cXkDOfLGUZ7RK0CcyPBxaaBpKQ0cGCuS/view?usp=sharing"
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
