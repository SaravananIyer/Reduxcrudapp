import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>All Posts</Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
          <Link to="/myposts" style={{ color: 'white', textDecoration: 'none' }}>My Posts</Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/create-update" style={{ color: 'white', textDecoration: 'none' }}>Create/Update post</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
