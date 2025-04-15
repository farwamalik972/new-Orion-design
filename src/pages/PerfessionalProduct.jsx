import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import CustomNav from '../components/CustomNav';
import PerfessionalCards from '../components/PerfessionalCards';
import NewNav from '../components/NewNav';

function PerfessionalProduct() {
  return (
  <div className='perfessional-banner-wrapper'>
<NewNav/>
      <div className="banner">
      <div className="overlay"></div>
      <div className="dots"></div>
       <Container className="content">
        <h1>Professional</h1>
        <Button className="view-products" variant="primary">
          View Products
        </Button>
      </Container>
    </div>
    <PerfessionalCards/>
    <Footer/>
   </div>
  )
}

export default PerfessionalProduct