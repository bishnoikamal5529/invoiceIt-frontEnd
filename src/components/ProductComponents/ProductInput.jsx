import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../../utils/productsUtil/createProduct';

const ProductInput = ({ setShowCreate, updateErrorMsg, handleRefresh }) => {
    const [formData, setFormData] = useState({
        name: '',
        sku: '',
        price: '',
        quantityInStock: '',
        category: '',
        supplier: '',
    });

    const [supplierList, setSupplierList] = useState(null);


    // useEffect for retrieving supplier lists
    useEffect(() => {
        const getAllSuppliers = async () => {
            try {
                const authToken = localStorage.getItem('authToken'); // Retrieve authToken from localStorage
                const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/supplier', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`, // Add Authorization header
                    },
                });
                if (!response.ok) {
                    updateErrorMsg(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.log('Error fetching supplier list:', error);
                updateErrorMsg(`Error fetching supplier list: ${error.message}`);
            }
        };
        
        getAllSuppliers().then((supplier) => {
            if(supplier){
                let newList = new Array;
                for(let i=0; i<supplier.length; i++){
                        newList[i] = supplier[i];
                        newList[i].id = i+1;
                    }
                
                setSupplierList(newList);
            }
        })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Data Submitted:', formData);
        createProduct(formData)
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
            <h4 className='text-center'>Input Product Details</h4>

            <Form.Group controlId="name">
                <Form.Label className='m-0'>Name</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    required
                />
            </Form.Group>
            <Form.Group controlId="sku">
                <Form.Label className='m-0'>SKU</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    placeholder="Enter product SKU"
                    required
                />
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label className='mb-0'>Price</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter product price"
                    required
                />
            </Form.Group>
            <Form.Group controlId="quantityInStock">
                <Form.Label className='mb-0'>Quantity in Stock</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="number"
                    name="quantityInStock"
                    value={formData.quantityInStock}
                    onChange={handleChange}
                    placeholder="Enter quantity in stock"
                    required
                />
            </Form.Group>
            <Form.Group controlId="category">
                <Form.Label className='mb-0'>Category</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Enter product category"
                    required
                />
            </Form.Group>
            <Form.Group controlId="supplier">
                <Form.Label className='mb-0'>Supplier</Form.Label>
                <Form.Select
                    className='mb-2'
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a supplier</option>
                    {
                        supplierList && supplierList.map(supplier => {
                            return <option name="supplier" key={supplier.id} value={supplier._id}>{supplier.name}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>
            <Button className='w-100 mt-3' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ProductInput;