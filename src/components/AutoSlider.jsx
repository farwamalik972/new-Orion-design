import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slide1 from "../images/led2.jpg";
import slide2 from "../images/downlight.jpg";
import slide3 from "../images/panel-light.jpg";
import slide4 from "../images/adju.jpeg";
import slide5 from "../images/8.jpg";
import slide6 from "../images/cob.jpeg";
import slide7 from "../images/batn.jpeg";
import slide8 from "../images/newtube.jpeg";

const AutoSlider = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 260; // Distance to scroll per click
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track mobile view

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

  // Function to handle left button click
  const handleLeftClick = () => {
    if (isMobile) { // Only trigger scroll for mobile view
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Function to handle right button click
  const handleRightClick = () => {
    if (isMobile) { // Only trigger scroll for mobile view
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update the isMobile 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    // Check on initial load
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to continuously scroll the slides when not hovered
  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const smoothScroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0; // Loop back to the start
      }

      if (!isHovered && !isMobile) { // Only auto scroll if not hovered and not mobile
        slider.scrollLeft += 1; // Auto scroll when not hovered in desktop view
      }

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    smoothScroll(); // Start the smooth scrolling

    return () => {
      cancelAnimationFrame(animationFrame); // Cleanup
    };
  }, [isHovered, isMobile]);

  return (
    <div className="auto-slider-wrapper">
      <div className="slider-container">
        {/* Left Navigation Button */}
        <button
          className="nav-btn left"
          onClick={handleLeftClick}
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>

        {/* Slider */}
        <div
          className="slider"
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="slide-track">
            {[...slides, ...slides].map((slide, index) => (
              <div key={index} className="slide">
                <a href="#">
                  <div className="overlay"></div>
                  <img src={slide} alt="Product" className="blurred-image" />
                  <div className="card-text">
                    <h2>LED Bulb</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          className="nav-btn right"
          onClick={handleRightClick}
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AutoSlider;
