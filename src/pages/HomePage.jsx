import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

const HomePage = () => (
    <Container className="mt-5 text-center">
        <Row className="mb-4">
            <Col>
                <h1 className="display-4">InvoiceIt</h1>
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
            <Col md={4}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Track Products</Card.Title>
                        <Card.Text>
                            Keep an organized list of all your products with detailed information.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Manage Suppliers</Card.Title>
                        <Card.Text>
                            Easily manage supplier details and stay connected with them.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Generate Invoices</Card.Title>
                        <Card.Text>
                            Create professional invoices quickly and share them with your clients.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Effortless Tracking</h3>
                            <p>Track your products and suppliers with ease.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Professional Invoices</h3>
                            <p>Create and share invoices in seconds.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Stay Organized</h3>
                            <p>Keep everything in one place and stay productive.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Advanced Analytics</Card.Title>
                        <Card.Text>
                            Gain insights into your business with detailed analytics.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Customizable Templates</Card.Title>
                        <Card.Text>
                            Use customizable invoice templates to match your brand.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
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
