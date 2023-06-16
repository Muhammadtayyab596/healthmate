import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo({ rows, columns }) {
  return (
    <Box sx={{ height: '100%', width: '100%', mt: 3 }}>
      <DataGrid
        sx={{
          px: 4,
          py: 2,
        }}
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
