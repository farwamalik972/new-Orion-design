// import React, { useRef, useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import slide1 from "../images/led2.jpg";
// import slide2 from "../images/downlight.jpg";
// import slide3 from "../images/panel-light.jpg";
// import slide4 from "../images/adju.jpeg";
// import slide5 from "../images/8.jpg";
// import slide6 from "../images/cob.jpeg";
// import slide7 from "../images/batn.jpeg";
// import slide8 from "../images/newtube.jpeg";

// const AutoSlider = () => {
//     const sliderRef = useRef(null);
//     const scrollAmount = 260; // Distance to scroll per click
//     const [isHovered, setIsHovered] = useState(false);
//     const [isMobile, setIsMobile] = useState(false);
//     const [activeIndex, setActiveIndex] = useState(null); // Track tapped card on mobile

//     const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

//     const handleLeftClick = () => {
//         if (isMobile) {
//             sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//         }
//     };

//     const handleRightClick = () => {
//         if (isMobile) {
//             sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         }
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     useEffect(() => {
//         const slider = sliderRef.current;
//         let animationFrame;

//         const smoothScroll = () => {
//             if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
//                 slider.scrollLeft = 0;
//             }

//             if (!isHovered && !isMobile) {
//                 slider.scrollLeft += 1;
//             }

//             animationFrame = requestAnimationFrame(smoothScroll);
//         };

//         smoothScroll();
//         return () => cancelAnimationFrame(animationFrame);
//     }, [isHovered, isMobile]);

//     return (
//         <div className="auto-slider-wrapper">
//             <div className="slider-container">
//                 {/* Left Button */}
//                 <button className="nav-btn left" onClick={handleLeftClick} aria-label="Previous Slide">
//                     <FaChevronLeft />
//                 </button>

//                 {/* Slider */}

//                 <div className="slider"
//                  ref={sliderRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//                     <div className="slide-track">
//                         {[...slides, ...slides].map((slide, index) => (
//                             <div
//                                 key={index}
//                                 className={`slide ${isMobile && activeIndex === index ? "active" : ""}`} // Apply active class on tap
//                                 onClick={() => isMobile && setActiveIndex(index)}
//                             >
//                                 <a href="#">
//                                     <div className="overlay"></div>
//                                     <img src={slide} alt="Product" className="blurred-image" />
//                                     <div className="card-text">
//                                         <h2>LED Bulb</h2>
//                                     </div>
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Button */}
//                 <button className="nav-btn right" onClick={handleRightClick} aria-label="Next Slide">
//                     <FaChevronRight />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AutoSlider;


import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import slide1 from "../images/led2.jpg";
import slide2 from "../images/downlight.jpg";
import slide3 from "../images/panel-light.jpg";
import slide4 from "../images/adju.jpeg";
import slide5 from "../images/8.jpg";
import slide6 from "../images/cob.jpeg";
import slide7 from "../images/batn.jpeg";

const slides = [
  {
    img:slide1,
    title: "Led Bulb",
  },
  {
    img: slide2,
    title: "Led Bulb",
  },
  {
    img: slide3,
    title: "Led Bulb",
  },
  {
    img: slide4,
    title: "Led Bulb",
  },
  {
    img: slide5,
    title: "Led Bulb",
  },
  {
    img: slide6,
    title: "Led Bulb",
  },
  {
    img: slide7,
    title: "Led Bulb",
  },
];

const AutoSlider = () => {
  return (
    <Container fluid className="mySwiperContainer">
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      navigation={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2.5,
        slideShadows: false,
      }}
      speed={600} // Faster transition (0.6 seconds)
      modules={[Autoplay, EffectCoverflow, Navigation]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.img} alt={slide.title} />
          <div className="slideTitle">
            <h2>{slide.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
  );
};

export default AutoSlider;

