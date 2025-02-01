import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Offcanvas, Button, Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../images/arion.webp";
import bulb from "../images/bulb.webp";
import { FaTrashAlt } from "react-icons/fa";
import config from "../config.js";
import axios from "axios";

function CustomNav() {
  const [consumerProducts, setConsumerProducts] = useState([]);
  const [professionalProducts, setProfessionalProducts] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [orderdata, setOrderdata] = useState([]);

  useEffect(() => {
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
    axios.get(`${config.API_BASE_URL}/api/getprofessional`)
      .then((response) => {
        const productsPro = Array.isArray(response.data) ? response.data : [];
        setProfessionalProducts(productsPro);
        console.log("Professional products:", productsPro);
      })
      .catch((error) => {
        console.error("Error fetching professional products:", error);
        setProfessionalProducts([]);
      });
    axios.get(`${config.API_BASE_URL}/api/getorder`)
      .then((response) => {
        setOrderCount(response.data.order_count);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
    axios.get(`${config.API_BASE_URL}/api/getorderbyid`)
      .then((response) => {
        setOrderdata(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []); 

  const deleteOrder = (id) => {
    axios
      .get(`${config.API_BASE_URL}/api/order/${id}`)
      .then((response) => {
        setOrderdata(orderdata.filter((order) => order.id !== id));
        alert("Order deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
        alert("Error deleting order");
      });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home" className="navbar-brand">
          <img src={logo} alt="QHlighting" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* Products Dropdown */}
            <div className="nav-item dropdown custom-dropdown">
              <a href="/product" className="nav-link dropdown-toggle">Products</a>
              <div className="dropdown-menu">
                {/* Consumer Dropdown */}
                <div className="dropdown-item dropdown-item-with-arrow">
                  <a href="/consumer-product" className="dropdown-item-with-arrow" style={{textDecoration:"none", color:"black" }}>Consumer</a>
                  <div className="nested-dropdown-menu">
                    {Array.isArray(consumerProducts) &&
                      consumerProducts.map((product) => (
                        <a
                          href={`/ProductList/${product.id}`}
                          className="dropdown-item"
                          key={product.id}
                        >
                          {product.category_name || "No category name"}{" "}
                          {/* Fallback if category_name is missing */}
                        </a>
                      ))}
                  </div>
                </div>

                {/* Professional Dropdown */}
                <div className="dropdown-item dropdown-item-with-arrow">
                  <a href="/perfessional-product" className="dropdown-item-with-arrow" style={{textDecoration:"none", color:"black" }}>Professional</a>
                  <div className="nested-dropdown-menu">
                    {Array.isArray(professionalProducts) &&
                      professionalProducts.map((product) => (
                        <a
                          href={`/ProductList/${product.id}`}
                          className="dropdown-item"
                          key={product.id}
                        >
                          {product.category_name || "No category name"}{" "}
                          {/* Fallback if category_name is missing */}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/newcontact">Contact</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link>
          </Nav>

          <Form className="d-flex search-bar">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav.Link className="cart-icon" onClick={handleShow}>
            <FaShoppingCart />
            <span className="cart-badge">{orderCount}</span>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Offcanvas Modal */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-modal">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="shopping-cart-page">
            <div className="cart-container">
              <Container>
                <Row>
                  {orderdata.map((order, index) => (
                    <Col md={12} className="cart-item" key={index}>
                      <img src={order.img} alt="Product" />
                      <div className="cart-details">
                        <p className="size">Order Id: {order.orderid}</p>
                        <h2 className="heading-content mt-2">{order.product_model}</h2>
                        <p className="size">Status: {order.status}</p>
                        <div className="cart-actions mb-3">
                          {/* Add actions here */}
                        </div>
                        <p className="item-total">Item Total</p>
                      </div>
                      <div className="remove-section">
                        <div className="price">Rs. {order.price}</div>
                        <div key={order.id} className="order-item">
                          <FaTrashAlt
                            className="text-center trash-icon"
                            onClick={() => deleteOrder(order.orderid)} // Use deleteOrder here
                          />
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
          <Button className="w-100 bg-dark" style={{ border: 'none' }}>
            <a href="/shopping-cart" variant="dark" className="shopping-btn" onClick={handleClose} style={{ color: "white", textDecoration: "none", border: "none" }}>
              View Shopping
            </a>
          </Button>
          <Button className="w-100 bg-dark mt-3" style={{ border: 'none' }}>
            <a href="/checkoutpage" variant="dark" className="shopping-btn" style={{ color: "white", textDecoration: "none", border: "none" }}>
              Checkout
            </a>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNav;
