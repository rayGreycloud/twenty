import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const Header = () => {
  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <IconButton edge={'start'} color={'inherit'} aria-label={'menu'}>
          <MenuIcon />
        </IconButton>
        <Typography variant={'h6'}>rayGreycloud</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
