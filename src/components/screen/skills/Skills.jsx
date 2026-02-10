import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faNode,
  faBootstrap,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faGlobe, faTerminal } from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: "Front-End Powerhouse",
    items: [
      { name: "React", icon: faReact },
      { name: "JavaScript (ES6+)", icon: faSquareJs },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "Sass", icon: faSass },
      // Styled Components & MUI usually don't have FA icons, using generic or skipping icon
      { name: "Styled Components", icon: faCode },
      { name: "Material UI", icon: faCode },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Tailwind CSS", icon: faCode }, // Using generic code icon
    ]
  },
  {
    title: "Backend & Automation",
    items: [
      { name: "Supabase", icon: faDatabase },
      { name: "n8n", icon: faTerminal }, // Generic terminal icon
      { name: "SQL", icon: faDatabase },
      { name: "Node.js", icon: faNode },
    ]
  },
  {
    title: "Design & UX",
    items: [
      { name: "Figma", icon: faFigma },
      { name: "Google UX Cert", icon: faGlobe },
      { name: "Responsive Design", icon: faGlobe },
      { name: "Accessibility (WCAG)", icon: faGlobe },
    ]
  },
  {
    title: "Tools & Languages",
    items: [
      { name: "Git & GitHub", icon: faGithub },
      { name: "AI Tools", icon: faTerminal },
      { name: "English (Fluent)", icon: faGlobe },
      { name: "Portuguese (Native)", icon: faGlobe },
      { name: "Italian Citizen", icon: faGlobe },
    ]
  }
];

function Skills() {
  return (
    <div className="skills-container">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.title}</h3>
          <div className="skills-grid">
            {category.items.map((item, idx) => (
              <div key={idx} className="skill-item">
                <FontAwesomeIcon className="skill-icon" icon={item.icon} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
