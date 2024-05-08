import React, { useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

function DeleteItem({ itemId, onDelete }) {

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {

        axios.delete(`http://localhost:8081/products/${itemId}`)
            .then(response => {
                console.log("Deleted!", response.data);
                onDelete(itemId);
                setShowModal(false);
            })
            .catch(error => {
                console.error(error);
            });


    }

    return (
        <>
            <button className="btn btn-danger" onClick={() => setShowModal(true)} >Delete</button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}


export default DeleteItem;