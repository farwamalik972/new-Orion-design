import React from 'react'
import CustomNav from '../components/CustomNav'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from '../components/Footer';
import banner from "../images/banner1.webp"
import { FaSpinner } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md"; // Importing icons from react-icons/md

function About() {
  return (
    <>
    <div className='about-wrapper-page'>
<CustomNav/>
<section className="about-section">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="order-2 content-column">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About</span>
                <h2>Who Are We?</h2>
              </div>
              <p className="text">
              We are committed to illuminating lives and spaces through our exceptional lighting solutions. Our focus is on delivering quality products and outstanding services to our customers.
              </p>
              <p className="text">
              As a rapidly growing company, we remain dedicated to our core values of innovation, sustainability, and customer satisfaction. We continuously strive to enhance our offerings and exceed the expectations of our clients.
              </p>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12} className="image-column">
            <div className="inner-column">
              <figure className="image-1">
                <img
                  title="Rahul Kumar Yadav"
                  src={banner}
                  alt="Rahul Kumar Yadav"
                />
              </figure>
            </div>
          </Col>
        </Row>

       
      </Container>
    </section>

    <section id="main" class="text-center my-5">
        <h1>Our Vision & Mission</h1>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 mb-4">
                    <div class="card card1 p-5">
                        <div class="card_image d-flex justify-content-center">
                        <FaSpinner/>
                        </div>
                        <div class="card_title">
                            <h6 class="heading">Our Vision</h6>
                            <p>Our vision is to be a global leader in lighting innovation,
                               driving positive change through sustainable
                               practices and transformative technologies.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="card card3 p-5">
                        <div class="card_image d-flex justify-content-center">
                            <FaSpinner/>
                        </div>
                        <div class="card_title">
                            <h6 class="heading">Our Mission</h6>
                            <p>We are dedicated to providing innovative lighting solutions
                               that enhance the lives of our customers and contribute to a brighter future for all.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="splash mb-5">
      <div className="circle"></div>
      <Row>
        <Col xs={12} md={7} className="left-column">
          <div className="main">
            <h1>get in touch</h1>
          </div>
        </Col>
        <Col xs={12} md={5} className="right-column">
          <div className="contact-details">
            <div className="contact-item">
              <MdLocationOn className="icon" />
              <div>
                <strong>Address:</strong>
                <p>LAL BADSHAH ROAD MULTAN ROAD, KHANPUR, LAHORE</p>
              </div>
            </div>
            <div className="contact-item">
              <MdEmail className="icon" />
              <div>
                <strong>Email:</strong>
                <p>info@orionlightingpakistan.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MdPhone className="icon" />
              <div>
                <strong>Phone:</strong>
                <p>042 37510711</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

   
    </div>
       <Footer/>  
       </>
  )
}

export default About