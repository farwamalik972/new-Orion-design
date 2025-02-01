import React, { useEffect, useState } from 'react';
import CustomNav from '../components/CustomNav'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from '../components/Footer';
import config from "../config.js";
import axios from 'axios';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post(`${config.API_BASE_URL}/api/contact`, formData)
      .then(response => {
        console.log('Form Submitted Successfully', response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error submitting form', error);
      });
  };
  return (
    <div className='contact-page-wrapper'>
     <CustomNav/>
     <Container className="contact-us my-5">
      <div className="text-center mb-4">
        <h1>We’re here to help you grow</h1>
        <p>
          Feel free to reach out to us through your preferred method of contact. We are eager to connect with you and
          explore how our team can contribute to your success.
        </p>
      </div>
      <Row>
        <Col md={6}>
          <div className="map-container mb-4 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54419.76895033236!2d74.2331!3d31.4036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901392b1c81eb%3A0x7f4cbb6a6c5b2cfd!2sLAL%20BADSHAH%20ROAD%2C%20Multan%20Rd%2C%20Khanpur%2C%20Lahore%2C%20Punjab%2053710!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          </div>
          <Row>
            <Col md={6}>
              <p className="number-text">Phone number:</p>
              <h5 className="number-mail">042 37510711</h5>
            </Col>
            <Col md={6}>
              <p className="number-text">Email address:</p>
              <h5 className="number-mail">info@qhlightingpakistan.com</h5>
            </Col>
          </Row>
          <div className="address-section mt-5">
            <div className="main-icon-wrapper">
              <a
                href="https://www.google.com/maps/place/Shunde+Lighting+Industrial+Zone,+Shunde+District,+Foshan,+Guangdong,+China"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Map Location" >
                <div className="icon-wrapper">
                  <img
                    src="https://img.icons8.com/color/48/google-maps-new.png"
                    alt="Google Maps Icon"/>
                </div>
              </a>
              <h3 className="address">
                LAL BADSHAH ROAD, Multan Rd,
                <br />
                Khanpur, Lahore, Punjab 53710
              </h3>
            </div>
          </div>
          <div className="address-section mt-5">
            <div className="main-icon-wrapper">
              <a
                href="https://www.google.com/maps/place/Shunde+Lighting+Industrial+Zone,+Shunde+District,+Foshan,+Guangdong,+China"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Map Location">
                <div className="icon-wrapper">
                  <img
                    src="https://img.icons8.com/color/48/google-maps-new.png"
                    alt="Google Maps Icon"
                  />
                </div>
              </a>
              <h3 className="address">
              No. 9, Shunde Lighting Industrial Zone, Shunde District, Foshan, Guangdong, China
              </h3>
            </div>
          </div>
        </Col>
        <Col md={6}>
        <div className="form-container p-4">
              <h3 className="mb-3">Let’s get started with your project</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="tel" 
                    placeholder="Phone number" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="What can we help you with?" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                <Button type="submit" className="w-100 btn-dark">
                  GET IN TOUCH
                </Button>
              </Form>
            </div>
        </Col>
      </Row>
    </Container>
<Footer/>
    </div>
    
  )
}

export default Contact