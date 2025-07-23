import React, { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';

const AddProduct = ({ productList, addItem }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [fullProductList, setFullProductList] = useState(productList);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = fullProductList.filter(
            (product) =>
                product.name.toLowerCase().includes(term) ||
                product.sku.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
    };

    const handleAddToList = (product) => {
        console.log('Product added:', product);
        addItem({
            productSku : product.sku,
            productName : product.name,
            productPrice : product.price,
            quantity : 1 
        });
    };

    const renderTableRows = (products) => {
        return products.map((product) => (
            <tr key={product.sku}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.sku}</td>
                <td>
                    <Button
                        variant="primary"
                        onClick={() => handleAddToList(product)}
                    >
                        Add
                    </Button>
                </td>
            </tr>
        ));
    };

    return (
        <Container className="mt-4">
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search by name or SKU"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </Form.Group>
            {searchTerm && (
                <div className="filtered-product-list mb-4">
                    <h4 className="text-primary">Filtered Products</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>SKU</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{renderTableRows(filteredProducts)}</tbody>
                    </Table>
                </div>
            )}
            <div className="full-product-list">
                <h4 className="text-success">Full Product List</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>SKU</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{renderTableRows(fullProductList)}</tbody>
                </Table>
            </div>
        </Container>
    );
};

export default AddProduct;