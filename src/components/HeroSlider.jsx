import React from "react";
import slide1 from "../images/led2.jpg";
import slide2 from "../images/downlight.jpg";
import slide3 from "../images/panel-light.jpg";
import slide4 from "../images/adju.jpeg";
import video from "../images/pcb.MP4";

const VerticalImageSlider = () => {
  const images = [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4];

  return (
    <div className="vertical-slider-wrapper">
      <video autoPlay muted loop className="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>

      <div className="slider-container">
        <div className="slider-column">
          <div className="slider-track">
            {images.map((img, i) => (
              <div key={i} className="slider-img-box">
                <img src={img} alt={`img-${i}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="slider-column">
          <div className="slider-track reverse">
            {images.map((img, i) => (
              <div key={i} className="slider-img-box">
                <img src={img} alt={`img-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalImageSlider;
