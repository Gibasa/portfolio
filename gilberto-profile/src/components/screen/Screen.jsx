import "./Screen.css";
import { useState } from "react";
import Projects from "./projects/Projects";

function Screen() {
  const [selectedLink, setSelectedLink] = useState("projects");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <div className="screen">
      <div className="menu">
        <div
          className={`menu-link ${
            selectedLink === "projects" ? "selected" : ""
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
      <div className="content">
        {selectedLink === "projects" && <Projects/>}
        {selectedLink === "skills" && <div>SKILLS</div>}
      </div>
    </div>
  );
}

export default Screen;
