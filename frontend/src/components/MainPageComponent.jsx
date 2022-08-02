import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'activityName',
    headerName: 'Activity name',
    width: 700,
    sortable: true,
    editable: true,
  },
  {
    field: 'star',
    headerName: 'Rating',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, activityName: 'Jon', age: 35 },
  { id: 2,  activityName:  'Cersei', age: 42 },
  { id: 3,  activityName: 'Jaime', age: 45 },
  { id: 4,  activityName:  'Arya', age: 16 },
  { id: 5,activityName: 'Daenerys', age: null },
  { id: 6,activityName:  null, age: 150 },
  { id: 7, activityName:  'Ferrara', age: 44 },
  { id: 8, activityName: 'Rossini', age: 36 },
  { id: 9, activityName:  'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}
