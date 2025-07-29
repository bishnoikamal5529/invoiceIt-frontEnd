// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-auto">
    <Container>
      <Row className="g-3">
        <Col md={3}>
          <h6 className="fw-bold mb-2">Company</h6>
          <ul className="list-unstyled small">
            <li><a className="text-light text-decoration-none">About Us</a></li>
            <li><a className="text-light text-decoration-none">Careers</a></li>
            <li><a className="text-light text-decoration-none">Contact</a></li>
          </ul>
        </Col>

        <Col md={3}>
          <h6 className="fw-bold mb-2">Products</h6>
          <ul className="list-unstyled small">
            <li><a className="text-light text-decoration-none">All Products</a></li>
            <li><a className="text-light text-decoration-none">Categories</a></li>
            <li><a className="text-light text-decoration-none">Suppliers</a></li>
          </ul>
        </Col>

        <Col md={3}>
          <h6 className="fw-bold mb-2">Support</h6>
          <ul className="list-unstyled small">
            <li><a className="text-light text-decoration-none">Help Center</a></li>
            <li><a className="text-light text-decoration-none">Shipping Info</a></li>
            <li><a className="text-light text-decoration-none">Returns</a></li>
          </ul>
        </Col>

        <Col md={3}>
          <h6 className="fw-bold mb-2">Legal</h6>
          <ul className="list-unstyled small">
            <li><a className="text-light text-decoration-none">Privacy Policy</a></li>
            <li><a className="text-light text-decoration-none">Terms of Service</a></li>
            <li><a className="text-light text-decoration-none">Cookie Policy</a></li>
          </ul>
        </Col>
      </Row>

      <hr className="my-3 border-secondary" />

      <Row>
        <Col className="text-center small">
          &copy; {new Date().getFullYear()} InvoiceIt Inc. All rights reserved.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;