import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWalking,
  faSnowflake,
  faTree,
  faTint,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import pro1 from "../images/pro1.jpeg"
import pro2 from "../images/pro2.jpeg"
import pro3 from "../images/pro3.jpeg"
import pro4 from "../images/pro4.jpeg"
import pro5 from "../images/pro5.jpeg"
import pro6 from "../images/pro6.jpeg"

const optionsData = [
  {
    title: "Bulb",
    subtitle: "11 Watt",
    icon: faWalking,
    background: pro1,
  },
  {
    title: "Bulb",
    subtitle: "40 Watt",
    icon: faSnowflake,
    background: pro2,
  },
  {
    title: "Bulb",
    subtitle: "20 Watt",
    icon: faTree,
    background: pro3,
  },
  {
    title: "Bulb",
    subtitle: "24 Watt",
    icon: faTint,
    background: pro4,
  },
  {
    title: "Bulb",
    subtitle: "30 Watt",
    icon: faSun,
    background: pro5,
  },
  {
    title: "Bulb",
    subtitle: "12 Watt",
    icon: faWalking,
    background: pro6,
  },
];

const OptionsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Persist the last selected option
    const savedIndex = localStorage.getItem("activeOption");
    if (savedIndex) {
      setActiveIndex(parseInt(savedIndex));
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeOption", index);
  };

  return (
    <Container fluid className="options-container">
      <Row className="justify-content-center">
        <h2>Our Products</h2>
        <Col md={12} className="options">
          {optionsData.map((option, index) => (
            <div
              key={index}
              className={`option ${index === activeIndex ? "active" : ""}`}
              style={{
                "--optionBackground": `url(${option.background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "500px",
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <FontAwesomeIcon icon={option.icon} />
                </div>
                <div className="info">
                  <div className="main">{option.title}</div>
                  <div className="sub">{option.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OptionsSlider;
