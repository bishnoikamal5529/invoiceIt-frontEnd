import { useState } from 'react';
import { Form, Button, Container, Spinner, Badge } from 'react-bootstrap';

const SearchCustomer = ({ customerList }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParameter, setSearchParameter] = useState('name');
    const [filteredCustomers, setFilteredCustomers] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleParameterChange = (e) => {
        setSearchParameter(e.target.value);
    };

    const handleSearch = () => {
        const filtered = customerList.filter((customer) =>
            customer[searchParameter]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredCustomers(filtered);
    };

    return (
        <Container>
            <h4 className="text-center my-4">Search Customer</h4>
            <Form className="search-customer d-flex mb-4">
                <Form.Select
                    value={searchParameter}
                    onChange={handleParameterChange}
                    className="me-2"
                >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="address">Address</option>
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
                <h5>Filtered Customers:</h5>
                <ul>
                    {filteredCustomers ? filteredCustomers.map((customer, index) => (
                        <li key={index}>
                            {customer.name} - {customer.email} - {customer.phone} - {customer.address}
                        </li>
                    )) : (
                        <div className='d-flex justify-content-start align-items-center gap-3'>
                            <Spinner animation="grow" variant="dark" />
                            <Badge bg="dark" style={{ fontSize: "16px" }}>No Customer Found..</Badge>
                        </div>
                    )}
                </ul>
            </div>
        </Container>
    );
};

export default SearchCustomer;
