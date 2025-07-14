import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import updateProduct from '../../utils/productsUtil/updateProduct';

const UpdateProductForm = ({ defaultValues, onCancel, updateErrorMsg }) => {
    const [formData, setFormData] = useState({
        name: defaultValues.name || '',
        sku: defaultValues.sku || '',
        price: defaultValues.price || '',
        quantityInStock: defaultValues.quantityInStock || '',
        category: defaultValues.category || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await updateProduct(defaultValues._id,formData);
        
        if(data == "Error"){
            updateErrorMsg("Something went wrong while updating the Invoice. Please try again later.");
        }
        onCancel();
        
    };

    return (
        <Container className='my-4' style={{ padding: '20px', border: '2px solid #FFD700', borderRadius: '8px' }}>
            <h4 className='text-center'>Update Product</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label className='mb-0'>Product Name</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                    />
                </Form.Group>

                <Form.Group controlId="formSku">
                    <Form.Label className='mb-0'>SKU</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="Enter SKU"
                    />
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label className='mb-0'>Price</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                    />
                </Form.Group>

                <Form.Group controlId="formQuantityInStock">
                    <Form.Label className='mb-0'>Quantity in Stock</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="number"
                        name="quantityInStock"
                        value={formData.quantityInStock}
                        onChange={handleChange}
                        placeholder="Enter quantity in stock"
                    />
                </Form.Group>

                <Form.Group controlId="formCategory">
                    <Form.Label className='mb-0'>Category</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Enter category"
                    />
                </Form.Group>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button variant="primary" type="submit">
                        Update Product
                    </Button>
                    <Button variant="secondary"  onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default UpdateProductForm;