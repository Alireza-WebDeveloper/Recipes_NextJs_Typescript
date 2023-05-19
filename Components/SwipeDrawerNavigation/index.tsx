import {
  Box,
  IconButton,
  SwipeableDrawer,
  Stack,
  Button,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import * as Icons from 'react-icons/md';
const SwipeDrawerNavigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpenSwipeDrawer = () => {
    setOpen(true);
  };
  const handleCloseSwipeDrawer = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
      <IconButton color="primary" onClick={handleOpenSwipeDrawer}>
        <Icons.MdMenu />
      </IconButton>
      <SwipeableDrawer
        onOpen={handleOpenSwipeDrawer}
        open={open}
        onClose={handleCloseSwipeDrawer}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flexGrow: 1,
            p: 2,
          }}
        >
          <Box>
            <IconButton onClick={handleCloseSwipeDrawer} color={'primary'}>
              <Icons.MdClose />
            </IconButton>
          </Box>
          <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link
              href="/"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={handleCloseSwipeDrawer}
            >
              <Button
                size="large"
                variant="text"
                color="inherit"
                sx={{ fontSize: '1.4rem' }}
                startIcon={<Icons.MdHome />}
              >
                خانه
              </Button>
            </Link>
            <Link
              href="/recipes"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={handleCloseSwipeDrawer}
            >
              <Button
                size="large"
                variant="text"
                color="inherit"
                sx={{ fontSize: '1.4rem' }}
                startIcon={<Icons.MdFoodBank />}
              >
                غذاها
              </Button>
            </Link>
          </Stack>
        </Stack>
      </SwipeableDrawer>
    </Box>
  );
};

export default SwipeDrawerNavigation;
