import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import * as Icons from 'react-icons/md';
const MainNavigation = () => {
  return (
    <Box
      sx={{ display: { md: 'flex', xs: 'none' }, flexDirection: 'row', gap: 3 }}
    >
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
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
    </Box>
  );
};

export default MainNavigation;
