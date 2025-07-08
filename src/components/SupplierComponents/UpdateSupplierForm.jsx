import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import updateSupplier from '../../utils/supplierUtil/updateSupplier';

const UpdateSupplierForm = ({ defaultValues, onCancel }) => {
    const [formData, setFormData] = useState({
        name: defaultValues.name || '',
        contactPerson: defaultValues.contactPerson || '',
        phone: defaultValues.phone || '',
        email: defaultValues.email || '',
        address: defaultValues.address || '',
        notes: defaultValues.notes || '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = updateSupplier(defaultValues._id, formData);
        if (data) {
            onCancel();
        }
    };

    return (
        <Container className="my-4" style={{ padding: '20px', border: '2px solid #FFD700', borderRadius: '8px' }}>
            <h4 className="text-center">Update Supplier</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter supplier name"
                        isInvalid={!formData.name.trim()}
                    />
                    <Form.Control.Feedback type="invalid">Supplier name is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formContactPerson">
                    <Form.Label>Contact Person</Form.Label>
                    <Form.Control
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="Enter contact person name"
                        isInvalid={!formData.contactPerson.trim()}
                    />
                    <Form.Control.Feedback type="invalid">Contact person is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        isInvalid={!formData.phone.trim()}
                    />
                    <Form.Control.Feedback type="invalid">Phone number is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        isInvalid={!formData.email.trim()}
                    />
                    <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        isInvalid={!formData.address.trim()}
                    />
                    <Form.Control.Feedback type="invalid">Address is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Enter additional notes"
                    />
                </Form.Group>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button variant="primary" type="submit">
                        Update Supplier
                    </Button>
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default UpdateSupplierForm;
