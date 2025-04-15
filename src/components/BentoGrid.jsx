import React from "react";
import { Container } from "react-bootstrap";

const BentoGrid = () => {
  return (
    <Container className="bento-container">
      <div className="grid-features">
        <div className="bento-card card1 cloud">
          <div className="bento-card-description">
            <h2>Energy-Efficient & Eco-Friendly</h2>
            <p>Save power without compromising brightness.</p>
          </div>
        </div>
        <div className="bento-card card2 logo">
          <div className="bento-card-description">
            <h2>Stylish & Versatile Designs</h2>
            <p>Perfect for modern and classic interiors.</p>
          </div>
        </div>
        <div className="bento-card card3 inbox">
          <div className="bento-card-description">
            <h3>Superior Quality & Durability</h3>
            <p>Built to last with premium materials.</p>
          </div>
        </div>
        <div className="bento-card card4 ai-gen">
          <div className="bento-card-description">
            <h2>Smart Lighting Options</h2>
            <p>Control your ambiance with advanced technology.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BentoGrid;
