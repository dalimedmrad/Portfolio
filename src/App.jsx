import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader/Loader";
const Intro = lazy(() => import("./components/intro/Intro"));
const About = lazy(() => import("./components/apropos/About"));
const Portfolio = lazy(() => import("./components/portfolio/Potfolio"));
const Works = lazy(() => import("./components/works/Works"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Certifcs = lazy(() => import("./components/certif/Certifcs"));
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Certifcs />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
