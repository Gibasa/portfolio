import "./Projects.css";

const data = [
  {
    title: "BIANCA FERREIRA DESIGN",
    site: "https://www.biancaferreiradesign.com/",
    github: "https://github.com/Gibasa/bianca-ferreira-design",
    screenshot: "./images/screenshot-bianca.png",
    description: "Multilingual portfolio optimizing global reach for a design studio.",
    techs: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "STYLED COMPONENTS",
      "I18N",
      "MATERIAL UI",
    ],
  },
  {
    title: "BEELIZ MARKET GO",
    site: "https://beelizmarketgo.com.br/",
    github: "https://github.com/Gibasa/Beeliz",
    screenshot: "./images/screenshot-beeliz.png",
    description: "Multilingual portfolio optimizing global reach for a design studio.",
    techs: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "TAILWIND",
    ],
  },
  {
    title: "COPARTNERS BANK",
    site: "https://cpt-bank.onrender.com/",
    github: "https://github.com/Gibasa/cpt-bank",
    screenshot: "./images/screenshot-cpt.png",
    description: "Secure, responsive institutional platform for a fintech company.",
    techs: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "STYLED COMPONENTS",
      "MATERIAL UI",
    ],
  },

  {
    title: "3P ENERGIA",
    site: "https://3penergia.com.br/",
    github: "https://github.com/Gibasa/3p-Energia",
    screenshot: "./images/screenshot-3p-energia.png",
    description: "SEO-optimized corporate site enhancing online visibility.",
    techs: ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP"],
  },

  {
    title: "LUDMILA GARCIA",
    site: "https://ludmilagarcia.com.br/",
    github: "https://github.com/Gibasa/ludmila_garcia",
    screenshot: "./images/screenshot-ludmilagarcia.png",
    description: "Professional portfolio building authority for a legal expert.",
    techs: ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP"],
  },

  {
    title: "SPACE APP",
    site: "https://gibasa.github.io/space-turism-website/",
    github: "https://github.com/Gibasa/space-turism-website",
    screenshot: "./images/screenshot-spaceapp.png",
    description: "Interactive educational platform with complex UI animations.",
    techs: ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP", "SASS"],
  },



];

function Projects() {
  return (
    <div className="projects">
      <div className="items">
        {data.map((item, index) => (
          <div key={index} className="project-wrapper">
            <div
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

              <div className="item-overlay">
                <p className="project-description">{item.description}</p>
              </div>

              <div className="item-title-btn">
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
            <img
              src="/images/hand-tap blue.png"
              alt="tap"
              className="tap-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
