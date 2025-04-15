import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import consumer from "../images/consumer.webp";
import professional from "../images/professional.webp";
import pcb from "../images/homepcb.webp"

const cardData = [
  {
    title: "Consumer",
    text: "Step into a world of premium products crafted for you. Light up your life, home, and workspace with our unique and exclusive range.",
    image: consumer ,
  },
  {
    title: "Professional",
    text: "With expertise in the professional lighting sector, we’ve crafted premium products that redefine illumination enhancing spaces and enriching lives with light that truly matters.",
    image: professional,
  },
  {
    title: "PCB",
    text: "Empower your innovations with high quality, precision engineered PCBs reliable, customizable, and designed for peak performance.",
    image: pcb,
  },
];

const VerticalCards = () => {
  return (
    <div className="vertical-cards-section">
      <Container>
        {cardData.map((card, index) => (
          <Row
            key={index}
            className={`card-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <Col md={6} className="text-section">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Col>
            <Col md={6} className="image-section">
              <Image src={card.image} fluid />
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default VerticalCards;
