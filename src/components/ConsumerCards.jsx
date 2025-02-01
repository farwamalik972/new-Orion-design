import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import led from "../images/led-bulb1.jpg"
import downlight from "../images/down3.jpg"
import slim from "../images/slim-panel.jpg"
import adjustable from "../images/adjustable-panel.jpg"
import surface from "../images/spot-light.jpg"
import cob from "../images/flood.jpg"
import batten from "../images/batten1.jpg"
import tube from "../images/tube-light.jpg"
import config from "../config.js";
import axios from 'axios';
function ConsumerCards() {
  const [consumerProducts, setConsumerProducts] = useState([]);
  useEffect(() => {
    // Fetch consumer products
    axios.get(`${config.API_BASE_URL}/api/getconsumer`)
      .then((response) => {
        const products = Array.isArray(response.data) ? response.data : [];
        setConsumerProducts(products);
        console.log("Consumer products:", products);
      })
      .catch((error) => {
        console.error("Error fetching consumer products:", error);
        setConsumerProducts([]);
      });
  }, []);


    const products = [
        { img: led, title: "LED Bulbs" },
        { img: downlight, title: "LED Downlights" },
        { img: slim, title: "LED Slim Panel Lights" },
        { img: adjustable, title: "LED Adjustable Panel Lights" },
        { img: surface, title: "LED Surface Panel" },
        { img: cob, title: "LED COB" },
        { img: batten, title: "LED Batten Light" },
        { img: tube, title: "LED Tube Light" },
      ];
  return (
    <div className='consumer-cards-wrapper'>
    <Container className="my-5">
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col md={3} className="mb-4" key={index}>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                src={product.img}
                alt={product.title}
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {consumerProducts.map((consumerProduct) => {
                  if (consumerProduct.category_name === product.title) {
                    return (
                      <Button 
                        as="a" 
                        href={`/ProductList/${consumerProduct.id}`}
                        className="custom-card-button"
                        key={consumerProduct.id}
                      >
                        Shop Now
                      </Button>
                    );
                  }
                  return null;  
                })}      
             </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default ConsumerCards