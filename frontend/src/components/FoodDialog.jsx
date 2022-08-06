import * as React from 'react';
import {IconButton, Button} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

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

export default function CreateFoodDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <InfoTwoToneIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Details about {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
    <ThemeProvider theme={whiteTheme}>
        <Button autoFocus onClick={handleClose} variant="outlined" color="primary" style={{ backgroundColor: "#e81932"}}>
           Okay 
           </Button>
            <Button autoFocus onClick={handleClose} style={{ backgroundColor: "#e81932"}}>
              Konumu Gör
             </Button>
          <Button onClick={handleClose}  color="primary" style={{ backgroundColor: "#e81932"}}>Rezervasyon Yap</Button>
          </ThemeProvider>
 </DialogActions>
      </Dialog>
    </div>
  );
}
