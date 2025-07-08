import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import updateCustomer from '../../utils/CustomerUtil/updateCustomer';

const UpdateCustomerForm = ({ defaultValues, onCancel }) => {
    const [formData, setFormData] = useState({
        name: defaultValues.name || '',
        email: defaultValues.email || '',
        phone: defaultValues.phone || '',
        address: defaultValues.address || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = updateCustomer(defaultValues._id, formData);
        if (data) {
            onCancel();
        }
    };

    return (
        <Container className='my-4' style={{ padding: '20px', border: '2px solid #FFD700', borderRadius: '8px' }}>
            <h4 className='text-center'>Update Customer</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label className='mb-0'>Customer Name</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter customer name"
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label className='mb-0'>Email</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label className='mb-0'>Phone</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label className='mb-0'>Address</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                    />
                </Form.Group>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button variant="primary" type="submit">
                        Update Customer
                    </Button>
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default UpdateCustomerForm;
