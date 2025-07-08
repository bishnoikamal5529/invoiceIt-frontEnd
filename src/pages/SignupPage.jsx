import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import guestLogin from '../utils/GuestLogin';
import SignupUtil from '../utils/SignupUtil';
import Spinner from 'react-bootstrap/Spinner';


const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '', // Added phone field
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form submission logic here
        if(formData.password !== formData.confirmPassword ){
            setError("Make Sure you have same Password in Both Fields")
        }else{
            setLoading(true);
            const userData = {...formData, role : 'staff'}

            //checking user data before submitting
            console.log(userData);

            const response = await SignupUtil(userData);
            setError(response);
            setLoading(false);
        }
        
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Sign Up</h2>
                    {error === "Sign Up Successfull." ?
                         <Alert variant="danger" className='text-center text-capitalize'>{error}</Alert>:
                         <Alert variant="success" className='text-center text-capitalize'>{error}</Alert>
                        }                                           
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone" className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm your password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            {loading ? <Spinner animation="grow" variant="white" /> : "Sign Up"}
                        </Button>

                        <Button 
                            variant="dark" 
                            className="w-100 mt-3"
                            onClick={() => setError(guestLogin())}>
                                Continue as Guest-Admin
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignupPage;