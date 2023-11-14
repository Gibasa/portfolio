import "./Projects.css";

const data = [
  {
    title: "HOTEL RECANTO DOS CÓDIGOS",
    site: "https://gibasa.github.io/hotel-Tex/",
    github: "https://github.com/Gibasa/hotel-Tex",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-hotel-tex.png",
  },
  {
    title: "3P ENERGIA",
    site: "https://gibasa.github.io/3p-Energia/",
    github: "https://github.com/Gibasa/3p-Energia",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-3p-energia.png",
  },
  {
    title: "SPACE TURISM",
    site: "",
    github: "https://github.com/Gibasa/space-turism-website",
    screenshot: "https://gibasa.github.io/portfolio/images/COMING-SOON.png",
  },
  {
    title: "App Financeiro",
    site: "https://replit.com/@GilbertoSa/App-Financeiro",
    github: "https://github.com/Gibasa/app_financeiro",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-app-financeiro.png",
  }
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
            <div className="item-overlay">
            </div>
            <div className="item-title-btn">
              <h3> {item.title} </h3>
              <div className="item-btn">
                <a
                  className="btn"
                  href={item.site}
                  target="_blank"
                  rel="noreferrer"
                >
                  VER SITE
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
