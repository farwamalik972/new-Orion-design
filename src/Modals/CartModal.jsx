import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import bulb from "../images/bulb.webp"

const CartModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Button to open the modal */}
      <Button variant="primary" className="openButton" onClick={() => setShow(true)}>
        Add to Cart
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered className='modal'>
        <Modal.Header closeButton>
          <Modal.Title className="title">This Item Has Been Added To Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='product'>
            <img src={bulb} alt="Product" className='productImage' />
            <div className='productDetails'>
              <h5>2 Piece Velvet Suit-Embroidered (Pret)</h5>
              <p>Code: A0357ST-MED-227</p>
              <p>Size: M</p>
              <p>Quantity: 1 <BsTrash className='deleteIcon' /></p>
              <p className='price'>Rs: 14,999</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='footer'>
          <Button variant="primary" onClick={() => setShow(false)}>
            Continue Shopping
          </Button>
          <div>
            <Button variant="dark" className='cartButton'>
              View Cart (2)
            </Button>
            <Button variant="dark" className='checkoutButton'>
              Checkout
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
