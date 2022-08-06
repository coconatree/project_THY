import * as React from 'react';
import {IconButton, Button} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Grid from "@mui/material/Grid";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {ThemeProvider, createTheme} from "@mui/material"


const whiteTheme = createTheme({ palette: { primary: { main: '#fdfdfd'} } })
const redTheme = createTheme({ palette: { primary:{ main: '#c70a0c'}}})

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
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
          <Grid container justifyContent="flex-end" p = {1} style={{ textAlign: "right" }}  sx={{mt:{xs:0, md:0}, p:{xs:0, md:0}}}>
      <IconButton  variant="outlined" onClick={handleClickOpen}>
      <AccountCircleIcon sx={{ fontSize: 60 }}/>
      </IconButton>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Details about you
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          pnr:  <br/>
          firstName: <br/>
          lastName: <br/>
          departureCityName: <br/>
          departureCountryCode: <br/>
          arrivalCityName: <br/>
          arrivalCountryCode: <br/>
          departureDate: <br/>
          boardingTime: <br/>
          departureTime: <br/>
          flightNumber: <br/>
          ticketNumber: <br/>
          seatNumber: <br/>
          arrivalDate: <br/>
          arrivalTime: <br/>
          namePrefix: <br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
    <ThemeProvider theme={whiteTheme}>
        <Button autoFocus onClick={handleClose} variant="outlined" color="primary" style={{ backgroundColor: "#e81932"}}>
           Okay 
           </Button>
          </ThemeProvider>
 </DialogActions>
      </Dialog>
    </div>
  );
}
