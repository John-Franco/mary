import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
} from '@mui/material';

const columns = [
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'movementType', label: 'Movement Type', minWidth: 100 },
    { id: 'quantity', label: 'Quantity', minWidth: 100 },
    { id: 'comments', label: 'Comments', minWidth: 170 },
];

function createData(id, date, movementType, quantity, comments) {
    return { id, date, movementType, quantity, comments };
}

function FabricMovementsModal({ isOpen, handleClose, selectedRow }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchMovements = async () => {
            try {
                const response = await fetch(`http://localhost:8080/fabric/${selectedRow.id || 1}/movements`);
                const data = await response.json();
                const rows = data.map(movement => createData(movement.id, movement.date, movement.movementType, movement.quantity, movement.comments));
                setRows(rows);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovements();
    }, [selectedRow]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Fabric Movements</DialogTitle>
            <DialogContent>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </DialogContent>
        </Dialog>
    );
}

export default FabricMovementsModal;
