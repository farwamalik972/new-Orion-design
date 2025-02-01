import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CustomNav from '../components/CustomNav';
import Footer from '../components/Footer';

function NewContact() {
  return (
    <div className="new-contact-page">
        <CustomNav/>
    <section className="contact-page-sec">
    <Container>
      <Row>
        <Col md={4} className="mb-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marked"></i>
              </div>
              <div className="contact-info-text">
                <h2>address</h2>
                <span>ORION LIGHTING PRIVATE LIMITED,</span>
                <span>Pakistan, LAHORE</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <h2>E-mail</h2>
                <span>Orionlightingpvtltd@gmail.com</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Thu 9:00 am - 4.00 pm</span>
                <span>Thu - Mon 10.00 pm - 5.00 pm</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <div className="contact-page-form">
            <h2>Get in Touch</h2>
            <Form action="contact-mail.php" method="post">
              <Row>
                <Col md={6}>
                  <div className="single-input-field">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="single-input-field">
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      required
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="single-input-field">
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="single-input-field">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                </Col>
                <Col md={12} className="message-input">
                  <div className="single-input-field">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write Your Message"
                      name="message"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="single-input-fieldsbtn">
                    <Button type="submit">Send Now</Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col md={4}>
          <div className="contact-page-map">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094775!2d113.22823401591385!3d23.05101231916162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34038fdc5e5d2d3d%3A0x1f730b6ae536a8ad!2sShunde%20Lighting%20Industrial%20Zone!5e0!3m2!1sen!2s!4v1615992024035!5m2!1sen!2s"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <Footer/>
    </div>

  )
}

export default NewContact