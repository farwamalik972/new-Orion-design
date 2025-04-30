import React, { useState } from 'react'
import NewNav from '../components/NewNav'
import video from "../images/pcb.MP4";
import Footer from '../components/Footer';
import VerticalCards from '../components/VerticalCards';
import StepsSection from '../components/StepsSection';
import AutoSlider from '../components/AutoSlider';
import slide1 from "../images/led2.jpg";
import slide2 from "../images/downlight.jpg";
import slide3 from "../images/panel-light.jpg";
import slide4 from "../images/adju.jpeg";
import slide5 from "../images/8.jpg";
import slide6 from "../images/cob.jpeg";
import slide7 from "../images/batn.jpeg";

function NewHome() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide1];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='new-home-wrapper'>
      <NewNav />
      {/* <HeroSlider/> */}
      {/* <div className="container-fluid mx-auto">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="video-wrapper">
              <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
              </video>
              <div className="video-overlay"></div>
              <div className="video-text">
                <h2>At ORION Lighting</h2>
              </div>
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
          </div>
        </div>
      </div> */}
       <div className="container-fluid mx-auto">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="video-wrapper">
            <video autoPlay loop muted className="background-video">
              <source src={video} type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
            <div className="video-text">
              <h2>At ORION Lighting</h2>
            </div>
            <div
              className="slider-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="slider-column">
                <div
                  className={`slider-track ${isHovered ? 'paused' : ''}`}
                >
                  {images.map((img, i) => (
                    <div key={i} className="slider-img-box">
                      <img src={img} alt={`img-${i}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="slider-column">
                <div
                  className={`slider-track reverse ${isHovered ? 'paused' : ''}`}
                >
                  {images.map((img, i) => (
                    <div key={i} className="slider-img-box">
                      <img src={img} alt={`img-${i}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <AutoSlider />
      <VerticalCards />
      <StepsSection />
      <Footer />
    </div>
  )
}

export default NewHome