import { useState } from 'react';
import { Form, Button, Container, Dropdown } from 'react-bootstrap';
import updateUser from '../../utils/UserUtil/updateUser';

const UpdateUserForm = ({ defaultValues, onCancel, updateErrorMsg }) => {
    const [formData, setFormData] = useState({
        name: defaultValues.name || '',
        email: defaultValues.email || '',
        phone: defaultValues.phone || '',
        role: defaultValues.role || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRoleChange = (role) => {
        setFormData({ ...formData, role });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();        
        const data = await updateUser(defaultValues._id, formData);
        if(data == "Error"){
            updateErrorMsg("Something went wrong while updating the User. Please try again later.");
        }
        onCancel();
    };

    return (
        <Container className='my-4' style={{ padding: '20px', border: '2px solid #FFD700', borderRadius: '8px' }}>
            <h4 className='text-center'>Update User</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label className='mb-0'>Name</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label className='mb-0'>Email</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label className='mb-0'>Phone</Form.Label>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />
                </Form.Group>

                <Form.Group controlId="formRole">
                    <Form.Label className='mb-0'>Role</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-role">
                            {formData.role || 'Select role'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleRoleChange('admin')}>Admin</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleRoleChange('staff')}>Staff</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleRoleChange('manager')}>Manager</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button variant="primary" type="submit">
                        Update User
                    </Button>
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default UpdateUserForm;
