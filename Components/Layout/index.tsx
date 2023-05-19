import { Stack } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import Header from '../Header';
import NextNProgress from 'nextjs-progressbar';
import { colors } from '@mui/material';

 
const Layout : FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextNProgress
        color={colors.deepOrange['A700']}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Header />
      <Stack component="main" sx={{ mt: { md: 8.9, sm: 8, xs: 8 } }}>
        {children}
      </Stack>
    </>
  );
};

export default Layout;
