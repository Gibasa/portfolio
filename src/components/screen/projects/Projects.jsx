import "./Projects.css";

const data = [
  {
    title: "3P ENERGIA",
    site: "https://3penergia.com.br/",
    github: "https://github.com/Gibasa/3p-Energia",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-3p-energia.png",
  },
  {
    title: "LUDMILA GARCIA",
    site: "https://ludmilagarcia.com.br/",
    github: "https://github.com/Gibasa/ludmila_garcia",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-ludmilagarcia.png",
  },
  {
    title: "SPACE APP",
    site: "https://gibasa.github.io/space-turism-website/",
    github: "https://github.com/Gibasa/space-turism-website",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-spaceapp.png",
  },
  {
    title: "HOTEL RECANTO DOS CÓDIGOS",
    site: "https://gibasa.github.io/hotel-Tex/",
    github: "https://github.com/Gibasa/hotel-Tex",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-hotel-tex.png",
  },
  {
    title: "APP FINANCEIRO",
    site: "https://replit.com/@GilbertoSa/App-Financeiro",
    github: "https://github.com/Gibasa/app_financeiro",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-app-financeiro.png",
  },
  {
    title: "PASSWORD MANAGER",
    site: "https://replit.com/@GilbertoSa/Password-Manager",
    github: "https://github.com/Gibasa/Password_manager",
    screenshot: "https://gibasa.github.io/portfolio/images/screenshot-password-manager.png",
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
