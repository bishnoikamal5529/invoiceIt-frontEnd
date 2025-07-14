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
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container>
          <Navbar.Brand href="/">
          <span className='text-primary-emphasis'>Invoice</span>
          <span className='text-danger'>It</span>
          </Navbar.Brand>
          <section className='text-white d-flex gap-4'>
                <Nav.Link href="/product">Products</Nav.Link>
                <Nav.Link href="/invoice">Invoices</Nav.Link>
                <Nav.Link href="/customer">Customer</Nav.Link>
                <Nav.Link href="/supplier">Supplier</Nav.Link>
                {
                  showProtectedLinks && <Col className="d-flex align-items-center">
                    <Nav.Link href="/user">Users</Nav.Link>
                  </Col>
                }
                <article className='d-flex gap-1'>
                  <a href='/login' className='text-primary-emphasis link-underline-dark'>
                    Login
                  </a>|
                  <a href='/signup' className='text-danger link-underline-dark'>
                    SignUp
                  </a>
                </article>
          </section>
                  
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;