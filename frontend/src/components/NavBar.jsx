

import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ReactComponent as THYLogo } from '../static/vector/THYLogo.svg';

import "../index.css"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

  return (
    
    <div className = "shadow-white shadow-sm bg-slate-900 bg-opacity-60 flex flex-row brightness-110 w-full">
      <div className = "flex flex-row -justify-start base-1/2 m-3 h-14">
        <THYLogo className = "h-12"/> 
        <div className = "flex justify-items-center">
          <span className = "h-full text-sans text-xl text-white text-bold ml-3"> 
            | Trip Booster 
          </span>
        </div>
      </div>
      <hr></hr>
    </div>
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

 <AppBar position="flex" sx={{ bgcolor: "#232B38", margin:"0px"}}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <THYLogo />
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
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        | Trip Booster
      </Typography>
    
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        | Trip Booster
      </Typography>

      
    </Toolbar>
  </Container>
</AppBar>
 */