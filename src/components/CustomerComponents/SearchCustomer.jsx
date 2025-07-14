import { useState } from 'react';
import { Form, Button, Container,ListGroup } from 'react-bootstrap';

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
            <div className='my-5'>
                <h5>Filtered Customers:</h5>
                <ListGroup className=' overflow-scroll'>
                    <ListGroup.Item
                        variant='danger'
                        className='w-100 d-flex gap-3 overflow-auto justify-content-between'
                    >
                        <strong>Name</strong>|
                        <strong>Email</strong>|
                        <strong>Phone</strong>|
                        <strong>Address</strong>
                    </ListGroup.Item>
                    {filteredCustomers && filteredCustomers.map((customer, index) => (
                            <ListGroup.Item 
                                className='w-100 d-flex gap-3 overflow-auto justify-content-between'
                                variant='success' 
                                key={index}>

                                <p>{customer.name}</p>|
                                <p>{customer.email}</p>|
                                <p>{customer.phone}</p>|
                                <p>{customer.address}</p>
                
                            </ListGroup.Item>
                        ))

                    }
                </ListGroup>
            </div>
        </Container>
    );
};

export default SearchCustomer;
