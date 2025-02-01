import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Banner = ({ Image, title, description, className }) => {
  return (
    <div className='main-banner-wrapper'>
        <div className="banner">
      <div className="overlay"></div>
      <div className="dots"></div>
       <Container className="content">
        <h1>{title}</h1>
        <Button className="view-products" variant="primary">
         {description}
        </Button>
      </Container>
    </div>
    </div>
  )
}

export default Banner