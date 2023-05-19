import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import FavoriteItem from '../FavoriteItem';
import { RecipeTypeList } from '@/models/Recipes';

type FavoriteList = {
  favoriteData: RecipeTypeList;
};

const FavoriteList: FC<FavoriteList> = ({ favoriteData }) => {
  const renderFavoriteItem = () => {
    return favoriteData.map((favorite) => {
      return (
        <Grid key={favorite._id} item lg={3} md={4} sm={6} xs={12}>
          <FavoriteItem favorite={favorite} />
        </Grid>
      );
    });
  };

  return (
    <>
      <Typography gutterBottom variant="h4" component="h1">
        غذای مورد علاقه
      </Typography>
      <Grid container spacing={3}>
        {renderFavoriteItem()}
      </Grid>
    </>
  );
};

export default FavoriteList;
