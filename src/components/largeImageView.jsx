// ./components/largeImageView.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LargeImageView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const largeImage = queryParams.get("image");

  const handleClick = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div
      className="large-image-view"
      onClick={handleClick}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `rgba(0, 0, 0, 0.8) url(${largeImage}) no-repeat center center`,
        backgroundSize: 'contain',
        cursor: 'pointer'
      }}
    >
      {/* Optionally, you can add a close button here */}
    </div>
  );
};

export default LargeImageView;
