import React, { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faCircle } from '@fortawesome/free-solid-svg-icons';

const cardData = [
  {
    heading: 'Purpose',
    content: [
      'LED PCBs are used to mount LEDs and distribute electrical power.',
      'They provide an organized layout for proper functionality.'
    ],
  },
  {
    heading: 'Thermal Management',
    content: [
      'LEDs generate heat, which can reduce their lifespan.',
      'LED PCBs use aluminum or copper for efficient heat dissipation.'
    ],
  },
  {
    heading: 'Materials',
    content: [
      'FR4: Used for less demanding applications.',
      'Aluminum PCBs: Ideal for high-performance LEDs.',
      'Copper PCBs: Superior thermal conductivity for high-power LEDs.'
    ],
  },
  {
    heading: 'Types of LED PCBs',
    content: [
      'Single-Sided: LEDs on one side.',
      'Double-Sided: LEDs on both sides.',
      'Flexible: Can bend for curved designs.',
      'Metal Core (MCPCBs): Enhanced heat dissipation with a metal base.'
    ],
  },
  {
    heading: 'Applications',
    content: [
      'LED bulbs, strips, and panels.',
      'Backlighting for displays.',
      'Automotive lighting.',
      'Signage and digital displays.'
    ],
  },
];

const NoteCard = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCollapse = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const renderCard = (item, index) => (
    <Card className="note-card" key={index}>
      <Card.Body>
        <div className="header d-flex justify-content-between align-items-center mb-2">
          <b>{item.heading}</b>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div
          className={`body-content ${openCardIndex === index ? 'open' : ''}`}
        >
          <ul className="styled-list">
            {item.content.map((point, idx) => (
              <li key={idx}>
                <FontAwesomeIcon icon={faCircle} className="bullet-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom text-center mt-3">
          <Button
            onClick={() => handleCollapse(index)}
            variant="outline-warning"
            block="true"
          >
            <b>{openCardIndex === index ? 'Collapse' : 'View More'}</b>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="note-card-container py-5">
      <h2 className="">What Are LED PCBs?</h2>
      <Row>
        {cardData.slice(0, 3).map((item, index) => (
          <Col key={index} sm={12} md={4} className="mb-4">
            {renderCard(item, index)}
          </Col>
        ))}
      </Row>
      <Row>
        {cardData.slice(3, 5).map((item, index) => (
          <Col key={index + 3} sm={12} md={6} className="mb-4">
            {renderCard(item, index + 3)}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NoteCard;
