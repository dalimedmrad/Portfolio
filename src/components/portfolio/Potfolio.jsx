import "react-medium-image-zoom/dist/styles.css";
import "./portfolio.scss";
import { reactPortfolio } from "../../data";
import Carousel from "react-bootstrap/Carousel";

export default function Potfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Projects</h1>
      <div className="containera">
        {reactPortfolio.map((d) => (
          <div className="item">
            <Carousel>
              {d.img.map((el) => (
                <Carousel.Item>
                  <img src={process.env.PUBLIC_URL + el.path} />
                </Carousel.Item>
              ))}
            </Carousel>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
