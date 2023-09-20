import "./Projects.css";

const data = [
  {
    title: "HOTEL RECANTO DOS CÓDIGOS",
    site: "https://hotelrecantodoscodigos.com.br/",
    github: "https://github.com/hotelrecantodoscodigos",
    screenshot: "/images/screenshot-hotel-tex.png",
  },
  {
    title: "3P ENERGIA",
    site: "https://3penergia.com.br/",
    github: "https://github.com/3penergia",
    screenshot: "/images/screenshot-3p-energia.png",
  },
  {
    title: "SPACE TURISM",
    site: "https://spacetourism.com.br/",
    github: "https://github.com/spacetourism",
    screenshot: "/images/COMING-SOON.png",
  },
  {
    title: "KEEPER APP",
    site: "https://keeperapp.com.br/",
    github: "https://github.com/keeperapp",
    screenshot: "/images/screenshot-keeper.png",
  },
  {
    title: "KEEPER APP",
    site: "https://keeperapp.com.br/",
    github: "https://github.com/keeperapp",
    screenshot: "/images/screenshot-keeper.png",
  },
  {
    title: "KEEPER APP",
    site: "https://keeperapp.com.br/",
    github: "https://github.com/keeperapp",
    screenshot: "/images/screenshot-keeper.png",
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
            <div className="item-overlay">
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
