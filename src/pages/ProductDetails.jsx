import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomNav from '../components/CustomNav';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import config from "../config.js";
import axios from 'axios';
import NewNav from '../components/NewNav.jsx';


function BannerCards() {
const { id } = useParams();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(`${config.API_BASE_URL}/api/specification/${id}`)
      .then(response => {
        console.log(response.data);
        setCards(response.data);
      })
      .catch(error => console.error("Error fetching cards:", error));
  }, [id]);
  return (
    <div className='consumer-cards-wrapper'>
<NewNav/>
      <Container className="my-5">
        <Row className="justify-content-center">
          {cards.map((card, index) => (
            <Col md={3} className="mb-4" key={index}>
              <Card className="custom-card">
              <a href={`/cart/${card.sid}`} style={{ textDecoration: 'none' }}>
                <Card.Body>
                  <Card.Title>{card.product_model}</Card.Title> {/* Assuming card has a title */}
                </Card.Body>
                <Card.Img
                  style={{ width: "100%", height: "210px", objectFit: "contain" }}
                  variant="top"
                  src={card.image_url}
                  className="custom-card-img"
                />
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default BannerCards;
