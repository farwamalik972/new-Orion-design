import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import led from "../images/street-light.jpg";
import downlight from "../images/tsereis1.jpg";
import slim from "../images/high-bay.jpg";
import adjustable from "../images/panel-light.jpg";
import surface from "../images/tseriess-light.jpg";
import cob from "../images/spot-light.jpg";
import batten from "../images/tube-light.jpg";
import stadium from "../images/stadium-light.jpg";
import street from "../images/solr.jpeg";
import smart from "../images/slim-panel.jpg";
import config from "../config.js";
import axios from "axios";

function PerfessionalCards() {
  // Define the state for professional products
  const [professionalProducts, setProfessionalProducts] = useState([]);

  // Fetch professional products from the API
  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/getprofessional`)
      .then((response) => {
        const productsPro = Array.isArray(response.data) ? response.data : [];
        setProfessionalProducts(productsPro);
        console.log("Professional products:", productsPro);
      })
      .catch((error) => {
        console.error("Error fetching professional products:", error);
        setProfessionalProducts([]);
      });
  }, []);

  // Define the static product array
  const products = [
    { img: led, title: "LED Street Lights" },
    { img: downlight, title: "LED Flood Lights" },
    { img: slim, title: "LED Highbay Lights" },
    { img: adjustable, title: "LED Panel Lights" },
    { img: surface, title: "LED T Series Bulbs" },
    { img: cob, title: "LED Spot Lights" },
    { img: batten, title: "LED Tube Lights" },
    { img: stadium, title: "LED Stadium Lights" },
    { img: street, title: "LED Solar Street Lights" },
    { img: smart, title: "LED Smart Lighting" },
  ];

  return (
    <div className="consumer-cards-wrapper">
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

                  {/* Map over professional products to find a match */}
                  {professionalProducts
                    .filter(
                      (professionalProduct) =>
                        professionalProduct.category_name === product.title
                    )
                    .map((professionalProduct) => (
                      <Button
                        as="a"
                        href={`/ProductList/${professionalProduct.id}`}
                        className="custom-card-button"
                        key={professionalProduct.id}
                      >
                        Shop Now
                      </Button>
                    ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PerfessionalCards;
