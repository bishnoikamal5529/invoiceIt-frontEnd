import {useState, useRef} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import UserInput from './UserInput';
import SearchUser from './SearchUser';
import ConfirmDelete from '../GlobalComponents/ConfirmDelete';

const UserList = ({users, handleUpdate, handleDelete, updateErrorMsg, handleRefresh}) => {

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

        <h1 className='text-center my-4'>User List</h1>

        <Button 
            variant={showSearch ? "dark" : "primary"}
            className="me-2 my-4"
            onClick={() => setShowSearch(!showSearch)}
        >
            {showSearch ? "Close" : "Search"}
        </Button>
    </section>

    {showCreate && <UserInput 
                    setShowCreate={setShowCreate} 
                    updateErrorMsg={updateErrorMsg} 
                    handleRefresh={handleRefresh} />}

    {showSearch && <SearchUser 
                    userList={users} />}

    {showDelete && <ConfirmDelete 
         currentID={currentID.current} 
         onDelete={handleDelete} 
         handleRefresh={handleRefresh} 
         setShowDelete={setShowDelete} />}

    <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {users && users.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
                <td className='d-flex'>
                    <Button 
                        variant="warning" 
                        className="me-2" 
                        onClick={() => handleUpdate(user)}
                    >
                        Update
                    </Button>
                    <Button 
                        variant="danger" 
                        onClick={() => 
                            {
                                currentID.current = user._id;
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
};

export default UserList;
