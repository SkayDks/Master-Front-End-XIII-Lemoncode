import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import { useNavigate} from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { Typography } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkRoutes.root);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
            <AccountCircle />
          </IconButton>
          <Typography> The Rick and Morty</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
