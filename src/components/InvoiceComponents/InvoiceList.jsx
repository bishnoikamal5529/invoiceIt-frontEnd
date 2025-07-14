import {useState, useRef, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Accordion, Alert, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import InvoiceInput from './InvoiceInput';
import SearchInvoice from './SearchInvoice';
import ConfirmDelete from '../GlobalComponents/ConfirmDelete';


const InvoiceList = ({invoices, updateErrorMsg, handleRefresh, handleUpdate}) => {

    const [showCreate ,setShowCreate] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // productList is map from _ids to product name
    const [productList, setProductList] = useState(null);

    //createProductList is list of products
    const [createProductList, setCreateProductList] = useState(null);

    const currentID = useRef(null);

    //useEffect for retrieving customerEmail and products
    useEffect(() => {
        let errorString = null;
        let ignore = true;        

        // defining function for getting all products
        const getAllProducts = async () => {
            try {
                const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/product', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.authToken}`,
                    },
                });
        

                if (!response.ok) {
                    errorString = "There is some error while retrieving Products."
                }
        
                const data = await response.json();
        
                if(!data){
                    errorString = "Bad Auth";
                }
                return data;
            } catch (error) {
                console.error('Error fetching products:', error);
                errorString =  "Error fetching products";
            }
        };

        let productMap = new Map();
        // retrieving products
        getAllProducts().then(products => {
            if(ignore){
                products = products.data;
                for(let i=0; i<products.length; i++){
                    productMap.set(products[i]._id, { name:products[i].name, price:products[i].price });
                }
                setProductList(productMap);
                setCreateProductList(products);
            }
        }).catch((err) => {
            console.log(err);
            updateErrorMsg(err)
        })
        return () => {
            ignore = false;
        }
    }, []);


    return  <Container>
    <section className='d-flex w-100 justify-content-between'>

        <Button 
            variant={showCreate?"dark":"primary"}
            className="me-2 my-4"
            onClick={() => setShowCreate(!showCreate)}
            >{showCreate?"Close":"Create"}
            </Button>

        <h1 className='text-center my-4'>Invoice List</h1>

        <Button 
            variant={showSearch?"dark":"primary"}
            className="me-2 my-4"
            onClick={() => setShowSearch(!showSearch)}
            >{showSearch?"Close":"Search"}
            </Button>
    </section>

    {showCreate && <InvoiceInput 
                    setShowCreate={setShowCreate}  
                    handleRefresh={handleRefresh}
                    productList={createProductList}
                    updateErrorMsg={updateErrorMsg}
                     />}

    {showSearch && <SearchInvoice 
                    invoiceList={invoices} />}

    {showDelete && <ConfirmDelete 
         currentID={currentID.current} 
         onDelete={handleDelete} 
         handleRefresh={handleRefresh} 
         setShowDelete={setShowDelete} />}
    
    <Container className='overflow-auto'>

        <Accordion>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Invoice No.</th>
                            <th>Date</th>
                            <th>Customer Email</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                </Table>
                {invoices.map((invoice) => (
                    <Accordion.Item eventKey={invoice.id.toString()} key={invoice.id}>
                        <Accordion.Header>
                            <Table striped bordered hover>
                            <tbody className="">
                                <tr>
                                    <td>{invoice.invoiceNumber}</td>
                                    <td>{invoice.issueDate.slice(0,10)}</td>
                                    <td>{invoice.customerEmail ? invoice.customerEmail 
                                                :<Alert variant='danger' > Not-Provided</Alert>
                                                    }</td>
                                    <td>${invoice.totalAmount}</td>
                                </tr>
                            </tbody>
                            </Table>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoice.items.map((item, index) => (
                                        <tr key={index}>
                                            <td>{productList ? productList.get(item.product).name 
                                                :<Spinner animation="border" variant="primary" />
                                                    }</td>
                                            <td>{item.quantity}</td>
                                            <td>{productList ? productList.get(item.product).price 
                                                :<Spinner animation="border" variant="primary" />
                                                    }</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <thead className='mt-3'>
                                    <tr>
                                            <th> Status : {invoice.status}</th> 
                                    <th>
                                        Total Amount : {invoice.totalAmount}
                                    </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Button 
                                                variant="warning" 
                                                className="me-2" 
                                                onClick={() => handleUpdate(invoice)}
                                            >
                                                Update
                                            </Button>
                                        </td>
                                    </tr>
                                </thead>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    </Container>
};

export default InvoiceList;