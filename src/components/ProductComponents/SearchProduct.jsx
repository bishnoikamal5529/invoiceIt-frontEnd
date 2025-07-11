import { useState } from 'react';
import { Form, Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';

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
            <div className='my-5'>
                <h5>Filtered Products:</h5>
                <ListGroup>
                    <ListGroup.Item
                        variant='danger'
                        className='w-100 d-flex justify-content-between'
                    >
                        <strong>Name</strong>|
                        <strong>SKU</strong>|
                        <strong>Price</strong>|
                        <strong>Quantity</strong>|
                        <strong>Category</strong>
                    </ListGroup.Item>
                    {filteredProducts && filteredProducts.map((product, index) => (
                            <ListGroup.Item 
                                className='w-100 d-flex justify-content-between'
                                variant='success' 
                                key={index}>

                                <p>{product.name}</p>|
                                <p>{product.sku}</p>|
                                <p>${product.price}</p>|
                                <p>{product.quantityInStock}</p>|
                                <p>{product.category}</p>

                            </ListGroup.Item>
                        ))

                    }
                </ListGroup>
            </div>
        </Container>
    );
};

export default SearchProduct;