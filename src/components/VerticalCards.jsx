// import React, { useEffect } from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import consumer from "../images/consumer.webp";
// import professional from "../images/professional.webp";
// import pcb from "../images/homepcb.webp";

// const cardData = [
//   {
//     title: "Consumer",
//     text: "Step into a world of premium products crafted for you. Light up your life, home, and workspace with our unique and exclusive range.",
//     image: consumer,
//   },
//   {
//     title: "Professional",
//     text: "With expertise in the professional lighting sector, we’ve crafted premium products that redefine illumination enhancing spaces and enriching lives with light that truly matters.",
//     image: professional,
//   },
//   {
//     title: "PCB",
//     text: "Empower your innovations with high quality, precision engineered PCBs reliable, customizable, and designed for peak performance.",
//     image: pcb,
//   },
// ];

// const VerticalCards = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="vertical-cards-section py-5">
//       <Container>
//         {cardData.map((card, index) => (
//           <Row
//             key={index}
//             className={`card-row align-items-center mb-5 ${
//               index % 2 !== 0 ? "flex-row-reverse" : ""
//             }`}
//           >
//             <Col
//               md={6}
//               className="text-section"
//               data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//             >
//               <h3 className="mb-3">{card.title}</h3>
//               <p>{card.text}</p>
//             </Col>
//             <Col
//               md={6}
//               className="image-section"
//               data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
//             >
//               <Image src={card.image} fluid className="rounded shadow" />
//             </Col>
//           </Row>
//         ))}
//       </Container>
//     </div>
//   );
// };

// export default VerticalCards;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import consumer from "../images/consumer.webp";
import professional from "../images/professional.webp";
import pcb from "../images/homepcb.webp";
import smart from "../images/smartlight.webp";

const VerticalCards = () => {
  return (
    <section className="systems-section mt-5 mb-5">
      <Container fluid className="px-0">
        <Row className="g-0">
          {/* Kitchen System */}
          <Col md={3} className="text-section kitchen-system">
            <h5>Consumer</h5>
            <div className="divider"></div>
            <p>Step into a world of premium products crafted for you. Light up your life, home, and workspace with our unique and exclusive range.</p>
          </Col>
          <Col md={3} className="image-section">
            <img src={consumer} alt="Kitchen System" />
          </Col>

          {/* Wardrobe System */}
      
          <Col md={3} className="text-section wardrobe-system">
            <h5>Professional</h5>
            <div className="divider"></div>
            <p>With expertise in the professional lighting sector, we’ve crafted premium products that redefine illumination enhancing spaces and enriching lives with light that truly matters</p>
          </Col>
          <Col md={3} className="image-section">
            <img src={professional} alt="Wardrobe System" />
          </Col>

          {/* Bar System */}
          <Col md={3} className="image-section">
            <img src={pcb} alt="Bar System" />
          </Col>
          <Col md={3} className="text-section bar-system">
            <h5>PCB</h5>
            <div className="divider"></div>
            <p>Empower your innovations with high quality, precision engineered PCBs reliable, customizable, and designed for peak performance.</p>
          </Col>
      

          {/* Bathroom System */}
          <Col md={3} className="image-section">
            <img src={smart} alt="Bathroom System" />
          </Col>
          <Col md={3} className="text-section bathroom-system">
            <h5>Smart Lighting</h5>
            <div className="divider"></div>
            <p>Control your ambiance with advanced technology.</p>
          </Col>
        
        </Row>
      </Container>
    </section>
  );
};

export default VerticalCards;
