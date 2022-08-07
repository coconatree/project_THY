import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function ActivitiesGrid(props) {
	const columns = [
		{
			field: "activityName",
			headerName: "Activity name",
			width: 900,
			sortable: true,
			editable: true,
		},
		{
			field: "star",
			headerName: "Rating",
			width: 300,
			editable: true,
		},
		{
			field: "info",
			headerName: "Info",
			width: 300,
			editable: true,
		},
	];

  
  const rows = props.activities.map( (activity, i=1) => ({activityName:activity.name, star:activity.rating, id:i++}));
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
