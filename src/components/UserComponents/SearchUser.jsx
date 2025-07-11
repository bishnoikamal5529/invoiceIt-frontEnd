import { useState } from 'react';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const SearchUser = ({ userList }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParameter, setSearchParameter] = useState('name');
    const [filteredUsers, setFilteredUsers] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleParameterChange = (e) => {
        setSearchParameter(e.target.value);
    };

    const handleSearch = () => {
        const filtered = userList.filter((user) =>
            user[searchParameter]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <Container>
            <h4 className="text-center my-4">Search User</h4>
            <Form className="search-user d-flex mb-4">
                <Form.Select
                    value={searchParameter}
                    onChange={handleParameterChange}
                    className="me-2"
                >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="role">Role</option>
                    <option value="phone">Phone</option>
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
                <h5>Filtered Users:</h5>
                <ListGroup>
                    <ListGroup.Item
                        variant='danger'
                        className='w-100 d-flex justify-content-between'
                    >
                        <strong>Name</strong>|
                        <strong>Email</strong>|
                        <strong>Role</strong>|
                        <strong>Phone</strong>
                    </ListGroup.Item>
                    {filteredUsers && filteredUsers.map((user, index) => (
                            <ListGroup.Item 
                                className='w-100 d-flex justify-content-between'
                                variant='success' 
                                key={index}>

                                <p>{user.name}</p>|
                                <p>{user.email}</p>|
                                <p>{user.role}</p>|
                                <p>{user.phone}</p>
                
                            </ListGroup.Item>
                        ))

                    }
                </ListGroup>
            </div>
        </Container>
    );
};

export default SearchUser;
