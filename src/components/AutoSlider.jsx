import React, { useRef, useEffect, useState } from "react";
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
    const scrollAmount = 1; // Speed of scrolling
    const [isHovered, setIsHovered] = useState(false); // State to track if mouse is hovering

    useEffect(() => {
        const slider = sliderRef.current;
        let animationFrame;

        // Function to start smooth scrolling continuously
        const smoothScroll = () => {
            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                // Reset the scroll position immediately when it reaches the end
                slider.scrollLeft = 0;
            }

            if (!isHovered) {
                slider.scrollLeft += scrollAmount; // Scroll continuously
            }

            animationFrame = requestAnimationFrame(smoothScroll); // Keep looping the scroll
        };

        // Start the auto-scrolling when the component mounts
        smoothScroll();

        // Cleanup the animation frame when the component unmounts
        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isHovered]);

    const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

    return (
        <div className="auto-slider-wrapper">
            <div className="slider-container">
                <button
                    className="nav-btn left"
                    onClick={() => sliderRef.current.scrollBy({ left: -260, behavior: "smooth" })}
                >
                    <FaChevronLeft />
                </button>
                <div
                    className="slider"
                    ref={sliderRef}
                    onMouseEnter={() => setIsHovered(true)} // Stop scrolling on hover
                    onMouseLeave={() => setIsHovered(false)} // Resume scrolling when mouse leaves
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
                <button
                    className="nav-btn right"
                    onClick={() => sliderRef.current.scrollBy({ left: 260, behavior: "smooth" })}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default AutoSlider;
