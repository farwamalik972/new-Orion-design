import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cap from "../images/capactior.webp";
import ind from "../images/ind.webp";
import iter from "../images/inter.webp";
import indu from "../images/indu.webp";
import led from "../images/led-diod.webp";

const advertiserServices = [
  {
    title: "Capacitor",
    image: cap,
    purpose: "Primary light-producing components of the PCB.",
    placement: "Mounted on the PCB based on application (single-point or matrix layout).",
    points: []
  },
  {
    title: "Inductance",
    image: ind,
    purpose: "Limit current flow to ensure LEDs operate within safe limits.",
    placement: "Often placed near LEDs to control current.",
    points: []
  },
  {
    title: "Integrated Circuit",
    image: indu,
    purpose: "Smooth power supply signals and stabilize voltage.",
    placement: "Typically placed in parallel with the power supply or near LEDs.",
    points: []
  },
  {
    title: "Inductors",
    image: iter,
    purpose: "Used for current regulation and voltage conversion.",
    placement: "Commonly found in power supply circuits or complex LED drivers.",
    points: []
  },
  {
    title: "YK Connector",
    image: led,
    purpose: "Conductive paths that carry electrical signals.",
    placement:"Spread throughout the PCB to connect components.",
    points: []
  },
  {
    title: "LED Diodes",
    image: cap,
    purpose: "Control power, brightness, dimming, and temperature regulation.",
    placement: "Installed near power management sections or LED drivers.",
    points: []
  }
];

const AdvertiserServices = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec py-5">
      <Container>
        <Row>
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1 text-white">
            LED <span className="highlight">PCB</span> Components 
            </h2>
            <p className="sec-icon text-white">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </Row>

        <Row className="mt-5 justify-content-center row-cols-1 row-cols-md-3">
          {advertiserServices.map((service, index) => (
            <Col key={index} className="mb-4">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* Add your image dynamically per service */}
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>

                {/* Purpose as heading */}
                <div className="purpose-section">
                  <h4><strong>Purpose</strong></h4>
                  <p>{service.purpose}</p>
                </div>

                {/* Placement as heading */}
                <div className="placement-section">
                  <h4><strong>Placement</strong></h4>
                  <p>{service.placement}</p>
                </div>

                <ul className="service-points">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AdvertiserServices;
