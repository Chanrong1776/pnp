import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();

  const images = [
    "img/intro_bg_1.jpg",
    "img/intro_bg_2.jpg",
    "img/intro_bg_3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>SIGMA E</h1>
                <p>SIGMA E CO.,LTD </p>
                <p>
                  Tel: 061-892-8222, 095-943-7781
                  <span>E-mail: sigmae2567@gmail.com</span>
                </p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("#about");
                  }}
                >
                  ดูข้อมูลเพิ่มเติม
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
