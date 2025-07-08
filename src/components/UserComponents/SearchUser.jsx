import { useState } from 'react';
import { Form, Button, Container, Spinner, Stack, Badge } from 'react-bootstrap';

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
            <div>
                <h5>Filtered Users:</h5>
                <ul>
                    {filteredUsers ? filteredUsers.map((user, index) => (
                        <li key={index}>
                            {user.name} - {user.email} - {user.role} - {user.phone}
                        </li>
                    )) : (
                        <div className='d-flex justify-content-start align-items-center gap-3'>
                            <Spinner animation="grow" variant="dark" />
                            <Badge bg="dark" style={{ fontSize: "16px" }}>No User Found..</Badge>
                        </div>
                    )}
                </ul>
            </div>
        </Container>
    );
};

export default SearchUser;
