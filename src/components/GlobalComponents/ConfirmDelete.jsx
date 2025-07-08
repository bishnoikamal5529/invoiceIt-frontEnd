import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const ConfirmDelete = (props) => {
    const { currentID, 
            onDelete, 
            handleRefresh, 
            setShowDelete } = props

    const [show, setShow] = useState(true);

    const handleCancel = () => {
        setShow(false);
        setTimeout(() => {
            setShowDelete(false)
        }, 500)
    };

    const handleSubmit = async () => {        
        const res = await onDelete(currentID);
        handleRefresh();
        setShowDelete(false);   
    }

    return (
        <Modal show={show} onHide={handleCancel} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this item?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleSubmit}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDelete;
