import { useState } from 'react';
import { Form, Button, Container, Spinner, Stack, Badge } from 'react-bootstrap';

const SearchProduct = ({ productList }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParameter, setSearchParameter] = useState('name');
    const [filteredProducts, setFilteredProducts] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleParameterChange = (e) => {
        setSearchParameter(e.target.value);
    };

    const handleSearch = () => {
        const filtered = productList.filter((product) =>
            product[searchParameter]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <Container>
            <h4 className="text-center my-4">Search Product</h4>
            <Form className="search-product d-flex mb-4">
                <Form.Select
                    value={searchParameter}
                    onChange={handleParameterChange}
                    className="me-2"
                >
                    <option value="name">Name</option>
                    <option value="sku">SKU</option>
                    <option value="price">Price</option>
                    <option value="quantityInStock">Quantity In Stock</option>
                    <option value="category">Category</option>
                </Form.Select>
                <Form.Control
                    type="text"
                    placeholder={`Search by ${searchParameter}...`}
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="me-2"
                />
                <Button variant="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Form>
            <div>
                <h5>Filtered Products:</h5>
                <ul>

                    {filteredProducts ? filteredProducts.map((product, index) => (
                            <li key={index}>
                                {product.name} - {product.sku} - ${product.price} - {product.quantityInStock} - {product.category}
                            </li>
                        )) : <div className='d-flex justify-content-start align-items-center gap-3'>
                                <Spinner animation="grow" variant="dark" />
                                <Badge bg="dark" style={{fontSize : "16px"}}>No Product Found..</Badge>
                            </div>

                    }
                </ul>
            </div>
        </Container>
    );
};

export default SearchProduct;