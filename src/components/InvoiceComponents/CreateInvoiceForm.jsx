import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { createInvoice } from '../../utils/invoiceUtil/createInvoice';

const CreateInvoiceForm = ({setErrorMsg, itemsList, invoiceNum, removeItem, increaseQuantity, decreaseQuantity, productList, handleRefresh, setShowCreate }) => {
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
            return acc + item.price * item.quantity;
        }, 0);
        setTotalAmount(total);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(itemsList.length == 0){
            setErrorMsg("Cannot Create An Empty Invoice");
            setTimeout(() => {
                setErrorMsg(null)}, 5000);
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
                product : invoiceData.itemsList[i]._id,
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
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td className='d-flex gap-2 align-items-center'>
                            <Button variant='primary'
                            onClick={() => {
                                increaseQuantity(item.name)
                            }}
                            >+</Button>
                            {item.quantity}
                            <Button variant='danger'
                            onClick={() => {
                                decreaseQuantity(item.name)
                            }}
                            >-</Button>
                            <Button variant='dark'
                            onClick={() => {
                                removeItem(item.name)
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