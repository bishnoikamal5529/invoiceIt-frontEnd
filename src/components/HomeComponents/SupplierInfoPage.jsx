// Purpose: display-only explanation of what the Supplier Page does
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const InvoiceInfoPage = () => (
  <Container className="p-0">
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-dark text-white">
            <h3 className="mb-0">About the Supplier Page</h3>
          </Card.Header>

          <Card.Body className='bg-dark-subtle'>
            <p className="mb-4">
                This page gives you a single place to manage every supplier, keep their
                details up-to-date, and link them to your products.
            </p>

            <h5 className="text-primary">What you can see & do</h5>

            <ListGroup variant="flush" className='text-start shadow-lg rounded-4'>
                <ListGroup.Item className='bg-dark-subtle'>
                <Badge bg="info" text="light" className="me-2">1</Badge>
                <strong>Full Supplier Directory: </strong> A searchable table
                listing every supplier with contact info, address, and linked product count.
                </ListGroup.Item>

                <ListGroup.Item className='bg-dark-subtle'>
                <Badge bg="info" text="light" className="me-2">2</Badge>
                <strong>Real-time CRUD: </strong> Add new suppliers, edit existing details,
                or archive suppliers in one click; changes instantly propagate to the product
                catalog.
                </ListGroup.Item>

                <ListGroup.Item className='bg-dark-subtle'>
                <Badge bg="info" text="light" className="me-2">3</Badge>
                <strong>Smart Validation: </strong> Before deletion the page warns if any
                products still reference the supplier, preventing accidental data loss.
                </ListGroup.Item>
            </ListGroup>

            <hr className="my-4" />

            <a href="/supplier" className='btn btn-dark px-4'>Visit Supplier Page</a>
            </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default InvoiceInfoPage;