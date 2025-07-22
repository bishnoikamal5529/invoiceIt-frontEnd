import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const MaintenancePage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col className="text-center">
          <Alert variant="warning">
            <h2 className="mb-3">🚧 Under Maintenance</h2>
            <p>
              We're currently performing scheduled maintenance. <br />
              The Page will be back online shortly.
              You can visit other pages.
            </p>
            <p className="text-muted">
              Thank you for your patience and understanding.
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default MaintenancePage;
