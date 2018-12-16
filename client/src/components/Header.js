import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ButtonBase } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'


function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <ButtonBase 
            key='AppButton' 
            component={Link}
            to='/'>
            <Typography variant="title" color="inherit">
              Torrent & Chill
            </Typography>
          </ButtonBase>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
