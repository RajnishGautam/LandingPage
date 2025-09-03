import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year}{" "}
        <a href="https://punto7x.com" className="footer-link">
          Punto 7x
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
