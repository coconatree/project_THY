import * as React from "react";
import { IconButton, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Grid from "@mui/material/Grid";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ThemeProvider, createTheme } from "@mui/material";

const whiteTheme = createTheme({ palette: { primary: { main: "#fdfdfd" } } });
const redTheme = createTheme({ palette: { primary: { main: "#c70a0c" } } });

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
				sx={{ mt: { xs: 0, md: 0 }, p: { xs: 0, md: 0 } }}
			>
				<IconButton variant='outlined' onClick={handleClickOpen}>
					<AccountCircleIcon sx={{ fontSize: 60 }} />
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
						Name: {props.t.namePrefix} {props.t.firstname} {props.t.lastname}{" "}
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
