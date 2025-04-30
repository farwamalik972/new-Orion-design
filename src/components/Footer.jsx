import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaWhatsapp, FaWeixin } from 'react-icons/fa';
import logo from "../images/ORION.png"
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={2} className="mt-3">
            <img className="logo" src={logo} alt="" />
            <h5>Information</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Facebook</a></li>
              <li><a href="#" className="footer-link">YouTube+</a></li>
              <li><a href="#" className="footer-link">Instagram</a></li>
            </ul>
          </Col>
          <Col md={3} className="mt-5">
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
          <Col md={4} className="mt-5">
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
          <Col md={3} className="mt-5">
            <Form.Control type="email" placeholder="Enter Your Email" className="email-input" />
            <Button variant="light" className="subscribe-button">Subscribe</Button>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="">
          <Col md={12}>
          <p className="adress-text-footer">
              &copy; © 2024 Orion Lighting Pvt. All Rights Reserved | Design by Technical Force
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
