import FavoriteList from '@/Components/Favorite/FavoriteList';
import { Container, Grid } from '@mui/material';
import React from 'react';
import { FavoriteContext } from '@/Context/Favorite';
import FavoriteEmpty from '@/Components/Favorite/FavoriteEmpty';
import Head from 'next/head';
const FavoritePage = () => {
  const { state: favoriteData } = FavoriteContext();
  return (
    <>
      <Head>
        <title>ورگانتی | غذای مورد علاقه</title>
      </Head>
      <Container>
        <Grid container p={2}>
          <Grid item xs={12}>
            {favoriteData.length === 0 ? (
              <FavoriteEmpty />
            ) : (
              <FavoriteList favoriteData={favoriteData} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FavoritePage;
