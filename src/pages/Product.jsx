// import React from 'react'
// import { Carousel } from 'react-bootstrap';
// import CustomNav from '../components/CustomNav';
// import Footer from '../components/Footer';
// import { Card, Row, Col } from "react-bootstrap";
// import NewNav from '../components/NewNav';


// function Product() {
   
//     return (
//         <>
//             <div className="product-wrapper-page">
// <NewNav/>
//        <div className="container mt-5 mb-5">
//       <Row>
//         <Col md={6} className="mb-4 p-5">
//           <Card className="mdc-card bottom-card mdc-elevation--z4">
//             <div className="first-half">
//               <div className="mdc-card__primary-action media-image top-card mdc-elevation--z8">
//                 <div className="mdc-card__media mdc-card__media--square">
//                   <div className="mdc-card__media-content"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="last-half">
//               <div className="card-info">
//                 <a href="/consumer-product" style={{textDecoration:"none"}}>
//                   <h2>Consumer</h2>
//                 </a>
//               </div>
//             </div>
//           </Card>
//         </Col>
//         <Col md={6} className="mb-4 p-5">
//           <Card className="mdc-card bottom-card mdc-elevation--z4">
//             <div className="first-half">
//               <div className="mdc-card__primary-action media-image top-card-1 mdc-elevation--z8">
//                 <div className="mdc-card__media mdc-card__media--square">
//                   <div className="mdc-card__media-content"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="last-half">
//               <div className="card-info">
//                 <a href="./perfessional-product" style={{textDecoration:"none"}}>
//                   <h2>Professional</h2>
//                 </a>
//               </div>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//                 <Footer />
//             </div>

//         </>
//     )
// }

// export default Product


import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewNav from '../components/NewNav';
import consumer from "../images/consumer.webp"
import professional from "../images/professional.webp"
import Footer from '../components/Footer';
import pcb from "../images/pcb.webp";
import smartlght from "../images/smartlight.webp"
import ImageSliderTabs from '../components/ImageSliderTabs';
import BentoGrid from '../components/BentoGrid';


const Product = () => {
  return (
    <div className="pro-wrapper">
      <NewNav/>

    <div className="experience-header">
  <Row className="section-boxes">
    {/* Card 1 */}
    <Col xs={12} sm={6} md={3} className="section-boxes-wrap">
      <a href="/consumer-product">
        <div className="section-title">
          <div className="section-projects-overflow">
            <Card className="section-box">
              <div className="swiper-zoom-container">
                <img src={consumer} alt="Project 1" />
              </div>
            </Card>
          </div>
          <div className="project-type">
            <h2>Consumer</h2>
          </div>
        </div>
      </a>
    </Col>

    {/* Card 2 */}
    <Col xs={12} sm={6} md={3} className="section-boxes-wrap">
      <a href="/perfessional-product">
        <div className="section-title">
          <div className="section-projects-overflow">
            <Card className="section-box">
              <div className="swiper-zoom-container">
                <img src={professional} alt="Project 2" />
              </div>
            </Card>
          </div>
          <div className="project-type">
            <h2>Professional</h2>
          </div>
        </div>
      </a>
    </Col>

    {/* Card 3 */}
    <Col xs={12} sm={6} md={3} className="section-boxes-wrap">
      <a href="/new">
        <div className="section-title">
          <div className="section-projects-overflow">
            <Card className="section-box">
              <div className="swiper-zoom-container">
                <img src={smartlght} alt="Project 3" />
              </div>
            </Card>
          </div>
          <div className="project-type">
            <h2>PCB</h2>
          </div>
        </div>
      </a>
    </Col>

    {/* Card 4 */}
    <Col xs={12} sm={6} md={3} className="section-boxes-wrap">
      <a href="">
        <div className="section-title">
          <div className="section-projects-overflow">
            <Card className="section-box">
              <div className="swiper-zoom-container">
                <img src={pcb} alt="Project 4" />
              </div>
            </Card>
          </div>
          <div className="project-type">
            <h2>Smart Lighting</h2>
          </div>
        </div>
      </a>
    </Col>
  </Row>
</div>

    <BentoGrid/>
    <ImageSliderTabs/>
    <Footer/>
    </div>
  );
};

export default Product;


