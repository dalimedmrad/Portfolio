import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Alaa Houidheg",
      title: "Fullstack Js Developer",
      img: "assets/ALA.jpg",
      icon: "assets/twitter.png",
      desc: "Dali is a good worker, always looking for improvoment and i appreciate her welling to learn more.",
    },
    {
      id: 2,
      name: "Haykel Chouchane",
      title: "Instructor at Esprit university",
      img: "assets/fatma.jpg",
      icon: "assets/youtube.png",
      desc: "I really like her motivation and her welling to learn more which is the secret for success ",
      featured: true,
    },
    {
      id: 3,
      name: "Houcem Trabelsi",
      title: "Fullstack JS Instructor",
      img: "assets/HOUSSEM.png",
      icon: "assets/linkedin.png",
      desc: "Good student, independent and smart.Her ability to learn and determination will lead her to be the best version of herself",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
