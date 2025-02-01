import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import bulb from "../images/bulb.webp"; // This can be dynamically changed based on the fetched order data
import config from "../config.js";
import axios from "axios";

function ShoppingCart() {
  const [orderData, setOrderData] = useState([]);
  const handleQuantityChange = (item, operation) => {
    const newQuantity =
      operation === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    const updatedOrderData = orderData.map((order) =>
      order.id === item.orderid ? { ...order, quantity: newQuantity } : order
    );
    setOrderData(updatedOrderData);
    axios
      .put(`${config.API_BASE_URL}/api/update-order-quantity/${item.orderid}`, { quantity: newQuantity })
      .then((response) => {
        console.log("Quantity updated successfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
        alert("Error updating quantity");
      });
  };
  const deleteOrder = (id) => {
    axios
      .get(`${config.API_BASE_URL}/api/order/${id}`)
      .then((response) => {
        setOrderData(orderData.filter((order) => order.id !== id));
        alert("Order deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
        alert("Error deleting order");
      });
  };
  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/getorderbyid`)
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div className="shopping-cart-page">
      <div className="cart-container">
        <div className="cart-header">SHOPPING CART</div>
        <Container>
          <Row>
            {/* Cart Item Section */}
            {orderData.length > 0 ? (
              orderData.map((item, index) => (
                <Col md={8} className="cart-item" key={item.id}>
                  <img src={item.img} alt="Product" />
                  <div className="cart-details">
                    <h2 className="heading-content">2 Piece Velvet Suit-Embroidered (Pret)</h2>
                    <p className="model-number">{item.product_model}</p>
                    <p className="size">Status: {item.status}</p>

                    <div className="cart-actions mb-3">
                      <div className="quantity-selector">
                        <Button
                          variant="light"
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item, "decrease")}
                        >
                          -
                        </Button>
                        <span className="quantity">{item.quantity}</span>
                        <Button
                          variant="light"
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item, "increase")}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <p className="item-total">Item Total</p>
                  </div>

                  <div className="remove-section">
                    <div className="price">Rs. {item.price}</div>
                    <div className="order-item">
                      <FaTrashAlt
                        className="text-center trash-icon"
                        onClick={() => deleteOrder(item.orderid)} // Use deleteOrder here
                      />
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <p>Your shopping cart is empty.</p>
            )}
            {/* Order Summary Section */}
            {orderData.length > 0 ? (
              orderData.map((item, index) => (
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="order-note">Order Note</Form.Label>
                <Form.Control as="textarea" rows={4} className="order-notes" placeholder="" />
              </Form.Group>
              <p className="instruction">Please leave special instructions above</p>
              <div className="subtotal">
                <p className="sub">Subtotal:</p>
                <p className="total">Rs. {item.quantity * item.price}</p>
              </div>
              <p className="text-muted mb-4">Taxes and shipping calculated at checkout</p>
              <div className="cart-buttons">
                <Button className="shopping-btn">
                <a href="/" variant="dark" className="shopping-btn" style={{ color: "white", textDecoration: "none", border: "none" }}>

                    Continue Shopping
                    </a>
                    </Button>
                <Button className="shopping-btn">
                <a href="/checkoutpage" variant="dark" className="shopping-btn" style={{ color: "white", textDecoration: "none", border: "none" }}> Checkout
                    </a>
                    </Button>
              </div>
            </Col>

))
) : (
  <p>Your shopping cart is empty.</p>
)}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ShoppingCart;
