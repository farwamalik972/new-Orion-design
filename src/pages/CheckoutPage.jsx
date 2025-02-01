import React, { useState, useEffect } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import config from "../config.js";
import logo from "../images/arion.webp";
import { Country, City } from "country-state-city";
import Select from 'react-select';
import { getCities } from 'countries-cities'; 
import Swal from "sweetalert2";

const CheckoutPage = () => {
  const [isPayfastOpen, setIsPayfastOpen] = useState(false);
  const [isCodOpen, setIsCodOpen] = useState(false);
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]); // Define the cities state
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
    saveForNextTime: false,
    paymentMethod: "",
    billingSameAsShipping: true,
    billing: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
    },
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.API_BASE_URL}/api/save-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your order has been added successfully!",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "/"; 
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error during checkout.",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      alert("Error during checkout.");
    }
  };
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (formData.country) {
      const selectedCountry = countries.find((c) => c.name === formData.country);
      if (selectedCountry) {
        const citiesList = City.getCitiesOfCountry(selectedCountry.isoCode);
        setCities(citiesList); // Storing cities in state
      }
    }
  }, [formData.country, countries]);
  const citiesname = getCities('Pakistan'); // Get cities for Pakistan or any country

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const selectedCity = event.target.city.value;
    console.log('Selected city:', selectedCity);
  };
  useEffect(() => {
    // Simulating fetching city data, replace with real API or package logic
    const fetchedCities = ['Lahore', 'Karachi', 'Islamabad']; // Replace with dynamic data
    setCities(fetchedCities);
  }, []); // Empty dependency array to run only once
  return (
    <div className="check-out-page-wrapper">
      <div className="header">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <FaShoppingCart />
        </div>
      </div>
      <div className="row mx-auto">
        <div className="left-column col-md-12 mt-3">
          <div className="contact-wrapper">
            <h2 className="contact-text">Contact</h2>
            <Button variant="link" className="btn-link">
              Log in
            </Button>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Enter a valid email or phone number"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Check className="mb-4"
              type="checkbox"
              label="Email me with news and offers"
              name="saveForNextTime"
              checked={formData.saveForNextTime}
              onChange={handleChange}
            />

            <h2 className="contact-text">Delivery</h2>
            {/* <Form.Group className="mb-3">
              <Form.Select
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option>City</option>
                <option>Fasialabad</option>
                <option>Islamabad</option>
                <option>Karachi</option>
              </Form.Select>
            </Form.Group> */}
        <Form.Group controlId="city" onSubmit={handleFormSubmit} className="mb-3">
          <Form.Label>City</Form.Label>
          <Select 
            options={citiesname.map((city) => ({ value: city, label: city }))}
            placeholder="Select a city"
            name="city"
          />
        </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Row >
              <Col md={6} >
                <Form.Control
                 className="mb-3"
                  placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Form.Control className="mb-3"
                  placeholder="Enter last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Enter an address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Control className="mb-2"
                  placeholder="Enter postal code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  placeholder="Enter a phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Form.Check className="mb-4"
              type="checkbox"
              label="Save this information for next time"
              name="saveForNextTime"
              checked={formData.saveForNextTime}
              onChange={handleChange}
            />

            <h2 className="contact-text mb-3">Shipping Method</h2>
            <div className="shiping-div mb-4">
              <div className="shiping-text">
                <p className="home">Home Delivery</p>
                <p className="free">FREE</p>
              </div>
            </div>

            <h2 className="contact-text">Payment</h2>
            <p>All transactions are secure and encrypted.</p>

            <Form.Check
              className="mb-3"
              type="radio"
              label="PAYFAST (via Debit/Credit/Wallet/Bank Account)"
              name="paymentMethod"
              value="payfast"
              onClick={() => setIsPayfastOpen(!isPayfastOpen)}
            />
            <Collapse in={isPayfastOpen}>
              <div>
                <p>
                  After clicking “Pay now”, you will be redirected to PAYFAST
                  (Pay via Debit/Credit/Wallet/Bank Account) to complete your
                  purchase securely.
                </p>
              </div>
            </Collapse>

            <Form.Check
              className="mb-3"
              type="radio"
              label="Cash on Delivery (COD)"
              name="paymentMethod"
              value="cod"
              onClick={() => setIsCodOpen(!isCodOpen)}
            />

            <h2 className="contact-text mt-4">Billing Address</h2>
            <Form.Check
              className="mb-3"
              type="radio"
              label="Same as shipping address"
              name="billingSameAsShipping"
              checked={formData.billingSameAsShipping}
              onChange={handleChange}
            />
            <Form.Check
              className="mb-3"
              type="radio"
              label="Use a different billing address"
              onClick={() => setIsBillingOpen(!isBillingOpen)}
            />

            <Collapse in={isBillingOpen}>
              <div>
                {/* <Form.Group className="mb-3">
                  <Form.Select
                    name="billing.country"
                    value={formData.billing.country}
                    onChange={handleChange}
                  >
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </Form.Select>
                </Form.Group> */}
                   <Form.Group className="mb-3">
              <Form.Select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Control
                      placeholder="Enter first name"
                      name="billing.firstName"
                      value={formData.billing.firstName}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control className="mb-3"
                      placeholder="Enter last name"
                      name="billing.lastName"
                      value={formData.billing.lastName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Enter an address"
                    name="billing.address"
                    value={formData.billing.address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Control
                      placeholder="Enter city"
                      name="billing.city"
                      value={formData.billing.city}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      placeholder="Enter postal code"
                      name="billing.postalCode"
                      value={formData.billing.postalCode}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Phone (optional)"
                    name="billing.phoneNumber"
                    value={formData.billing.phoneNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </Collapse>

            <Button className="pay-btn mt-4" type="submit">
              Pay Now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
