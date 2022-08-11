import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid} from "@mui/x-data-grid";
import GoogleIcon from '@mui/icons-material/Google';
import {Rating} from '@mui/material';
import {Button} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import "../static/style/main.css";


export default function PlacesGrid(props) {
    function toTitleCase(str) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
	const columns = [
		{
			field: "placeName",
			headerName: "Places",
			headerAlign: 'center',
			align: 'center',
			minWidth: 300, 
			flex: 4,
			sortable: true,
			editable: false,
		},
		{
			field: "category",
			headerName: "Category",
			headerAlign: 'center',
			align: 'center',
			minWidth: 200, 
			flex: 2,
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
			sortable: false,
			editable: false,
			renderCell: (params) => {
				return (
				<Rating name="read-only" value={params.value.rank / 8} precision={0.1} readOnly />
				)
			}
		},
		{
			field: "google",
			headerAlign: 'center',
			align: 'center',
			sortable:false,
			headerName: "Google Maps",
			minWidth: 100, 
			flex: 1,
			editable: false,
			renderCell: (params) => {
				return (
				    <Button sx={{ textTransform: "none", flex: 1}} autoFocus onClick={(e) => {e.preventDefault(); window.open(params.value.googleLocLink);}} style={{ backgroundColor: "#b6291e"}}>
              <GoogleIcon style={{color:"#fdfdfd"}}></GoogleIcon>
             </Button>
				)
			}
		},
        {
			field: "apple",
			headerAlign: 'center',
			align: 'center',
			sortable:false,
			headerName: "Apple Maps",
			minWidth: 100, 
			flex: 1,
			editable: false,
            renderCell: (params) => {
				return (
				    <Button sx={{ textTransform: "none", flex: 1}} autoFocus onClick={(e) => {e.preventDefault(); window.open(params.value.appleLocLink);}} style={{ backgroundColor: "#b6291e"}}>
              <AppleIcon style={{color:"#fdfdfd"}}></AppleIcon>
             </Button>
				)
			}
		},
	];

  
  const rows = props.places.map( (place, i=1) => ({id:i++, placeName:place.name, category:toTitleCase(place.category), star:place, google:place, apple:place}));

  return (
    <Box sx={{ height: 560, minWidth: '100%',}}>
      <DataGrid
        rows={rows}
        columns={columns}
		rowsPerPageOptions={[10]}
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
