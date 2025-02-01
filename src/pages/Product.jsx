import React from 'react'
import { Carousel } from 'react-bootstrap';
import CustomNav from '../components/CustomNav';
import Footer from '../components/Footer';
import { Card, Row, Col } from "react-bootstrap";


function Product() {
   
    return (
        <>
            <div className="product-wrapper-page">
                <CustomNav />

       <div className="container mt-5 mb-5">
      <Row>
        <Col md={6} className="mb-4 p-5">
          <Card className="mdc-card bottom-card mdc-elevation--z4">
            <div className="first-half">
              <div className="mdc-card__primary-action media-image top-card mdc-elevation--z8">
                <div className="mdc-card__media mdc-card__media--square">
                  <div className="mdc-card__media-content"></div>
                </div>
              </div>
            </div>
            <div className="last-half">
              <div className="card-info">
                <a href="/consumer-product" style={{textDecoration:"none"}}>
                  <h2>Consumer</h2>
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={6} className="mb-4 p-5">
          <Card className="mdc-card bottom-card mdc-elevation--z4">
            <div className="first-half">
              <div className="mdc-card__primary-action media-image top-card-1 mdc-elevation--z8">
                <div className="mdc-card__media mdc-card__media--square">
                  <div className="mdc-card__media-content"></div>
                </div>
              </div>
            </div>
            <div className="last-half">
              <div className="card-info">
                <a href="./perfessional-product" style={{textDecoration:"none"}}>
                  <h2>Professional</h2>
                </a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
                {/* <Carousel fade controls={true} indicators={true} interval={3000} pause={false}>
                    <Carousel.Item>
                        <div
                            className="fill consumer-bg"></div>
                        <Carousel.Caption>
                            <h2 className="fade-in">Consumer</h2>
                            <p className="fade-in">
                                <a href="/consumer-product" className="btn btn-transparent btn-rounded btn-large">
                                    View Products
                                </a>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                            className="fill perfessional-bg" ></div>
                        <Carousel.Caption>
                            <h2 className="fade-in">Professional</h2>
                            <p className="fade-in">
                                <a href="/perfessional-product" className="btn btn-transparent btn-rounded btn-large">
                                    View Products
                                </a>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                <Footer />
            </div>

        </>
    )
}

export default Product