import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Potfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

import About from "./components/apropos/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
