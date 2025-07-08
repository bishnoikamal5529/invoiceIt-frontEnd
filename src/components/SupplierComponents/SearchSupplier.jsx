import { useState } from 'react';
import { Form, Button, Container, Spinner, Badge } from 'react-bootstrap';

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
            <div>
                <h5>Filtered Suppliers:</h5>
                <ul>
                    {filteredSuppliers ? filteredSuppliers.map((supplier, index) => (
                        <li key={index}>
                            {supplier.name} - {supplier.contactPerson} - {supplier.phone} - {supplier.email} - {supplier.address} - {supplier.notes}
                        </li>
                    )) : (
                        <div className='d-flex justify-content-start align-items-center gap-3'>
                            <Spinner animation="grow" variant="dark" />
                            <Badge bg="dark" style={{ fontSize: "16px" }}>No Supplier Found..</Badge>
                        </div>
                    )}
                </ul>
            </div>
        </Container>
    );
};

export default SearchSupplier;