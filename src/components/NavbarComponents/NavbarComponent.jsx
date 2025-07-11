import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import getAllUsers from '../../utils/UserUtil/getAllUser';

function NavbarComponent() {

  const [showProtectedLinks, setShowProtectedLinks] = useState(false)

  useEffect(() => {
    let ignore = true;
    let errorString = "";

      console.log("running navbar effect");
      
        if (!localStorage.authToken) {
            ignore = false;
        }else{
          const fetchUsers = async () => {
            try {
                const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/user', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.authToken}`,
                    },
                });

                return response.status
            } catch (error) {
                errorString = "Error";
                ignore = true;
            }
          };
          fetchUsers().then(status => {
            if(status != 403){
              setShowProtectedLinks(true);
            }
            }
          );
         }

        return () => {
            ignore = false;
        };

      }, []);

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
                  <Nav.Link href="/supplier">Supplier</Nav.Link>
                </Col>
                {
                  showProtectedLinks && <Col className="d-flex align-items-center">
                    <Nav.Link href="/user">Users</Nav.Link>
                  </Col>
                }
                <Col className="d-flex align-items-center justify-content-end gap-2">
                  <a className='link-underline-dark text-primary-emphasis' href="/login">Login</a>
                  <a className='text-white link-underline-dark'>
                    |
                  </a>
                  <a className='link-underline-dark text-danger' href="/signup">SignUp</a>
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