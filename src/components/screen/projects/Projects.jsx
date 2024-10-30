import "./Projects.css";

const data = [
  {
    title: "3P ENERGIA",
    site: "https://3penergia.com.br/",
    github: "https://github.com/Gibasa/3p-Energia",
    screenshot: "./images/screenshot-3p-energia.png",
    techs: ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP"],
  },
  {
    title: "LUDMILA GARCIA",
    site: "https://ludmilagarcia.com.br/",
    github: "https://github.com/Gibasa/ludmila_garcia",
    screenshot: "./images/screenshot-ludmilagarcia.png",
    techs: ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP"],
  },
  {
    title: "SPACE APP",
    site: "https://gibasa.github.io/space-turism-website/",
    github: "https://github.com/Gibasa/space-turism-website",
    screenshot: "./images/screenshot-spaceapp.png",
    techs: ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP", "SASS"],
  },
  {
    title: "HOTEL RECANTO DOS CÓDIGOS",
    site: "https://gibasa.github.io/hotel-Tex/",
    github: "https://github.com/Gibasa/hotel-Tex",
    screenshot: "./images/screenshot-hotel-tex.png",
    techs: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "VUE.JS",
      "BOOTSTRAP",
      "NODE",
      "MYSQL",
    ],
  },
  {
    title: "APP FINANCEIRO",
    site: "https://replit.com/@GilbertoSa/App-Financeiro",
    github: "https://github.com/Gibasa/app_financeiro",
    screenshot: "./images/screenshot-app-financeiro.png",
    techs: ["PYTHON"],
  },
  {
    title: "PASSWORD MANAGER",
    site: "https://replit.com/@GilbertoSa/Password-Manager",
    github: "https://github.com/Gibasa/Password_manager",
    screenshot: "./images/screenshot-password-manager.png",
    techs: ["PYTHON"],
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="items">
        {data.map((item, index) => (
          <div
            key={index}
            className="item blue-mask"
            style={{ backgroundImage: `url(${item.screenshot})` }}
          >
            <div className="item-techs">
              {item.techs.map((tech, techIndex) => (
                <h3 key={techIndex} className="tech">
                  {tech}
                </h3>
              ))}
            </div>
            <div className="item-overlay"></div>
            <div className="item-title-btn">
              <h3> {item.title} </h3>
              <img alt="tap here"/>
              <div className="item-btn">
                <a
                  className="btn"
                  href={item.site}
                  target="_blank"
                  rel="noreferrer"
                >
                  LINK
                </a>
                <a
                  className="btn"
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
