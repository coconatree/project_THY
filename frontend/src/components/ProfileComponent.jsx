import * as React from "react";
import { IconButton, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Grid from "@mui/material/Grid";
import CheckIcon from '@mui/icons-material/Check';
import "../static/style/main.css";


import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ThemeProvider, createTheme } from "@mui/material";

const whiteTheme = createTheme({ palette: { primary: { main: "#fdfdfd" } } });

function PaperComponent(props) {
	return (
		<Draggable
			handle='#draggable-dialog-title'
			cancel={'[class*="MuiDialogContent-root"]'}
		>
			<Paper {...props} />
		</Draggable>
	);
}

export default function CreateProfileDialog(props) {
	function toTitleCase(str) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}

	function ChekedIn() {
		return <p class="text-green-600">{props.t.checkInInfo}</p>;
	  }
	  
	  function NotCheckedIn() {
		return <p class="text-red-600">{props.t.checkInInfo}</p>;
	  }

	  function SetCheckIn() {
		if (props.t.checkInInfo === "Has not checked in") {
			return <NotCheckedIn/>
		}
		return <ChekedIn/>
	  }
	
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Grid
				container
				justifyContent='flex-end'
				style={{ textAlign: "right" }}
				sx={{ mt: { xs: 0, md: 0 }, p: { xs: 0, md: 0 }}}
				alignItems="center">
				
				<Typography 
        		variant="h6"
       	 		noWrap
        	sx={{
          	mr: 2,
          	display: { xs: 'none', md: 'flex' },
          	fontFamily: 'monospace',
         	 fontWeight: 700,
        	color: 'inherit',
          textDecoration: 'none',
        	}}
      	>
          {props.t.firstName} {toTitleCase(props.t.lastName)}
      </Typography>
				
			
			
					<IconButton variant='fill' onClick={handleClickOpen}>
					<PersonOutlineOutlinedIcon className="text-neutral-200" sx={{fontSize: 40 }} />
				</IconButton>
			</Grid>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperComponent={PaperComponent}
				aria-labelledby='draggable-dialog-title'
			>
				<DialogTitle style={{ cursor: "none" }} id='draggable-dialog-title'>
					Personal Information
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Name:  {props.t.firstName} <br/>
						Title: {props.t.namePrefix} {props.t.lastName} <br/>
					</DialogContentText>
				</DialogContent>
				<DialogTitle style={{ cursor: "none" }} id='draggable-dialog-title'>
					Trip Overview
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Reservation Number (PNR): {props.t.pnr} <br/>
						Ticket Number: {props.t.ticketNumber} <br/>
						Flight Number: {props.t.flightNumber} <br/>
						Seat Number: {props.t.seatNumber} <br/>
						Boarding time: {props.t.departureDate}, {props.t.boardingTime}<br/><br/>
						<SetCheckIn/> <br/>
						<b>Departure </b> <br/>
						Location: {props.t.departureCityName},{" "}{props.t.departureCountryCode}.<br/>
						Time: {props.t.departureDate}, {props.t.departureTime} <br/><br/>
						<b>Arrival</b> <br/>
						Location: {props.t.arrivalCityName},{" "}{props.t.arrivalCountryCode}.<br/>
						Time: {props.t.arrivalDate}, {props.t.arrivalTime}
					</DialogContentText>
				</DialogContent>
		
				
				<DialogActions>
					<ThemeProvider theme={whiteTheme}>
						<Button
							autoFocus
							onClick={handleClose}
							variant='outlined'
							color='primary'
							style={{ backgroundColor: "#b6291e" }}
						>
							<CheckIcon/>
						</Button>
					</ThemeProvider>
				</DialogActions>
			</Dialog>
		</div>
	);
}
