import {
  Container, Nav, Navbar, Row, Col
} from 'react-bootstrap'

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
          <span className='text-primary-emphasis'>Invoice</span>
          <span className='text-danger'>It</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Row className="w-100">
                <Col className="d-flex align-items-center">
                  <Nav.Link href="/product">Products</Nav.Link>
                </Col>
                <Col className="d-flex align-items-center">
                  <Nav.Link href="/invoice">Invoices</Nav.Link>
                </Col>
                <Col className="d-flex align-items-center">
                  <Nav.Link href="/customer">Customer</Nav.Link>
                </Col>
                <Col className="d-flex align-items-center">
                  <Nav.Link href="/user">Users</Nav.Link>
                </Col>
                <Col className="d-flex align-items-center">
                  <Nav.Link href="/supplier">Supplier</Nav.Link>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <Nav.Link href="/login">Login</Nav.Link>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;