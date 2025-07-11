import { useState, useRef } from 'react';
import {Accordion, Container, Row, Col, Table, Button } from 'react-bootstrap';
import SupplierInput from './SupplierInput';
import SearchSupplier from './SearchSupplier';
import ConfirmDelete from '../GlobalComponents/ConfirmDelete';

const SupplierList = ({suppliers, handleUpdate, handleDelete, setErrorMsg, handleRefresh}) => {

    const [showCreate ,setShowCreate] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    
    const currentID = useRef(null);

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                 <section className='d-flex w-100 justify-content-between'>
                    <Button 
                        variant={showCreate ? "dark" : "primary"}
                        className="me-2 my-4"
                        onClick={() => setShowCreate(!showCreate)}
                        >
                        {showCreate ? "Close" : "Create"}
                    </Button>

                    <h1 className='text-center my-4'>Supplier List</h1>

                    <Button 
                        variant={showSearch ? "dark" : "primary"}
                        className="me-2 my-4"
                        onClick={() => setShowSearch(!showSearch)}
                        >
                        {showSearch ? "Close" : "Search"}
                    </Button>
                </section>

                            
                {showCreate && <SupplierInput setErrorMsg={setErrorMsg} setShowCreate={setShowCreate} handleRefresh={handleRefresh} />}

                {showSearch && <SearchSupplier supplierList={suppliers} />}

                {showDelete && <ConfirmDelete 
                                currentID={currentID.current} 
                                onDelete={handleDelete} 
                                handleRefresh={handleRefresh} 
                                setShowDelete={setShowDelete} />}

                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3>Supplier List</h3>
                    <Accordion>
                        {suppliers.map((supplier, index) => (
                            <Accordion.Item eventKey={index.toString()} key={supplier.id}>
                                <Accordion.Header>
                                    <Table striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <td>{supplier.name}</td>
                                                <td>{supplier.phone}</td>
                                                <td>{supplier.email}</td>
                                                <td>{supplier.address}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p><strong>Contact Person : </strong> {supplier.contactPerson}</p>
                                    <p><strong>Notes : </strong> {supplier.notes}</p>
                                    <p className='d-flex'>
                                        <Button 
                                            variant="warning" 
                                            className="me-2" 
                                            onClick={() => handleUpdate(supplier)}
                                        >
                                            Update
                                        </Button>
                                        <Button 
                                            variant="danger" 
                                            onClick={() => 
                                                {
                                                    currentID.current = supplier._id
                                                    setShowDelete(true)
                                                }
                                            }                                        >
                                            Delete
                                        </Button>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default SupplierList;
