import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import img1 from "../images/1.webp"
import img2 from "../images/2.webp";
import img3 from "../images/3.webp"
import img4 from "../images/images (4).jpg"
import img5 from "../images/5.webp"



const imageData = {
    consumer: [
      { img: img1, title: 'LED Bulb' },
      { img: img2, title: 'Table Lamp' },
      { img: img3, title: 'Smart Fan' },
      { img: img4, title: 'Night Light' },
      { img: img5, title: 'Emergency Light' }
    ],
    professional: [
      { img: 'img-6.jpg', title: 'Industrial Light' },
      { img: 'img-7.jpg', title: 'High Bay' },
      { img: 'img-8.jpg', title: 'Panel Light' },
      { img: 'img-9.jpg', title: 'Flood Light' },
      { img: 'img-10.jpg', title: 'Track Light' }
    ],
    pcb: [
      { img: 'img-11.jpg', title: 'Circuit Board' },
      { img: 'img-12.jpg', title: 'Sensor Module' },
      { img: 'img-13.jpg', title: 'PCB Driver' },
      { img: 'img-14.jpg', title: 'LED Strip PCB' },
      { img: 'img-15.jpg', title: 'Bluetooth PCB' }
    ],
    "smart Lighting": [
      { img: 'img-1.jpg', title: 'Smart Switch' },
      { img: 'img-3.jpg', title: 'Smart Plug' },
      { img: 'img-5.jpg', title: 'Smart LED' },
      { img: 'img-7.jpg', title: 'Alexa Light' },
      { img: 'img-9.jpg', title: 'Smart Controller' }
    ]
  };
  

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow left" onClick={onClick}>
   <FaAngleLeft/>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow right" onClick={onClick}>
    <FaAngleRight/>
  </div>
);

const ImageSliderTabs = () => {
  const [activeTab, setActiveTab] = useState('consumer');

  const sliderSettings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    speed: 600,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Container className="my-5 tabs-slider-wrapper mt-5">
      <h2 className="text-center mb-5">Product Categories</h2>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-5 justify-content-center custom-tabs"
      >
        {Object.entries(imageData).map(([key, images]) => (
          <Tab eventKey={key} title={key.charAt(0).toUpperCase() + key.slice(1)} key={key}>
            <Slider {...sliderSettings}>
            {images.map((item, idx) => (
  <div key={idx} className="slider-card">
    <div className="card-inner">
      <img src={`${item.img}`} alt={item.title} />
      <h5>{item.title}</h5>
    </div>
  </div>
))}

              {/* {images.map((img, idx) => (
                <div key={idx} className="slider-card">
                  <div className="card-inner">
                    <img src={`${img}`} alt={`Slide ${idx + 1}`} />
                    <h5>{key.charAt(0).toUpperCase() + key.slice(1)} {idx + 1}</h5>
                  </div>
                </div>
              ))} */}
            </Slider>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default ImageSliderTabs;
