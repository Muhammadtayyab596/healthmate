import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'S NO.', width: 150 },
    {
        field: 'firstName',
        headerName: 'Short Name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Brand',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Price Per Tablet',
        width: 150,
        editable: true,
    },
    {
        field: 'packsize',
        headerName: 'Pack size',
        width: 150,
        editable: true,
    },
];



const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, packsize: " 10's capsule" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, packsize: " 10's capsule" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, packsize: " 10's capsule" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, packsize: " 10's capsule" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 55, packsize: " 10's capsule" },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, packsize: "10's capsule" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, packsize: "10's capsule" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, packsize: "10's capsule" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, packsize: " 10's capsule" },
];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: "100%", width: '100%', px: 3 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}