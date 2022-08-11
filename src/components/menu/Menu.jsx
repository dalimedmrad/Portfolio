import "./menu.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="link" to="/works">
            Services
          </Link>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <Link className="link" to="/testimonials">
            Testimonials
          </Link>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
