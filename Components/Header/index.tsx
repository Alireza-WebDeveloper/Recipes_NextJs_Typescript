import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import React from 'react';
import MainNavigation from '../MainNavigation';
import ToggleTheme from '../ToggleTheme';
import FavoriteLink from '../Favorite/FavoriteLink';
import SwipeDrawerNavigation from '../SwipeDrawerNavigation';

const Header = () => {
  return (
    <AppBar
      color="transparent"
      sx={{
        background: (theme) => theme.palette.header?.main,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(13px)',
        border: 'none',
      }}
    >
      <Toolbar>
        <Stack
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 1,
            p: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MainNavigation />
          <SwipeDrawerNavigation />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <FavoriteLink />
            <ToggleTheme />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
