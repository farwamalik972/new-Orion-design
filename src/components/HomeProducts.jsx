import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import consumerimg from "../images/tube-ligh1.jpg"
import consumer2 from "../images/led-bulb1.jpg"
import consumer3 from "../images/down3.jpg"
import consumer4 from "../images/downlight.jpg"
import consumer5 from "../images/21.jpg"
import perfessional from "../images/panel-light.jpg"
import perfessional1 from "../images/flood2.jpg"
import perfessional2 from "../images/solar-street.jpg"
import perfessional4 from "../images/spot-light.jpg"
import perfessional5 from "../images/flood.jpg"

function HomeProducts() {
    const consumerImages = [
        consumerimg, // Replace with your image paths
        consumer2,
        consumer3,
        consumer4,
        consumer5,
      ];
    
      const professionalImages = [
        perfessional, // Replace with your image paths
        perfessional1,
        perfessional2,
        perfessional4,
        perfessional5,
      ];
    
      const [consumerIndex, setConsumerIndex] = useState(0);
      const [professionalIndex, setProfessionalIndex] = useState(0);
    
      const handleNext = (setIndex, images) => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handleBack = (setIndex, images) => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      return (
        <Container className="carousel-component py-4">
          <Row className="mb-5">
            <Col md={6} className="text-center">
              <img
                src={consumerImages[consumerIndex]}
                alt="Consumer"
                className="carousel-image rounded"
              />
              <div className="d-flex gap-3 mt-3">
                <Button
                  className="discover-btn"
                  onClick={() => handleBack(setConsumerIndex, consumerImages)}
                >
                  Back
                </Button>
                <Button
                  className="discover-btn"
                  onClick={() => handleNext(setConsumerIndex, consumerImages)}
                >
                  Next
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <Card className="border-0 mobile-view">
                <Card.Body>
                  <Card.Title className='heading'>Consumer</Card.Title>
                  <Card.Text className='text'>
                    Explore QH's wide range of high-quality consumer lights, from LED bulbs to all kinds of consumer lights and find the perfect lighting for your space. Visit now to brighten your world and make your purchase today!
                  </Card.Text>
                  <Button  className="discover-btn">
                    <a className="product-link" href="/consumer-product">Discover Now</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
    
          <Row>
          <Col md={6}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title className='heading'>Professional</Card.Title>
                  <Card.Text className='text'>
                    Discover QH's premium professional lighting solutions, from energy-efficient LEDs. Explore now to light up your spaces with quality and elegance!
                  </Card.Text>
                  <Button  className="discover-btn">
                    <a className="product-link" href="/perfessional-product">Discover Now</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={professionalImages[professionalIndex]}
                alt="Professional"
                className="carousel-image rounded"
              />
              <div className="d-flex gap-3 mt-3">
                <Button
                  className="discover-btn"
                  onClick={() => handleBack(setProfessionalIndex, professionalImages)}
                >
                  Back
                </Button>
                <Button
                  className="discover-btn"
                  onClick={() => handleNext(setProfessionalIndex, professionalImages)}
                >
                  Next
                </Button>
              </div>
            </Col>
          
          </Row>
        </Container>
  )
}

export default HomeProducts