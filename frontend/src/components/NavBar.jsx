

import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { ReactComponent as THYLogo } from '../static/vector/THYLogo.svg';

import "../index.css"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

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

      
    </Toolbar>
  </Container>
</AppBar>
//     <div className = "shadow-white shadow-sm bg-slate-900 bg-opacity-60 flex flex-row brightness-110 w-full">
//       <div className = "flex base-1/2 m-3 h-15">
//         <THYLogo/>
//       </div>
//       <hr></hr>
//     </div>
  );
};
 export default ResponsiveAppBar;

/**
 
<div className = "flex justify-center">
          <span className = "font-sans text-extrabold text-white text-center">
            | Trip Booster
          </span>
        </div>

#####

 
 */