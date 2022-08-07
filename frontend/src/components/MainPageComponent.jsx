import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import CreateActivityDialog from "./ActivityDialog";

export default function ActivitiesGrid(props) {
	const columns = [
		{
			field: "activityName",
			headerName: "Activity name",
			width: 900,
			sortable: true,
			editable: false,
		},
		{
			field: "star",
			headerName: "Rating",
			width: 300,
			editable: false,
		},
		{
			field: "info",
			headerName: "Info",
			width: 300,
			editable: false,
			renderCell: (params) => (
				<div>
				  <CreateActivityDialog title={params.value.name} googleLink={params.value.googleLocLink} appleLink={params.value.appleLocLink} rating={params.value.rating} bookingLink={params.value.bookingLink} pictures={params.value.pictures}/>
				</div>
			  )
		},
	];

  
  const rows = props.activities.map( (activity, i=1) => ({id:i++, activityName:activity.name, star:activity.rating, info:activity}));
  console.log(rows)

  return (
    <Box sx={{ height: 400, minWidth: '100%' }}>
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
