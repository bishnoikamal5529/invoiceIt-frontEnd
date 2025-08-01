// Purpose: display-only explanation of the Customer & User Management pages
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const CustomerInfoPage = () => (
  <Container className="p-0">
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        {/* Customer Section */}
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-success text-white">
            <h3 className="mb-0">About the Customer Page</h3>
          </Card.Header>

          <Card.Body className="bg-success-subtle pb-5">
            <p className="mb-4">
              This page gives you a single place to manage every customer,
              keep their details up-to-date, and track their purchase history.
            </p>

            <h5 className="text-success">What you can see & do</h5>

            <ListGroup variant="flush" className="text-start shadow-lg rounded-4">
              <ListGroup.Item className="bg-success-subtle">
                <Badge bg="success" className="me-2">1</Badge>
                <strong>Complete Customer Directory:</strong> A searchable table
                listing every customer with contact info, billing address, and
                total orders.
              </ListGroup.Item>

              <ListGroup.Item className="bg-success-subtle">
                <Badge bg="success" className="me-2">2</Badge>
                <strong>Real-time CRUD:</strong> Add new customers, edit existing
                details, or deactivate accounts instantly.
              </ListGroup.Item>

              <ListGroup.Item className="bg-success-subtle">
                <Badge bg="success" className="me-2">3</Badge>
                <strong>Purchase History:</strong> View all past invoices linked
                to each customer on the same screen.
              </ListGroup.Item>
            </ListGroup>

            <hr className="my-4" />
            <a href="/customer" className="btn btn-dark px-4">Visit Customer Page</a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default CustomerInfoPage;