import React from 'react';
import {
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Button,
  Stack,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { CenteredLayout } from './centered.layout';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const handleClickIcon = () => {
    navigate(linkRoutes.root);
  };

  const handleClickCharacters = () => {
    navigate(linkRoutes.characterCollection);
  };

  const handleClickLocations = () => {
    navigate(linkRoutes.locationsCollection);
  };

  const handleClickEpisodes = () => {
    navigate(linkRoutes.episodesCollection);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={handleClickIcon}
          >
            <AccountCircle />
          </IconButton>
          <Typography> The Rick and Morty</Typography>
        </Toolbar>
      </AppBar>
      <CenteredLayout>
        <Stack direction="row" spacing={6}>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleClickCharacters}
          >
            Characters
          </Button>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleClickLocations}
          >
            Locations
          </Button>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleClickEpisodes}
          >
            Episodes
          </Button>
        </Stack>
      </CenteredLayout>
      <main className={classes.content}>{children}</main>
    </>
  );
};
