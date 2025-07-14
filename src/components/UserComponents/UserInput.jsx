import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import createUser from '../../utils/UserUtil/createUser';

const UserInput = ({ updateErrorMsg, setShowCreate, handleRefresh }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(formData)
            .then((data) => {
                if (typeof data === 'string') {
                    if(data == "Error"){
                        updateErrorMsg("Something went wrong while creating User.")
                    }else{
                        updateErrorMsg("User Created Successfully.")
                    }
                    setShowCreate(false);
                    setTimeout(handleRefresh, 2000);
                }
            });
    };

    return (
        <Form className='mb-2' onSubmit={handleSubmit}>
            <h4 className='text-center'>Input User Details</h4>
            <Form.Group controlId="name">
                <Form.Label className='mb-0'>Name</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter user name"
                    required
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label className='mb-0'>Email</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label className='mb-0'>Password</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                />
            </Form.Group>
            <Form.Group controlId="role">
                <Form.Label className='mb-0'>Role</Form.Label>
                <Form.Select
                    className='mb-2'
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select role</option>
                    <option value="staff">Staff</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label className='mb-0'>Phone</Form.Label>
                <Form.Control
                    className='mb-2'
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                />
            </Form.Group>
            <Button className='w-100 mt-3' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UserInput;
