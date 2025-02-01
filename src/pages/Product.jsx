import React from 'react'
import { Carousel } from 'react-bootstrap';
import CustomNav from '../components/CustomNav';
import Footer from '../components/Footer';


function Product() {
    return (
        <>
            <div className="product-wrapper-page">
                <CustomNav />
                <Carousel fade controls={true} indicators={true} interval={3000} pause={false}>
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
                </Carousel>
                <Footer />
            </div>

        </>
    )
}

export default Product