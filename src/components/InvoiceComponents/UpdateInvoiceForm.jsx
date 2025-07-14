import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import updateInvoice from '../../utils/invoiceUtil/updateInvoice';

const UpdateInvoiceForm = ({ defaultValues, onCancel, updateErrorMsg }) => {
    const [formData, setFormData] = useState({
        ...defaultValues
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let data = await updateInvoice(formData._id, formData);
        if(data == "Error"){
            updateErrorMsg("Something went wrong while updating the product. Please try again later.");
        }
        onCancel();
        
    };

    return (
        <Container className='my-4' style={{ padding: '20px', border: '2px solid #FFD700', borderRadius: '8px' }}>
            <h4 className='text-center'>Update Invoice</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formInvoiceNumber">
                    <Form.Label className='mb-0'>Invoice Number</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="invoiceNumber"
                        value={formData.invoiceNumber}
                        onChange={handleChange}
                        placeholder="Enter invoice number"
                    />
                </Form.Group>

                <Form.Group controlId="formStatus">
                    <Form.Label className='mb-0'>Status</Form.Label>
                    <Form.Select
                        className='mb-2'
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Overdue">Overdue</option>
                    </Form.Select>
                </Form.Group>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Update Invoice
                    </Button>
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default UpdateInvoiceForm;
