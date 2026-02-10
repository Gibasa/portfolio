import "./Screen.css";
import { useState } from "react";
import Projects from "./projects/Projects";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Skills from "./skills/Skills";

function Screen() {
  const [selectedLink, setSelectedLink] = useState("projects");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const yearnow = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear);
    return currentYear;
  };
  return (
    <div className="screen">
      <div className="menu">
        <div
          className={`menu-link ${selectedLink === "projects" ? "selected" : ""
            }`}
          onClick={() => handleLinkClick("projects")}
        >
          <div className="title">PROJECTS</div>
          <span></span>
        </div>
        <div
          className={`menu-link ${selectedLink === "skills" ? "selected" : ""}`}
          onClick={() => handleLinkClick("skills")}
        >
          <span></span>
          <div className="title">SKILLS</div>
        </div>
      </div>
      <div className="detalhes">
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
        <div className="detalhes-linha"></div>
      </div>
      <div className="content">
        <TransitionGroup className="transition-group">
          {selectedLink === "projects" && (
            <CSSTransition
              key="projects"
              timeout={500}
              classNames="slide-up"
              unmountOnExit
            >
              <Projects />
            </CSSTransition>
          )}
          {selectedLink === "skills" && (
            <CSSTransition
              key="skills"
              timeout={500}
              classNames="slide-up"
              unmountOnExit
            >
              <Skills />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <div className="copyright">
        <p>Copyright {yearnow()}. Gilberto Sá - All rights reserved. Design by <a href="https://biancaferreiradesign.com/" target="blank">Bianca Ferreira.</a></p>
      </div>
    </div>
  );
}

export default Screen;
