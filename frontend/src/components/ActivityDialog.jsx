import * as React from 'react';
import {IconButton, Button, Chip, Rating, ImageList, ImageListItem} from '@mui/material';
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

export default function CreateActivityDialog(props) {



  const [open, setOpen] = React.useState(false);

  const itemData = props.pictures.map( picture => ({
    img:picture, title:props.name
  }))

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(props.rating);


  return (
    <div>
      <IconButton variant="outlined" color="error" onClick={handleClickOpen}>
        <InfoTwoToneIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Rating name="read-only" value={value} precision={0.1} readOnly /> <br/>
          </DialogContentText>

          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={250}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
    </ImageList>

        </DialogContent>
        <DialogActions>
    <ThemeProvider theme={whiteTheme}>
        <Button autoFocus onClick={handleClose} variant="outlined" color="primary" style={{ backgroundColor: "#e81932"}}>
           Okay 
           </Button>
            <Button autoFocus onClick={(e) => {e.preventDefault(); window.open(props.googleLink);}} style={{ backgroundColor: "#e81932"}}>
              See on Google Maps
             </Button>
             <Button autoFocus onClick={(e) => {e.preventDefault(); window.open(props.appleLink);}} style={{ backgroundColor: "#e81932"}}>
              See on Apple Maps
             </Button>
             <Button autoFocus onClick={(e) => {e.preventDefault(); window.open(props.bookingLink);}} style={{ backgroundColor: "#e81932"}}>
              Book
             </Button>
          </ThemeProvider>
 </DialogActions>
      </Dialog>
    </div>
  );
}
