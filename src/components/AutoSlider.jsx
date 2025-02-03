import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slide1 from "../images/led2.jpg"
import slide2 from "../images/downlight.jpg"
import slide3 from "../images/panel-light.jpg"
import slide4 from "../images/adju.jpeg"
import slide5 from "../images/8.jpg"
import slide6 from "../images/cob.jpeg"
import slide7 from "../images/batn.jpeg"
import slide8 from "../images/newtube.jpeg"


const AutoSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let animationFrame;

        const smoothScroll = () => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: 1, behavior: "smooth" });
            }
            animationFrame = requestAnimationFrame(smoothScroll);
        };

        const startAutoPlay = () => {
            animationFrame = requestAnimationFrame(smoothScroll);
        };

        const stopAutoPlay = () => {
            cancelAnimationFrame(animationFrame);
        };

        startAutoPlay();

        slider.addEventListener("mouseenter", stopAutoPlay);
        slider.addEventListener("mouseleave", startAutoPlay);

        return () => {
            slider.removeEventListener("mouseenter", stopAutoPlay);
            slider.removeEventListener("mouseleave", startAutoPlay);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide1,
        slide2,
        
    ];

    return (
        <div className="auto-slider-wrapper">
            <div className="slider-container">
                <button
                    className="nav-btn left"
                    onClick={() => sliderRef.current.scrollBy({ left: -260, behavior: "smooth" })}
                >
                    <FaChevronLeft />
                </button>
                <div className="slider" ref={sliderRef}>
                    <div className="slide-track">
                        {slides.map((slide, index) => (
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
