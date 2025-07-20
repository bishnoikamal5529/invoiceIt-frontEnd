import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NavigationButtons = () => {
  return (
    <Container className="my-4">
      <h4 className="mb-4 text-center">Quick Navigation</h4>
      <p className='text-muted'>
        You can visit these pages with admin authority from here or you can use Navigation Bar on top.
      </p>
      <Row className="justify-content-center g-3">
        <Col xs={12} sm={6} md={4}>
          <a href="/product" className="btn btn-outline-primary text-dark w-100">
            Products
          </a>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <a href="/invoice" className="btn btn-outline-secondary text-dark w-100">
            Invoices
          </a>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <a href="/supplier" className="btn btn-outline-success text-dark w-100">
            Suppliers
          </a>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <a href="/user" className="btn btn-outline-warning text-dark w-100">
            Users
          </a>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <a href="/customer" className="btn btn-outline-info text-dark w-100">
            Customers
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationButtons;
