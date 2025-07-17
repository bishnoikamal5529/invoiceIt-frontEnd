// Purpose: display-only explanation of the Customer & User Management pages
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const UserInfoPage = () => (
  <Container className="p-0">
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-danger text-white">
            <h3 className="mb-0">About the User Management Page</h3>
          </Card.Header>

          <Card.Body className="bg-danger-subtle">
            <p className="mb-4">
              <i className="bi bi-shield-lock me-1" />
              <strong>Admin & Manager only.</strong> This restricted area lets
              you control every user account in the system.
            </p>

            <h5 className="text-danger">What you can see & do</h5>

            <ListGroup variant="flush" className="text-start shadow-lg rounded-4">
              <ListGroup.Item className="bg-danger-subtle">
                <Badge bg="danger" className="me-2">1</Badge>
                <strong>Full User Directory:</strong> Searchable table of all
                users with roles (Admin, Manager, Staff) and last login.
              </ListGroup.Item>

              <ListGroup.Item className="bg-danger-subtle">
                <Badge bg="danger" className="me-2">2</Badge>
                <strong>Role & Access Management:</strong> Promote or demote
                users, reset passwords, or deactivate accounts in real time.
              </ListGroup.Item>

              <ListGroup.Item className="bg-danger-subtle">
                <Badge bg="danger" className="me-2">3</Badge>
                <strong>Audit Trail:</strong> Every permission change is
                timestamped and logged for security compliance.
              </ListGroup.Item>
            </ListGroup>

            <hr className="my-4" />
            <a href="/user" className="btn btn-dark px-4">Visit User Management</a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default UserInfoPage;