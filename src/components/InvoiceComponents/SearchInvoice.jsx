import { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const SearchInvoice = ({ invoiceList }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParameter, setSearchParameter] = useState('invoiceNumber');
    const [filteredInvoices, setFilteredInvoices] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleParameterChange = (e) => {
        setSearchParameter(e.target.value);
    };

    const handleSearch = () => {
        const filtered = invoiceList.filter((invoice) =>
            invoice[searchParameter]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredInvoices(filtered);
    };

    return (
        <Container>
            <h4 className="text-center my-4">Search Invoice</h4>
            <Form className="search-product d-flex mb-4">
                <Form.Select
                    value={searchParameter}
                    onChange={handleParameterChange}
                    className="me-2"
                >
                    <option value="invoiceNumber">Invoice No.</option>
                    <option value="customerEmail">Customer Email</option>
                    <option value="customerName">Customer Name</option>
                    <option value="issueDate">Date</option>
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
                <h5>Filtered Invoices:</h5>
                <ListGroup>
                    <ListGroup.Item
                        variant='danger'
                        className='w-100 d-flex gap-3 overflow-auto justify-content-between'
                    >
                        <strong>Invoice No.</strong>|
                        <strong>Customer Email</strong>|
                        <strong>Customer Name</strong>|
                        <strong>Date</strong>|
                    </ListGroup.Item>
                    {filteredInvoices && filteredInvoices.map((invoice, index) => (
                            <ListGroup.Item 
                                className='w-100 d-flex gap-3 overflow-auto justify-content-between'
                                variant='success' 
                                key={index}>

                                <p>{invoice.invoiceNumber}</p>|
                                <p>{invoice.customerEmail}</p>|
                                <p>{invoice.customerName}</p>|
                                <p>{invoice.issueDate.slice(0,10)}</p>

                            </ListGroup.Item>
                        ))

                    }
                </ListGroup>
            </div>
        </Container>
    );
};

export default SearchInvoice;