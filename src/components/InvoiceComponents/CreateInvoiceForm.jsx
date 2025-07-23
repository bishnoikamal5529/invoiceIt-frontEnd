import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { createInvoice } from '../../utils/invoiceUtil/createInvoice';

const CreateInvoiceForm = ({updateErrorMsg, itemsList, invoiceNum, removeItem, increaseQuantity, decreaseQuantity, productList, handleRefresh, setShowCreate }) => {
    const [invoiceNumber, setInvoiceNumber] = useState(invoiceNum);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [status, setStatus] = useState('Unpaid');
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        calculateTotalAmount();        
    }, [itemsList]);

    const calculateTotalAmount = () => {
        const total = itemsList.reduce((acc, item) => {
            return acc + item.productPrice * item.quantity;
        }, 0);
        setTotalAmount(total);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(itemsList.length == 0){
            updateErrorMsg("Cannot Create An Empty Invoice");
            setShowCreate(false);
        }else {
        const invoiceData = {
            invoiceNumber,
            customerName,
            customerEmail,
            itemsList,
            totalAmount,
            status,
        };        
        let newItemList = [];
        for(let i=0; i<invoiceData.itemsList.length; i++){
            newItemList[i] = {
                productSku : invoiceData.itemsList[i].productSku,
                productName : invoiceData.itemsList[i].productName,
                productPrice: invoiceData.itemsList[i].productPrice,
                quantity : invoiceData.itemsList[i].quantity
            }                        
        }

        let finalData = {
            invoiceNumber : invoiceData.invoiceNumber,
            customerName : invoiceData.customerName,
            customerEmail : invoiceData.customerEmail,
            itemsList : [...newItemList],
            totalAmount : invoiceData.totalAmount,
            status : invoiceData.status,
        }

        const response = await createInvoice(finalData);
        console.log(response)
        if(response == 'Error'){
            updateErrorMsg("Something went wrong while creating invoice. Please try again later.");
        }
        setShowCreate(false);
        setTimeout(handleRefresh, 1000);    
    }   
    };

    return (
        <Form onSubmit={handleSubmit} className='pt-4'>
            <Row className="mb-3">
                    <Form.Group controlId="invoiceNumber">
                        <Form.Label className='mb-0'>Invoice Number</Form.Label>
                        <Form.Control type="text" value={invoiceNumber} disabled />
                    </Form.Group>
                    <Form.Group className='mt-3' controlId="customerName">
                        <Form.Label className='mb-0'>Customer Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter customer name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </Form.Group>
            </Row>
            <Row className="mb-3">
                    <Form.Group controlId="customerEmail">
                        <Form.Label className='mb-0'>Customer Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter customer email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="status">
                        <Form.Label className='mb-0 mt-3'>Status</Form.Label>
                        <Form.Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                            <option value="Overdue">Overdue</option>
                        </Form.Select>
                    </Form.Group>
            </Row>
            <Table striped bordered hover className="mb-3">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.productName}</td>
                            <td>{item.productPrice}</td>
                            <td className='d-flex gap-2 align-items-center'>
                            <Button variant='primary'
                            onClick={() => {
                                increaseQuantity(item.productName)
                            }}
                            >+</Button>
                            {item.quantity}
                            <Button variant='danger'
                            onClick={() => {
                                decreaseQuantity(item.productName)
                            }}
                            >-</Button>
                            <Button variant='dark'
                            onClick={() => {
                                removeItem(item.productName)
                            }}
                            >Remove</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="totalAmount">
                        <Form.Label>Total Amount</Form.Label>
                        <Form.Control type="text" value={totalAmount.toFixed(2)} disabled />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Create Invoice
            </Button>
        </Form>
    );
};

export default CreateInvoiceForm;