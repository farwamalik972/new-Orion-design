import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Dropdown, Form, Container, Row, Col } from "react-bootstrap";
import bulb from "../images/bulb.webp"
import Slider from '../components/Slider';
import CustomNav from '../components/CustomNav';
import Footer from '../components/Footer';
import CartModal from '../Modals/CartModal';
import { Modal } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import config from "../config.js";
import NewNav from '../components/NewNav.jsx';

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [colorTemp, setColorTemp] = useState("Select Color Temperature");
  const [capType, setCapType] = useState("Select Cap Type");
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/specificationdata/${id}`)
      .then((response) => {
        if (response.data.length > 0) {
          setProduct(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);
  const addToCart = () => {
    const cartItem = {
      product_id: id,
      quantity: quantity,
      specifications_type: colorTemp,
      cap_type: capType,
    };
    axios
      .post(`${config.API_BASE_URL}/api/add-to-cart`, cartItem)
      .then((response) => {
        console.log("Added to cart:", response.data);
        alert("Added to cart successfully");
        setShow(true);
        
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  if (!product) return <p>Loading...</p>;
    return (
        <div className='cart-page-wrapper'>
         <NewNav/>
            <Container className="product-container mb-5">
                <Row>
                    <Col md={6} className="product-image">
                    <img className="product-image" src={product.image} alt="Bulb" />
                    </Col>
                    <Col md={6} className="product-details">
                        <h2>{product.product_model}</h2>
                        <div className='varienty-wraper'>
                            <p>1 Years</p>
                            <a href="/contact" className="bulk-order">Bulk Order</a>
                        </div>
                        <h5>Price: Rs <span>{product.price}</span></h5>

                        {/* Dropdown for Color Temperature */}
                        <Dropdown className="cart-dropdown">
                            <Dropdown.Toggle variant="light" className="cart-dropdown-toggle">
                                {colorTemp}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setColorTemp("Warm White")}>Warm White</Dropdown.Item>
                                <Dropdown.Item onClick={() => setColorTemp("Cool White")}>Cool White</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        {product.category_id === 2 && (
                        <Dropdown className="cart-dropdown">
                            <Dropdown.Toggle variant="light" className="cart-dropdown-toggle">
                                {capType}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setCapType("E27")}>E27</Dropdown.Item>
                                <Dropdown.Item onClick={() => setCapType("B22")}>B22</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                        <Form.Control as="textarea" rows={2} placeholder="Description" className="description" />
                        <div className="quantity-container mt-3 mb-3">
                            <Button
                                variant="light"
                                className="quantity-btn"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </Button>
                            <span className="quantity">{quantity}</span>
                            <Button
                                variant="light"
                                className="quantity-btn"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </Button>
                        </div>
                        {/* <Button className="add-to-cart">Add to Cart</Button> */}
                        <Button variant="primary" className="openButton add-to-cart" onClick={addToCart}>
                        Add to Cart
                              </Button>
                    </Col>
                </Row>
            </Container>
            <Slider />
            <Footer />
            {/* // modal add to cart */}
        </div>
    )
}

export default Cart