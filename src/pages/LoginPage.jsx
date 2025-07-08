import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import guestLogin from '../utils/GuestLogin';
import LoginUtil from '../utils/LoginUtil';
import Spinner from 'react-bootstrap/Spinner';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
        } else {
            // Handle login logic here
            setLoading(true);
            const userData = {
                userEmail:email, 
                userPassword: password};
            const response = await LoginUtil(userData);
            setError(response);
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Login</h2>
                    {error === "login failed." ?
                         <Alert variant="danger" className='text-center text-capitalize'>{error}</Alert>:
                         <Alert variant="success" className='text-center text-capitalize'>{error}</Alert>
                        }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            {loading ? <Spinner animation="grow" variant="white" /> : "Login"}
                        </Button>

                        <Button variant='dark' className='w-100 mt-3'>
                            Sign Up
                        </Button>
                        <Button 
                            variant="dark" 
                            className="w-100 
                            mt-3"
                            onClick={()=> setError(guestLogin())}>
                                Continue as Guest-Admin
                         </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;