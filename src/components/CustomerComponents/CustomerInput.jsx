import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import  createCustomer  from '../../utils/CustomerUtil/createCustomer';

const CustomerInput = ({ setShowCreate, updateErrorMsg, handleRefresh }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createCustomer(formData)
            .then((data) => {
                if (typeof data === 'string') {
                    updateErrorMsg(data);
                    setShowCreate(false);
                    setTimeout(handleRefresh, 2000);
                }
            });
    };

    return (
        <Form className='mb-4' onSubmit={handleSubmit}>
            <h4 className='text-center'>Input Customer Details</h4>

            <Form.Group controlId="name">
                <Form.Label className='m-0'>Name</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter customer name"
                    required
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label className='m-0'>Email</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter customer email"
                    required
                />
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label className='mb-0'>Phone</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter customer phone"
                    required
                />
            </Form.Group>
            <Form.Group controlId="address">
                <Form.Label className='mb-0'>Address</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter customer address"
                    required
                />
            </Form.Group>
            <Button className='w-100 mt-3' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default CustomerInput;
