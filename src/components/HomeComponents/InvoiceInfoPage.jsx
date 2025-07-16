// Purpose: display-only explanation of what the Invoice Page does
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const InvoiceInfoPage = () => (
  <Container className="py-5">
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-light text-dark">
            <h3 className="mb-0">About the Invoice Page</h3>
          </Card.Header>

          <Card.Body className='bg-light-subtle'>
            <p className="mb-4">
            This page gives you a single place to retrieve all invoices, update its status
            and keep it in sync with your products quantity. 
            </p>

            <h5 className="text-primary">What you can see & do</h5>

            <ListGroup variant="flush" className='text-start shadow-lg rounded-4'>
              <ListGroup.Item className='bg-light-subtle'>
                <Badge bg="info" className="me-2">1</Badge>
                <strong>Complete Invoice History: </strong> A searchable, paginated table lists every invoice ever created, showing status (Paid / Unpaid / Overdue), customer, items sold, and timestamps for easy auditing.
              </ListGroup.Item>

              <ListGroup.Item className='bg-light-subtle'>
                <Badge bg="info" className="me-2">2</Badge>
                <strong>Smart Invoice Creation: </strong> When you build a new invoice the page auto-verifies current stock levels, warns if any requested quantity exceeds on-hand stock, and immediately decrements the available quantity upon final save.
              </ListGroup.Item>

              <ListGroup.Item className='bg-light-subtle'>
                <Badge bg="info" className="me-2">3</Badge>
                <strong>Instant Status Updates: </strong> From the same screen you can mark any open invoice as Paid, Overdue, or revert to Unpaid; these changes are timestamped and reflected in both the invoice history and supplier/product dashboards without reloading the page.
              </ListGroup.Item>
            </ListGroup>

            <hr className="my-4" />

            <a 
                href="/invoice"
                className='btn btn-dark px-4'
            >Visit Invoice Page</a>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default InvoiceInfoPage;