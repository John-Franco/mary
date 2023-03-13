import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from '@mui/material';

function FabricCreateModal({ isOpen, handleCloseCreateModal, handleCreate }) {
    const [name, setName] = useState('');
    const [composition, setComposition] = useState('');
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFabric = {
            name,
            composition,
            width,
            length,
            color,
        };
        handleCreate(newFabric);
    };

    const handleCancel = () => {
        handleCloseCreateModal();
    };

    return (
        <Dialog open={isOpen} onClose={handleCloseCreateModal}>
            <DialogTitle>Create Fabric</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="composition"
                        label="Composition"
                        name="composition"
                        value={composition}
                        onChange={(event) => setComposition(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="width"
                        label="Width"
                        name="width"
                        value={width}
                        onChange={(event) => setWidth(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="length"
                        label="Length"
                        name="length"
                        value={length}
                        onChange={(event) => setLength(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="color"
                        label="Color"
                        name="color"
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FabricCreateModal;
