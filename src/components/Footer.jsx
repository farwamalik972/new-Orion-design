import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaWhatsapp, FaWeixin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={2}>
            <h5>Information</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Specials</a></li>
              <li><a href="#" className="footer-link">New Products</a></li>
              <li><a href="#" className="footer-link">Our Stores</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Our Products</h5>
            <ul className="footer-list">
            <li><a href="/ProductList/2" className="footer-link">LED Bulbs</a></li>
              <li><a href="/ProductList/11" className="footer-link">LED Flood Lights</a></li>
              <li><a href="/ProductList/10" className="footer-link">LED Street Lights</a></li>
              <li><a href="/ProductList/12" className="footer-link">LED High Bay Lights</a></li>
              <li><a href="/ProductList/4" className="footer-link">LED Panel Lights</a></li>
              <li><a href="/ProductList/3" className="footer-link">LED Down Lights</a></li>
              <li><a href="/ProductList/18" className="footer-link">LED Solar Street Light</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Orion Lighting</h5>
            <p className="adress-text">ORION LIGHTING PRIVATE LIMITED,</p>
            <p className="adress-text">LAL BADSHAH ROAD MULTAN ROAD, KHANPUR, LAHORE</p>
            <p className="adress-text">
              <strong>042 37510711</strong>
            </p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094775!2d113.22823401591385!3d23.05101231916162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34038fdc5e5d2d3d%3A0x1f730b6ae536a8ad!2sShunde%20Lighting%20Industrial%20Zone!5e0!3m2!1sen!2s!4v1615992024035!5m2!1sen!2s"
                width="100%"
                height="150"
                className="map"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
          <Col md={3} className="mt-2">
          {/* <h5>West Light Company</h5>
            <p className="adress-text">
              042 37510711
              </p> */}
            {/* <p className="adress-text"> info@qhlightingpakistan.com</p>
             <p className="adress-text"> LAL BADSHAH ROAD, Multan Rd, Khanpur, Lahore, Punjab 53710</p>
          
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54419.76895033236!2d74.2331!3d31.4036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901392b1c81eb%3A0x7f4cbb6a6c5b2cfd!2sLAL%20BADSHAH%20ROAD%2C%20Multan%20Rd%2C%20Khanpur%2C%20Lahore%2C%20Punjab%2053710!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="150"
                className="map"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div> */}
            <Form.Control type="email" placeholder="Enter Your Email" className="email-input" />
            <Button variant="light" className="subscribe-button">Subscribe</Button>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="">
          {/* <Col md={3}>
            <Form.Control type="email" placeholder="Enter Your Email" className="email-input" />
          </Col>
          <Col md={2}>
            <Button variant="light" className="subscribe-button">Subscribe</Button>
          </Col> */}
          <Col md={12}>
          <p className="adress-text-footer">
              &copy; © 2024 Orion Lighting Pvt. All Rights Reserved | Design by Orion Lighting Pvt
            </p>
          </Col>
          <Col md={2}>
          <a href="https://wa.me/1234567890" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
           </a>
           <a href="https://weixin.qq.com/r/EXAMPLE" className="wechat-link" target="_blank" rel="noopener noreferrer">
              <FaWeixin className="wechat-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
