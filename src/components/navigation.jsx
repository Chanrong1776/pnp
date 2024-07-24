import React from "react";
import { useNavigate } from "react-router-dom";
import SigmaIcon from "../SigmaIcon.png";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (section) => {
    navigate("/");

    setTimeout(() => {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    // Collapse the navbar after a selection is made
    const navbarToggle = document.querySelector(".navbar-toggle");
    if (navbarToggle && navbarToggle.getAttribute("aria-expanded") === "true") {
      navbarToggle.click();
    }
  };

  const handleNavLinkClick = (e, section) => {
    e.preventDefault();
    handleScrollToSection(section);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            href="#page-top"
            className="navbar-brand page-scroll d-flex align-items-center"
            onClick={(e) => handleNavLinkClick(e, "#page-top")}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={SigmaIcon}
              alt="Sigma Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
            Sigma E CO.,LTD
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavLinkClick(e, "#about")}
                className="page-scroll"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavLinkClick(e, "#services")}
                className="page-scroll"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={(e) => handleNavLinkClick(e, "#portfolio")}
                className="page-scroll"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#/contact"
                className="page-scroll"
                onClick={(e) => {
                  navigate("/contact");
                  // Collapse the navbar after a selection is made
                  const navbarToggle = document.querySelector(".navbar-toggle");
                  if (navbarToggle && navbarToggle.getAttribute("aria-expanded") === "true") {
                    navbarToggle.click();
                  }
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
