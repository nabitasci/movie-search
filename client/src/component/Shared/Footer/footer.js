import React from "react";

import "./footer.scss";

const Footer = () => (
  <footer className="Footer">
    <nav className="Footer-menu">
      <a
        href="https://github.com/nabitasci"
        className="Footer-menu__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        @github
      </a>

      <a
        href="https://www.linkedin.com/in/ömer-nabi-taşçı-a3735777"
        className="Footer-menu__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        @linkedin
      </a>
    </nav>
  </footer>
);

export default Footer;
