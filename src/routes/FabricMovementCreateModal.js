import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

function FabricMovementCreateModal({ isOpenMovement, handleCloseMovement, fabricId }) {
    const [formData, setFormData] = useState({
        date: '',
        movementType: '',
        quantity: '',
        comments: ''
    });

    const handleFormChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Validamos que el id no sea nulo
        const id = fabricId || 1;

        // Enviamos los datos del formulario al backend
        fetch(`http://localhost:8080/fabric/${id}/movements`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al crear el movimiento de tela');
                }
                handleCloseMovement();
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Dialog open={isOpenMovement} onClose={handleCloseMovement}>
            <DialogTitle>Create Fabric Movement</DialogTitle>
            <DialogContent>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Movement Type"
                        type="text"
                        name="movementType"
                        value={formData.movementType}
                        onChange={handleFormChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Quantity"
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleFormChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Comments"
                        type="text"
                        name="comments"
                        value={formData.comments}
                        onChange={handleFormChange}
                        fullWidth
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseMovement}>Cancel</Button>
                <Button onClick={handleFormSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}

export default FabricMovementCreateModal;
