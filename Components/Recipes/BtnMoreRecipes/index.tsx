import React from 'react';
import { Box, Button } from '@mui/material';
import * as Icons from 'react-icons/md';
import Link from 'next/link';
const BtnMoreRecipes = () => {
  return (
    <Box mt={2}>
      <Link
        href="/recipes"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <Button
          sx={{ fontSize: '1.5rem' }}
          variant="text"
          size="large"
          color="secondary"
          endIcon={<Icons.MdOutlineKeyboardArrowLeft />}
        >
          موارد بیشتر
        </Button>
      </Link>
    </Box>
  );
};

export default BtnMoreRecipes;
