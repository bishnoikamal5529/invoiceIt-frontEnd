import {useState, useRef} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CustomerInput from './CustomerInput';
import SearchCustomer from './SearchCustomer';
import ConfirmDelete from '../GlobalComponents/ConfirmDelete';

const CustomerList = ({customers, handleUpdate, handleDelete, updateErrorMsg, handleRefresh}) => {

    const [showCreate ,setShowCreate] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const currentID = useRef(null);

    return <Container>
    <section className='d-flex w-100 justify-content-between'>

        <Button 
            variant={showCreate ? "dark" : "primary"}
            className="me-2 my-4"
            onClick={() => setShowCreate(!showCreate)}
        >
            {showCreate ? "Close" : "Create"}
        </Button>

        <h1 className='text-center my-4'>Customer List</h1>

        <Button 
            variant={showSearch ? "dark" : "primary"}
            className="me-2 my-4"
            onClick={() => setShowSearch(!showSearch)}
        >
            {showSearch ? "Close" : "Search"}
        </Button>
    </section>

    {showCreate && <CustomerInput 
                    setShowCreate={setShowCreate} 
                    updateErrorMsg={updateErrorMsg} 
                    handleRefresh={handleRefresh} />}

    {showSearch && <SearchCustomer 
                    customerList={customers} />}

    {showDelete && <ConfirmDelete 
         currentID={currentID.current} 
         onDelete={handleDelete} 
         handleRefresh={handleRefresh} 
         setShowDelete={setShowDelete} />}

    <Container className='overflow-auto'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {customers && customers.map(customer => (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td>{new Date(customer.createdAt).toLocaleDateString()}</td>
                    <td className='d-flex flex-column gap-1'>
                        <Button 
                            variant="warning" 
                            className="me-2" 
                            onClick={() => handleUpdate(customer)}
                        >
                            Update
                        </Button>
                        <Button 
                            variant="danger" 
                            onClick={() => 
                                {
                                    currentID.current = customer._id;
                                    setShowDelete(true);
                                }
                            }
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    </Container>
</Container>
};

export default CustomerList;
