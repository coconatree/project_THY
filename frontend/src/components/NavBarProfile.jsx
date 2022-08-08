import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { ReactComponent as THYLogo } from '../static/vector/THYLogo.svg';
import CreateProfileDialog from "../components/ProfileComponent";
import "../index.css"


const ResponsiveAppBar = (props) => {

  return (
  <AppBar sx={{ bgcolor: "#232B38", margin:"0px"}}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
    <THYLogo/> 
      <Typography 
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        &nbsp; | &nbsp; Trip Booster
      </Typography>
    
      <Typography
        variant="h7"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 3,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        &nbsp; | &nbsp; Trip Booster
      </Typography> 
  
     <div class='ml-auto mr-0'>
        <CreateProfileDialog   t={props.ticket} />
        </div>
      
      
    </Toolbar>
  </Container>
</AppBar>
//  
  );
};
 export default ResponsiveAppBar; 