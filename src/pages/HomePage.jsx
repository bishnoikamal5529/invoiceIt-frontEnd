import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage = () => (
    <Container className="mt-5 text-center">
        <Row className="mb-4">
            <Col>
                <h1 className="display-4">
                    <span className='text-primary-emphasis'>Invoice</span>
                    <span className='text-danger'>It</span>
                </h1>
                <p className="lead">
                    Track products, suppliers, and invoices effortlessly. Generate invoices in seconds. Completely free!
                </p>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col>
                <div className="d-flex justify-content-center flex-wrap gap-3">
                    <Button variant="outline-primary" size="lg" href="/product">
                        Products
                    </Button>
                    <Button variant="outline-success" size="lg" href="/invoice">
                        Invoices
                    </Button>
                    <Button variant="outline-warning" size="lg" href="/supplier">
                        Suppliers
                    </Button>
                    <Button variant="outline-info" size="lg" href="/customer">
                        Customers
                    </Button>
                    <Button variant="outline-secondary" size="lg" href="/user">
                        Users
                    </Button>
                    <Button variant="outline-dark" size="lg" href="/login">
                        Login / Signup
                    </Button>
                </div>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Products</Card.Title>
                        <Card.Text>
                            Perform CRUD operations on products. Add, update, delete, and view product details effortlessly.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Invoices</Card.Title>
                        <Card.Text>
                            Manage invoices efficiently. Create, update, delete, and view invoices with ease.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Suppliers</Card.Title>
                        <Card.Text>
                            Keep track of supplier details. Add, update, delete, and view supplier information.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Customers</Card.Title>
                        <Card.Text>
                            Manage customer details effectively. Perform CRUD operations on customer data.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Users</Card.Title>
                        <Card.Text>
                            Admin and managers can manage user accounts. Add, update, delete, and view user details.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="mt-5">
                <h2 className="text-primary">Role-Based Access Control</h2>
                <p className="lead">
                    Authorities are maintained based on roles:
                </p>
                <Row>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Staff</Card.Title>
                        <Card.Text>
                        Can perform CRUD operations on products and invoices.                        
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Row>
                <Row>
                <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Manager</Card.Title>
                            <Card.Text>
                            Can perform CRUD operations on users, customers, and suppliers.                             
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Admin</Card.Title>
                            <Card.Text>
                            Has full access to all functionalities.                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
        </Row>
        <Row>
            <Col>
                <Button variant="primary" size="lg">
                    Get Started
                </Button>
            </Col>
        </Row>
    </Container>
);

export default HomePage;
