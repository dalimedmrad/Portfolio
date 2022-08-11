import { useState } from "react";
import "./works.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site! ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEeaxEYhfJ6VYq0HWcb6ql_pGc6HPOZGoTnifCTS0l6nqJA4Gf2PoNg__S34AME2u4_0&usqp=CAU",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Front-End",
      desc: "We create an efficient and sustainable workflow using agile methodology, programming practices to improve quality of frontend code.",
      img: "https://previews.123rf.com/images/magurok/magurok1904/magurok190400005/120627862-front-end-development-vector-illustration-web-development-coding-programming-modern-flat-design-grap.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Back-end",
      desc: "  we dive deep into your app’s business logic and synchronize all data across multiple platforms. We make sure your application is reliable, secure, covers all needs of end-users.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDIiLAyIOIzywY2g3Adl1JAPjrOu0oPdtk607T6UCr8ZPKCDp3IpAopUQ1k8DhG554qg&usqp=CAU",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <h1>Services</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
