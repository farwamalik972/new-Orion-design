import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGlobe, FaUsers, FaComments } from "react-icons/fa";

const steps = [
  {
    number: '01',
    title: '35+ YEARS',
    desc: 'WORLDWIDE EXPERIENCE',
    icon: <FaGlobe className="icon-react" />,
  },
  {
    number: '',
    title: '2000+',
    desc: 'SATISFIED CUSTOMERS',
    icon: <FaUsers className="icon-react" />,
  },
  {
    number: '',
    title: '10000+ mil',
    desc: 'Products sold',
    icon: <FaComments className="icon-react" />,
  },
];


const StepsSection = () => {
    return (
      <section className="circle-steps-section">
        <Container>
          <Row className="justify-content-center">
            {steps.map((step, index) => (
              <Col md={4} key={index} className="step-col mb-5">
                <div className="circle-box">
                  <div className="circle">
                    {step.icon}
                  </div>
                  <div className="label">
                    {/* <span className="step-number">{step.number}</span> */}
                    <span className="step-title">{step.title}</span>
                  </div>
                  <p className="description">{step.desc}</p>
                  <div className="bottom-circle" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  };
  
  export default StepsSection;
  
