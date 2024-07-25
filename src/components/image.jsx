
import React from "react";

export const Image = ({ title, largeImage, smallImage, onClick }) => {
  return (
    <div
      className="portfolio-item"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="hover-bg">
        <div className="hover-text">
          <h4>{title}</h4>
        </div>
        <img src={smallImage} className="img-responsive" alt={title} />
      </div>
    </div>
  );
};
