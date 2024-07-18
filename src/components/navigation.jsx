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
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
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
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a 
            href="#page-top" 
            className="navbar-brand page-scroll d-flex align-items-center" 
            onClick={(e) => { e.preventDefault(); handleScrollToSection("#page-top"); }}
            style={{ display: 'flex', alignItems: 'center' }} // Add this line
          >
            <img src={SigmaIcon} alt="Sigma Logo" style={{ height: '50px', marginRight: '10px' }} />
            Sigma E CO.,LTD
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); handleScrollToSection("#features"); }} 
                className="page-scroll"
              >
                Solutions
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleScrollToSection("#about"); }} 
                className="page-scroll"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); handleScrollToSection("#services"); }} 
                className="page-scroll"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                onClick={(e) => { e.preventDefault(); handleScrollToSection("#portfolio"); }} 
                className="page-scroll"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="page-scroll"
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
