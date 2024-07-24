import React, { useState } from "react";
import { Image } from "./image";

export const Gallery = (props) => {
  const [popupImage, setPopupImage] = useState(null);
  const hasImages = props.data && props.data.length >= 3;

  const handleImageClick = (largeImage) => {
    setPopupImage(largeImage);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div
      id="portfolio"
      className={`text-center ${!hasImages ? "red-screen" : ""}`}
    >
      <div className="container">
        <div className="section-title">
          <h2>ตัวอย่างผลงาน</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {hasImages ? (
              <div className="gallery-row">
                <div className="gallery-big-image">
                  <Image
                    title={props.data[0].title}
                    largeImage={props.data[0].largeImage}
                    smallImage={props.data[0].smallImage}
                    onClick={() => handleImageClick(props.data[0].largeImage)}
                  />
                </div>
                <div className="gallery-small-images">
                  <Image
                    title={props.data[1].title}
                    largeImage={props.data[1].largeImage}
                    smallImage={props.data[1].smallImage}
                    onClick={() => handleImageClick(props.data[1].largeImage)}
                  />
                  <Image
                    title={props.data[2].title}
                    largeImage={props.data[2].largeImage}
                    smallImage={props.data[2].smallImage}
                    onClick={() => handleImageClick(props.data[2].largeImage)}
                  />
                </div>
              </div>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <img src={popupImage} alt="Large view" className="popup-image" />
        </div>
      )}
    </div>
  );
};
