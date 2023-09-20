import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faVuejs,
  faNode,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { skill: "Javascript", logo: <FontAwesomeIcon className="skill-icon" icon={faSquareJs} /> },
  { skill: "Python", logo: <FontAwesomeIcon className="skill-icon" icon={faPython} /> },
  { skill: "Html", logo: <FontAwesomeIcon className="skill-icon" icon={faHtml5} /> },
  { skill: "Css", logo: <FontAwesomeIcon className="skill-icon" icon={faCss3Alt} /> },
  { skill: "Sass", logo: <FontAwesomeIcon className="skill-icon" icon={faSass} /> },
  { skill: "React", logo: <FontAwesomeIcon className="skill-icon" icon={faReact} /> },
  { skill: "Vue.js", logo: <FontAwesomeIcon className="skill-icon" icon={faVuejs} /> },
  { skill: "Node", logo: <FontAwesomeIcon className="skill-icon" icon={faNode} /> },
  { skill: "Database", logo: <FontAwesomeIcon className="skill-icon" icon={faDatabase} /> },
  { skill: "Bootstrap", logo: <FontAwesomeIcon className="skill-icon" icon={faBootstrap} /> },
];

function Skills() {
  return (
    <div className="skills">
      {skills.map((item, index) => (
        <div key={index} className="skill">
          <div className="skill-item">
            {item.logo}
            <h3>{item.skill}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
