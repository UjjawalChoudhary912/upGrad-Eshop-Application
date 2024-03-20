import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import './Navbar.css'; // Importing CSS

export default function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <div className="title">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6" className="logoText">
            upGrad Eshop
          </Typography>
        </div>
        {/* Use the sx prop to override Material-UI default styles */}
        <Button color="inherit" sx={{ textTransform: 'none' }}>
          Login
        </Button>
        <Button color="inherit" sx={{ textTransform: 'none', marginRight: '5px' }}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

