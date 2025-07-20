// Purpose: display-only explanation of what the Product Page does
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const ProductInfoPage = () => (
  <Container className="p-0">
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-light text-dark">
            <h3 className="mb-0">About the Product Page</h3>
          </Card.Header>

          <Card.Body className='bg-light-subtle pb-5'>
            <p className="mb-4">
              This page gives you a single place to manage every product you sell
              and keep its stock in sync with your suppliers and invoices.
            </p>

            <h5 className="text-primary">What you can see & do</h5>

            <ListGroup variant="flush" className='text-start shadow-lg rounded-4'>
              <ListGroup.Item className='bg-light-subtle'>
                <Badge bg="info" className="me-2">1</Badge>
                <strong>Products:</strong> Full catalog with live on-hand quantity,
                price, and the linked supplier and perform can perform CRUD on them.
              </ListGroup.Item>

              <ListGroup.Item className='bg-light-subtle'>
                <Badge bg="info" className="me-2">2</Badge>
                <strong>Suppliers:</strong> Contact and lead-time details attached
                to each product with Reference. Hidden for staff.
              </ListGroup.Item>

              <ListGroup.Item className='bg-light-subtle'>
                <Badge bg="info" className="me-2">3</Badge>
                <strong>Stock Movement:</strong> Every time you create an invoice,
                the quantity sold is automatically deducted from the product’s
                on-hand stock and can be updated here.
              </ListGroup.Item>
            </ListGroup>

            <hr className="my-4" />

            <a 
                href="/product"
                className='btn btn-dark px-4'
            >Visit Product Page</a>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ProductInfoPage;