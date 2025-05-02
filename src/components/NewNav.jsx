
import React, { useEffect, useState } from "react";
import logo from "../images/ORION.png";
import bulb1 from "../images/2.webp";
import bulb2 from "../images/3.webp";
import bulb3 from "../images/6.webp";
import bulb4 from "../images/5.webp";
import downlight from "../images/2.webp";
import spotlight from "../images/3.webp";
import floodlight from "../images/6.webp";
import ceilinglight from "../images/2.webp";
import { FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav, Form, FormControl, Offcanvas, Button, Container, Row, Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import config from "../config.js";
import axios from "axios";
import "../NewNav.scss";
import { useLocation } from 'react-router-dom';

const NewNav = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const categories = {
    consumer: {
      title: "Consumer",
      defaultImage: bulb1, // Default image on hover
      products: {
        "LED Bulbs": bulb1,
        "LED Downlights": bulb2,
        "LED Slim Panel Lights": bulb3,
        "LED Adjustable Panel Lights": bulb4,
        "LED Surface Panel" : bulb1,
        "LED COB" : bulb1,
        "LED Batten Light" : bulb1,
        "LED Tube Light" : bulb1,
      },
    },
    professional: {
      title: "Professional",
      defaultImage: downlight,
      products: {
        Downlights: downlight,
        Spotlights: spotlight,
        Floodlights: floodlight,
        CeilingLights: ceilinglight,
      },
    },
    smart: {
      title: "Smart Lighting",
      defaultImage: spotlight,
      products: {
        // "Smart Bulbs": bulb1,
        // "WiFi LED": bulb2,
        // "Smart Strips": bulb3,
        // "Remote LEDs": bulb4,
      },
    },
    pcb: {
      title: "PCB",
      defaultImage: floodlight,
      products: {
        // "LED PCB": downlight,
        // "Driver PCB": spotlight,
        // "Custom PCB": floodlight,
        // "High Power PCB": ceilinglight,
      },
    },
  };

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


    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [scrolled, setScrolled] = useState(false);
  
  
    useEffect(() => {
      const handleScroll = () => {
        if (isHomePage) {
          setScrolled(window.scrollY > 50);
        }
      };
  
      if (isHomePage) {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }, [isHomePage]);
  
    const navbarClass = isHomePage
      ? scrolled
        ? 'scrolled'
        : 'transparent'
      : 'scrolled';
  
  

  return (
    <div className={`new-nav-wrapper ${isHomePage ? '' : 'other-pages'}`}>
      <Navbar expand="lg"
     className={`custom-navbar ${navbarClass}`} fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="QHlighting" className="logo mt-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

              {/* Products Dropdown */}
              <div className="nav-item-dropdown">
                <Nav.Link href="/product" className="dropdown-toggle">
                  Products
                </Nav.Link>
                <div className="dropdown-menu-custom">
                  {Object.entries(categories).map(([key, section], index) => (
                    <div
                      key={key}
                      className="dropdown-section"
                      onMouseEnter={() => {
                        setHoveredCategory(key);
                        setHoveredImage(section.defaultImage);
                      }}
                      onMouseLeave={() => {
                        setHoveredCategory(null);
                        setHoveredImage(null);
                      }}
                    >
                      {/* Image container with no space by default */}
                      <div className="dropdown-image">
                        {hoveredCategory === key && hoveredImage && (
                          <img src={hoveredImage} alt={section.title} />
                        )}
                      </div>

                      {/* Title with hover effect */}
                      <h4
                        onMouseEnter={() => setHoveredImage(section.defaultImage)}
                      >
                        {section.title}
                      </h4>

                      <div className="category-content">
                        <ul>
                          {Object.entries(section.products).map(
                            ([name, image]) => (
                              <li
                                key={name}
                                onMouseEnter={() => setHoveredImage(image)}
                              >
                                {name}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Dotted line for all categories except the last one */}
                      {index !== Object.keys(categories).length - 1 && (
                        <div className="divider"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* <Nav.Link href="/new">What's New</Nav.Link> */}
              <Nav.Link href="/project">Projects</Nav.Link>
              <Nav.Link href="/support">Support</Nav.Link>
              <Nav.Link href="/newcontact">Contact Us</Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex search-bar">
              <FormControl
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
              />
            </Form>

            {/* Cart */}
               <Nav.Link className="cart-icon" onClick={handleShow}>
                        <FaShoppingCart />
                        <span className="cart-badge">{orderCount}</span>
                      </Nav.Link>
          </Navbar.Collapse>
        </Container>
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
                <Button className="w-100 bg-dark" style={{ border: 'none', backgroundImage: 'linear-gradient(to top, #525353, #373838, #111b21)' }}>
                  <a href="/shopping-cart" variant="dark" className="shopping-btn" onClick={handleClose} style={{ color: "white", textDecoration: "none", border: "none" }}>
                    View Shopping
                  </a>
                </Button>
                <Button className="w-100 bg-dark mt-3" style={{ border: 'none' ,backgroundImage: 'linear-gradient(to top, #525353, #373838, #111b21)' }}>
                  <a href="/checkoutpage" variant="dark" className="shopping-btn" style={{ color: "white", textDecoration: "none", border: "none" }}>
                    Checkout
                  </a>
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
    </div>
  );
};

export default NewNav;
