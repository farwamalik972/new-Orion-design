import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from "../config.js";

function BannerCards() {
  const { id } = useParams(); // URL se category ID lein
  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get(`${config.API_BASE_URL}/api/gettype/${id}`)
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, [id]); 

  return (
    <div className='consumer-cards-wrapper'>
      <Container className="my-5">
        <Row className="justify-content-center">
          {products.map((product) => (
           <Col md={3} className="mb-4" key={product.id}>
           <a href={`/product-details/${product.id}`} style={{ textDecoration: 'none' }}>
             <Card className="custom-card">
               <Card.Body>
                 <Card.Title>{product.name}</Card.Title>
               </Card.Body>
               <Card.Img
                 style={{ width: "100px", height: "210px", objectFit: "contain" }}
                 variant="top"
                 src={product.image_url} 
                 alt={product.name}
                 className="custom-card-img"
               />
             </Card>
           </a>
         </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BannerCards;
