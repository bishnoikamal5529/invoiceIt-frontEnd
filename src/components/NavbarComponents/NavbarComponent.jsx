import { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'

function NavbarComponent() {

  const [showProtectedLinks, setShowProtectedLinks] = useState(false);  

  useEffect(() => {
    let ignore = false;
    let errorString = "";
      
        if (!localStorage.authToken) {
            ignore = true;
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
            if(status != 403 && !ignore){
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
      <Navbar bg="dark" className='shadow-lg sticky-top' expand="lg" data-bs-theme="dark">
      <Container>
          <Navbar.Brand href="/">
          <span className='text-primary-emphasis'>Invoice</span>
          <span className='text-danger'>It</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mx-3'>
            <Col>
              <Row className=' link-body-emphasis'>
                <Nav.Link href="/product">Products</Nav.Link>
              </Row>
              <Row className='mt-1 link-body-emphasis'>
              <Nav.Link href="/invoice">Invoices</Nav.Link>
              </Row>
              <Row className='mt-1 link-body-emphasis'>
              <Nav.Link href="/customer">Customer</Nav.Link>
              </Row>
              <Row className='mt-1 link-body-emphasis'>
              <Nav.Link href="/supplier">Supplier</Nav.Link>
              </Row>
              {
                  showProtectedLinks && <Row className="d-flex align-items-center mt-1 link-body-emphasis">
                    <Nav.Link href="/user">Users</Nav.Link>
                  </Row>
                }
                <Row className='mt-1 link-body-emphasis'>
                <article className='mx-0 px-0 d-flex gap-1'>
                  <a href='/login' className='text-primary-emphasis link-underline-dark'>
                    Login
                  </a>|
                  <a href='/signup' className='text-danger link-underline-dark'>
                    SignUp
                  </a>
                </article>
                </Row>
                </Col>
                </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;