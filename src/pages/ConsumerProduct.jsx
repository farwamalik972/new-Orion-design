import React from 'react'

import { Container, Button } from 'react-bootstrap';
import ConsumerCards from '../components/ConsumerCards';
import Footer from '../components/Footer';
import CustomNav from '../components/CustomNav';
import NewNav from '../components/NewNav';

function ConsumerProduct() {
  return (
  <div className='consumer-banner-wrapper'>
<NewNav/>
      <div className="banner">
      <div className="overlay"></div>
      <div className="dots"></div>
       <Container className="content">
        <h1>Consumer</h1>
        <Button className="view-products" variant="primary">
          View Products
        </Button>
      </Container>
    </div>
    <ConsumerCards/>
    <Footer/>
   </div>
  )
}

export default ConsumerProduct