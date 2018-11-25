import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Torrent & Chill
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
