import * as React from 'react';
import {IconButton, Button, Box, Rating, ImageList, ImageListItem, Typography} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import Draggable from 'react-draggable';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import {ThemeProvider, createTheme} from "@mui/material"


const whiteTheme = createTheme({ palette: { primary: { main: '#fdfdfd'} } })

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
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <InfoOutlinedIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ textAlign: "center", cursor: 'move' }} id="draggable-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box sx={{display: 'flex'}} className="mb-3">
          <Typography sx={{flex:2}}>
            Rating: {props.rating} / 5
          </Typography>
          <Rating name="read-only" sx={{flex:1}} value={value} precision={0.1} readOnly /> <br/>
          </Box>
          <Typography style={{ fontWeight:500, fontSize:22, cursor: 'move' }} className="pb-10" align="center" color="text.secondary">
              Pictures
          </Typography>
          </DialogContentText>
            
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={300} variant="quilted">
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
    <ThemeProvider theme={whiteTheme} sx={{textAlign:"center", display:"flex"}} >
              
       
            <Button sx={{ textTransform: "none", flex: 1}} autoFocus onClick={(e) => {e.preventDefault(); window.open(props.googleLink);}} style={{ backgroundColor: "#b6291e"}}>
              <GoogleIcon></GoogleIcon> &nbsp; Maps
             </Button>
             <Button sx={{ textTransform: "none", flex: 1}} autoFocus onClick={(e) => {e.preventDefault(); window.open(props.appleLink);}} style={{ backgroundColor: "#b6291e"}}>
             <AppleIcon></AppleIcon> &nbsp; Maps
             </Button>
             <Button sx={{ textTransform: "none", flex: 1}} autoFocus onClick={(e) => {e.preventDefault(); window.open(props.bookingLink);}} style={{ backgroundColor: "#b6291e"}}>
              <EventAvailableIcon></EventAvailableIcon> &nbsp; Book
             </Button>
             <Button sx={{ textTransform: "none", flex: 1}} autoFocus onClick={handleClose} variant="outlined" color="primary" style={{ backgroundColor: "#b6291e"}}>
            <CheckIcon></CheckIcon>          
                 </Button>
          </ThemeProvider>
 </DialogActions>
      </Dialog>
    </div>
  );
}
