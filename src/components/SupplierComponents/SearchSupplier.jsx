import { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const SearchSupplier = ({ supplierList }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParameter, setSearchParameter] = useState('name');
    const [filteredSuppliers, setFilteredSuppliers] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleParameterChange = (e) => {
        setSearchParameter(e.target.value);
    };

    const handleSearch = () => {
        const filtered = supplierList.filter((supplier) =>
            supplier[searchParameter]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredSuppliers(filtered);
    };

    return (
        <Container>
            <h4 className="text-center my-4">Search Supplier</h4>
            <Form className="search-supplier d-flex mb-4">
                <Form.Select
                    value={searchParameter}
                    onChange={handleParameterChange}
                    className="me-2"
                >
                    <option value="name">Name</option>
                    <option value="contactPerson">Contact Person</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="address">Address</option>
                    <option value="notes">Notes</option>
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
            <div className='my-4'>
                <h5>Filtered Suppliers:</h5>
                <ListGroup>
                    <ListGroup.Item
                        variant='danger'
                        className='w-100 d-flex justify-content-between'
                    >
                        <strong>Name</strong>|
                        <strong>Contact Person</strong>|
                        <strong>Phone</strong>|
                        <strong>Email</strong>|
                        <strong>Address</strong>|
                        <strong>Notes</strong>

                    </ListGroup.Item>
                    {filteredSuppliers && filteredSuppliers.map((supplier, index) => (
                            <ListGroup.Item 
                                className='w-100 d-flex justify-content-between'
                                variant='success' 
                                key={index}>

                                <p>{supplier.name}</p>|
                                <p>{supplier.contactPerson}</p>|
                                <p>{supplier.phone}</p>|
                                <p>{supplier.email}</p>|
                                <p>{supplier.address}</p>|
                                <p>{supplier.notes}</p>
                        
                            </ListGroup.Item>
                        ))

                    }
                </ListGroup>
            </div>
        </Container>
    );
};

export default SearchSupplier;