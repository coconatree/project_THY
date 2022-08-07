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
		return str.replace(
		  /\w\S*/g,
		  function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		  }
		);
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
				
				<IconButton sx={{display: 'flex',  flexDirection:'column'}} className="inline-block align-middle"  variant='outlined' onClick={handleClickOpen}>
				<PersonOutlineOutlinedIcon className="text-neutral-200" sx={{ flex: 9, fontSize: 50 }} />
				<Typography sx={{flex: 1, fontFamily: 'monospace',fontWeight: 500}} className="inline-block align-middle text-neutral-200" variant="h4" gutterBottom component="div">
					  {props.t.firstName} {toTitleCase(props.t.lastName)}
                    </Typography>
				
				</IconButton>
			</Grid>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperComponent={PaperComponent}
				aria-labelledby='draggable-dialog-title'
			>
				<DialogTitle style={{ cursor: "move" }} id='draggable-dialog-title'>
					Trip Details &amp; Personal Information
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						PNR: {props.t.pnr} <br />
						Name: {props.t.namePrefix} {props.t.firstName} {props.t.lastName}{" "}
						<br />
						Route: From {props.t.departureCityName},{" "}
						{props.t.departureCountryCode} to {props.t.arrivalCityName},{" "}
						{props.t.arrivalCountryCode}
						<br />
						Departure {props.t.departureDate} - {props.t.departureTime},
						Boarding: {props.t.boardingTime}
						<br />
						Flight Number: {props.t.flightNumber} <br />
						Ticket Number: {props.t.ticketNumber} <br />
						Seat Number: {props.t.seatNumber} <br />
						Arrival Info: Arrival Date {props.t.arrivalDate},
						{" arrival time is "}
						{props.t.arrivalTime} <br />
						Check in Status: {props.t.checkInInfo}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<ThemeProvider theme={whiteTheme}>
						<Button
							autoFocus
							onClick={handleClose}
							variant='outlined'
							color='primary'
							style={{ backgroundColor: "#e81932" }}
						>
							Okay
						</Button>
					</ThemeProvider>
				</DialogActions>
			</Dialog>
		</div>
	);
}
