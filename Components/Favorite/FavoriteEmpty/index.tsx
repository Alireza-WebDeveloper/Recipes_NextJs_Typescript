import { Stack, Grid, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import * as Icons from 'react-icons/md';
const FavoriteEmpty = () => {
  const router = useRouter();
  const handlerBackToMainPage = () => {
    router.push('/');
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        غذایی به سبد اضافه نشده
      </Typography>

      <Button
        onClick={handlerBackToMainPage}
        variant="text"
        color="primary"
        size="large"
        endIcon={<Icons.MdArrowBackIos />}
        sx={{ fontSize: '1.4rem' }}
      >
        برگشت به صفحه اصلی
      </Button>
    </Grid>
  );
};

export default FavoriteEmpty;
