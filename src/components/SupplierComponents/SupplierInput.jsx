import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {createSupplier} from '../../utils/supplierUtil/createSupplier'

const SupplierInput = ({updateErrorMsg, setShowCreate, handleRefresh}) => {

    const [formData, setFormData] = useState({
        name: '',
        contactPerson: '',
        phone: '',
        email: '',
        address: '',
        notes: '',
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
        createSupplier(formData)
        .then((data) => {
            if (data == 'Error') {
                updateErrorMsg(data);
                setShowCreate(false);
                setTimeout(handleRefresh, 2000);
            }else{
                setShowCreate(false);
                setTimeout(handleRefresh, 2000);
            }
        });
        // Add your logic to handle the submitted data
        };

    return (
        <Form className='mb-2' onSubmit={handleSubmit}>
            <h4 className='text-center'>Input Supplier Details</h4>
            <Form.Group controlId="name">
                <Form.Label className='mb-0'>Name</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter supplier name"
                    required
                />
            </Form.Group>
            <Form.Group controlId="contactPerson">
                <Form.Label className='mb-0'>Contact Person</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Enter contact person's name"
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
                    placeholder="Enter phone number"
                    required
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label className='mb-0'>Email</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
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
                    placeholder="Enter address"
                    required
                />
            </Form.Group>
            <Form.Group controlId="notes">
                <Form.Label className='mb-0'>Notes</Form.Label>
                <Form.Control
                    className='mb-2'
                    as="textarea"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Enter any additional notes"
                />
            </Form.Group>
            <Button className='w-100 mt-3' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SupplierInput;