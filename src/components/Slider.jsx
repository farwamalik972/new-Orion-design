import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import axios from "axios";
import config from "../config.js";
function Slider() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/specget`)
      .then((response) => {
        setCards(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const renderSlide = (startIndex) => (
    <Carousel.Item key={startIndex}>
      <Row className="g-4">
        {cards.slice(startIndex, startIndex + 4).map((card, index) => (
          <Col md={3} key={index}>
             <a href={`/cart/${card.id}`} style={{ textDecoration: 'none' }}>
            <Card className="shadow-sm h-100" style={{ borderRadius: "12px" }}>
              <Card.Img
                variant="top"
                src={card.img}
                className="card-img"
                style={{
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <Card.Body>
                <Card.Text className="text-center font-weight-bold">
                  {card.product_model}
                </Card.Text>
              </Card.Body>
              
            </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  );

  return (
    <div className="cart-slider-wrapper">
      <Container className="my-4">
        <Carousel
          indicators={false}
          interval={null}
          nextIcon={<ChevronRight size={32} color="black" />}
          prevIcon={<ChevronLeft size={32} color="black" />}
        >
          {renderSlide(0)}
          {renderSlide(4)}
          {renderSlide(8)}
        </Carousel>
      </Container>
    </div>
  );
}

export default Slider;