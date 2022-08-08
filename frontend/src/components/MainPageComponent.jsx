import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid} from "@mui/x-data-grid";
import CreateActivityDialog from "./ActivityDialog";
import {Rating} from '@mui/material';

export default function ActivitiesGrid(props) {
	const columns = [
		{
			field: "activityName",
			headerName: "Activities",
			headerAlign: 'center',
			minWidth: 800, 
			flex: 4,
			sortable: true,
			editable: false,
		},
		{
			field: "star",
			headerName: "Rating",
			headerAlign: 'center',
			align: 'center',
			minWidth: 200, 
			flex: 3,
			sortable: true,
			editable: false,
			renderCell: (params) => {
				return (
				<Rating name="read-only" value={params.value.rating} precision={0.1} readOnly />
				)
			}
		},
		{
			field: "info",
			headerAlign: 'center',
			align: 'center',
			sortable:false,
			headerName: "Info",
			minWidth: 100, 
			flex: 1,
			editable: false,
			renderCell: (params) => (
				<div>
				  <CreateActivityDialog title={params.value.name} googleLink={params.value.googleLocLink} appleLink={params.value.appleLocLink} rating={params.value.rating} bookingLink={params.value.bookingLink} pictures={params.value.pictures}/>
				</div>
			  )
		},
	];

  
  const rows = props.activities.map( (activity, i=1) => ({id:i++, activityName:activity.name, star:activity, info:activity}));

  return (
    <Box sx={{ height: 1200, minWidth: '100%',  }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
		sx={{
			boxShadow: 2,
			'& .MuiDataGrid-cell:hover': {
			  color: '#b6291e',
			},
			'& .MuiDataGrid-cell:focus-within': {
				outline: 'none !important',
			}
		  }}
      />
    </Box>
  );
}
